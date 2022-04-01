import { collection, CollectionReference, getDocs, runTransaction, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Category, CategoryDoc } from '../types/Category';

const CategoriesCol = collection(db, 'categories') as CollectionReference<CategoryDoc>;

export const getCategories = async () => {
  try {
    const categories: CategoryDoc[] = [];

    const categoriesSnapshot = await getDocs(CategoriesCol);

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
    console.error('Error getting documnets: ', error);
  }
};

export const addProductCategory = async (productCategory: Category) => {
  try {
    const categories = await getCategories();
    const foundCategory = categories?.find((category) => category.name === productCategory.name);

    if (foundCategory) {
      throw new Error('Category already exists');
    } else {
      const productCategoryRef = await addDoc(CategoriesCol, {
        ...productCategory,
        createdAt: serverTimestamp(),
      });
      console.log('Document written with ID: ', productCategoryRef.id);
    }
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
