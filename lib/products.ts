import {
  collection,
  CollectionReference,
  query,
  doc,
  getDocs,
  addDoc,
  serverTimestamp,
  getDoc,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Product, ProductDoc } from '../types/Product';

const productsRef = collection(db, 'products') as CollectionReference<ProductDoc>;

export const getProducts = async () => {
  try {
    const products: ProductDoc[] = [];

    const productsSnapshot = await getDocs(productsRef);

    productsSnapshot.forEach((product) => {
      products.push({
        ...product.data(),
        id: product.id,
      });
    });

    if (products.length === 0) {
      throw new Error('No products found');
    }

    return products;
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

export const getLatestProducts = async (userLimit: number) => {
  try {
    const products: ProductDoc[] = [];

    const q = query(productsRef, orderBy('created_at', 'desc'), limit(userLimit));
    const productsSnapshot = await getDocs(q);

    productsSnapshot.forEach((product) => {
      products.push({
        ...product.data(),
        id: product.id,
      });
    });

    if (products.length === 0) {
      throw new Error('No products found');
    }

    console.log(products);
    return products;
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

export const getProduct = async (id: string) => {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error('Product not found');
  }

  return {
    ...docSnap.data(),
    id: docSnap.id,
  };
};

export const addProduct = async (product: Product) => {
  try {
    if (!product.name) {
      throw new Error('Product name is required');
    }

    if (!product.description) {
      throw new Error('Product description is required');
    }

    const products = await getProducts();
    const foundProduct = products?.find((item) => item.name === product.name);

    if (foundProduct) {
      throw new Error('Product already exists');
    } else {
      const productRef = await addDoc(productsRef, {
        ...product,
        created_at: serverTimestamp(),
        modified_at: serverTimestamp(),
      });
      console.log('Document written with ID: ', productRef.id);
    }
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
