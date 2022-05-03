import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebase";

const brandsSnapshot = (add, update, remove, finishLoading) => {
  const brandsCollectionRef = collection(db, "brands");
  const brandsCollectionQueryRef = query(
    brandsCollectionRef,
    orderBy("created_at", "asc")
  );

  const unSubBrandsSnapshot = onSnapshot(brandsCollectionQueryRef, {
    next: (snap) => {
      snap.docChanges().map((change, idx) => {
        const brandObj = { ...change.doc.data(), id: change.doc.id };

        if (change.type == "added") {
          add(brandObj);
        } else if (change.type == "modified") {
          update(brandObj);
        } else if (change.type == "removed") {
          remove(brandObj);
        }

        if (snap.docChanges().length - 1 == idx) {
          finishLoading();
        }
      });
    },
  });

  return unSubBrandsSnapshot;
};

export default brandsSnapshot;
