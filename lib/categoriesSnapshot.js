import { collection, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const categoriesSnapshot = (add, update, remove, finishLoading) => {
  const categoriesCollectionRef = collection(db, "categories");
  const categoriesCollectionQueryRef = query(categoriesCollectionRef);

  unSubCategoriesSnapshot = onSnapshot(cartCollectionQueryRef, {
    next: (snap) => {
      snap.docChanges().map((change, idx) => {
        const categoryObj = { ...change.doc.data(), id: change.doc.id };

        if (change.type == "added") {
          add(categoryObj);
        } else if (change.type == "modified") {
          update(categoryObj);
        } else if (change.type == "removed") {
          remove(categoryObj);
        }

        if (snap.docChanges().length - 1 == idx) {
          finishLoading();
        }
      });
    },
  });
};

export default categoriesSnapshot;
