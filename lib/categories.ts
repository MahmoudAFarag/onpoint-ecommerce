import { collection, CollectionReference, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Category, CategoryDoc } from '../types/Category';

const categoriesCol = collection(db, 'categories') as CollectionReference<CategoryDoc>;

export const getCategories = async () => {
  try {
    const categories: CategoryDoc[] = [];

    const categoriesSnapshot = await getDocs(categoriesCol);

    categoriesSnapshot.forEach((category) => {
      categories.push({
        ...category.data(),
        id: category.id,
      });
    });

    if (categories.length === 0) {
      throw new Error('No categories found');
    }

    return categories;
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

export const addCategory = async (category: Category) => {
  try {
    if (!category.name) {
      throw new Error('Category name is required');
    }

    if (!category.description) {
      throw new Error('Category description is required');
    }

    const categories = await getCategories();
    const foundCategory = categories?.find((item) => item.name === category.name);

    if (foundCategory) {
      throw new Error('Category already exists');
    } else {
      const categoryRef = await addDoc(categoriesCol, {
        ...category,
        created_at: serverTimestamp(),
        modified_at: serverTimestamp(),
      });
      console.log('Document written with ID: ', categoryRef.id);
    }
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
