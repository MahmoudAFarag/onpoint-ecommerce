import { collection, CollectionReference, doc, getDocs, addDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Product, ProductDoc } from '../types/Product';

const productsCol = collection(db, 'products') as CollectionReference<ProductDoc>;

export const getProducts = async () => {
  try {
    const products: ProductDoc[] = [];

    const productsSnapshot = await getDocs(productsCol);

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

export const getProduct = async (id: string) => {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error('Product not found');
  }

  const product = {
    ...docSnap.data(),
    id: docSnap.id,
  };

  return product;
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
      const productRef = await addDoc(productsCol, {
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
