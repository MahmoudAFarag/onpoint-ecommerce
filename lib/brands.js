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

const brandsCol = collection(db, "brands");

export const getBrandById = async (id) => {
  try {
    const brandDoc = doc(db, "brands", id);
    const brand = await getDoc(brandDoc);

    return { done: true, brand: { ...brand.data(), id: brand.id } };
  } catch (error) {
    return { done: false, message: error.message };
  }
};

export const addBrand = async (brand) => {
  try {
    if (!brand) {
      throw new Error("Brand name is required");
    }

    // check if brand name already exists
    const brandQueryRef = query(brandsCol, where("name", "==", brand));

    const brandsList = await getDocs(brandQueryRef);

    if (!brandsList.empty) {
      throw new Error("Brand already exists");
    }

    await addDoc(brandsCol, {
      name: brand,
      created_at: serverTimestamp(),
      modified_at: serverTimestamp(),
    });

    return { done: true, message: `Brand ${brand} added` };
  } catch (error) {
    return { done: false, message: error.message };
  }
};

export const updateBrand = async (id, oldName, newName) => {
  try {
    if (!id) {
      throw new Error("Brand id is required");
    }

    if (!oldName) {
      throw new Error("Old brand name is required");
    }
    if (!newName) {
      throw new Error("New brand name is required");
    }

    if (oldName === newName) {
      throw new Error("You try to update brand To the same name");
    }

    // get brand By Id
    const brandById = await getBrandById(id);

    // check if no errors
    if (!brandById.done) {
      throw new Error(brandById.message);
    }

    // check if brand object not empty
    const isEmpty = Object.keys(brandById.brand).length === 0;

    if (isEmpty) {
      throw new Error("brand not found");
    }

    // check if old brand name == new brand name
    if (brandById.brand.name === newName) {
      throw new Error("Something Went Wrong Please Try Again");
    }

    // update
    await setDoc(
      doc(db, "brands", id),
      { name: newName, modified_at: serverTimestamp() },
      { merge: true }
    );

    return { done: true, message: `Brand ${oldName} updated to ${newName}` };
  } catch (error) {
    return { done: false, message: error.message };
  }
};

export const deleteBrand = async (id) => {
  try {
    if (!id) {
      throw new Error("Brand id is required");
    }

    // get Brand By Id
    const brandById = await getBrandById(id);

    // check if no errors
    if (!brandById.done) {
      throw new Error(brandById.message);
    }

    // check if brand object not empty
    const isEmpty = Object.keys(brandById.brand).length === 0;

    if (isEmpty) {
      throw new Error("Brand not found");
    }

    // delete
    await deleteDoc(doc(db, "brands", id));

    return { done: true, message: "Brands has ben deleted" };
  } catch (error) {
    return { done: false, message: error.message };
  }
};
