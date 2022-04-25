import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  serverTimestamp,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

const categoriesCol = collection(db, "categories");

export const getCategories = async () => {
  try {
    const allCategories = await getDocs(categoriesCol);

    return allCategories.docs.map((category) => ({
      ...category.data(),
      id: category.id,
    }));
  } catch (error) {
    console.error("Error getting categories: ", error.message);
  }
};

export const getCategoryById = async (id) => {
  try {
    const categoryDoc = doc(db, "categories", id);
    const category = await getDoc(categoryDoc);

    return { done: true, category: { ...category.data(), id: category.id } };
  } catch (error) {
    return { done: false, message: error.message };
  }
};

export const addCategory = async (category) => {
  try {
    if (!category) {
      throw new Error("Category name is required");
    }

    // check if category name already exists
    const categoryQueryRef = query(
      categoriesCol,
      where("name", "==", category)
    );

    const categoriesList = await getDocs(categoryQueryRef);

    if (!categoriesList.empty) {
      throw new Error("Category already exists");
    }

    await addDoc(categoriesCol, {
      name: category,
      created_at: serverTimestamp(),
      modified_at: serverTimestamp(),
    });

    return { done: true, message: `Category ${category} added` };
  } catch (error) {
    return { done: false, message: error.message };
  }
};

export const updateCategory = async (id, oldName, newName) => {
  try {
    if (!id) {
      throw new Error("Category id is required");
    }

    if (!oldName) {
      throw new Error("Old category name is required");
    }
    if (!newName) {
      throw new Error("New category name is required");
    }

    if (oldName === newName) {
      throw new Error("You Try To Update Category To Same Name");
    }

    // get Category By Id
    const categoryById = await getCategoryById(id);

    // check if no errors
    if (!categoryById.done) {
      throw new Error(categoryById.message);
    }

    // check if category object not empty
    const isEmpty = Object.keys(categoryById.category).length === 0;

    if (isEmpty) {
      throw new Error("Category not found");
    }

    // check if old category name == new category name
    if (categoryById.category.name === newName) {
      throw new Error("Something Went Wrong Please Try Again");
    }

    // update
    await setDoc(doc(db, "categories", id), { name: newName }, { merge: true });

    return { done: true, message: `Category ${oldName} updated to ${newName}` };
  } catch (error) {
    return { done: false, message: error.message };
  }
};

export const deleteCategory = async (id) => {
  try {
    if (!id) {
      throw new Error("Category id is required");
    }

    // get Category By Id
    const categoryById = await getCategoryById(id);

    // check if no errors
    if (!categoryById.done) {
      throw new Error(categoryById.message);
    }

    // check if category object not empty
    const isEmpty = Object.keys(categoryById.category).length === 0;

    if (isEmpty) {
      throw new Error("Category not found");
    }

    // delete
    await deleteDoc(doc(db, "categories", id));

    return { done: true, message: "Category has ben deleted" };
  } catch (error) {
    return { done: false, message: error.message };
  }
};
