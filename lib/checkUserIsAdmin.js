import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const checkUserIsAdmin = async (id) => {
  try {
    const docRef = doc(db, "users", id);
    const getUser = await getDoc(docRef);

    if (getUser.data().role === "admin") {
      return { done: true, isAdmin: true };
    } else {
      return { done: true, isAdmin: false };
    }
  } catch (error) {
    return { done: false, isAdmin: false, message: error.message };
  }
};

export default checkUserIsAdmin;
