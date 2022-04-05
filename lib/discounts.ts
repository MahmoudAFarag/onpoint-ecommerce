import { collection, CollectionReference, addDoc, runTransaction, doc, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Discount, DiscountDoc } from '../types/Discount';

const discountsCol = collection(db, 'discounts') as CollectionReference<DiscountDoc>;

const validateDiscount = (discount: Discount) => {
  if (!discount.name) {
    throw new Error('Discount name is required');
  }

  if (!discount.description) {
    throw new Error('Discount description is required');
  }

  if (!discount.discount_percent) {
    throw new Error('Discount percent is required');
  }

  if (typeof discount.active !== 'boolean') {
    throw new Error('Discount active is required');
  }
};

export const getDiscounts = async () => {
  try {
    const discounts: DiscountDoc[] = [];

    const discountsSnapshot = await getDocs(discountsCol);

    discountsSnapshot.forEach((discount) => {
      discounts.push({
        ...discount.data(),
        id: discount.id,
      });
    });

    if (discounts.length === 0) {
      throw new Error('No discounts found');
    }

    return discounts;
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

export const addDiscount = async (discount: Discount) => {
  try {
    validateDiscount(discount);

    await runTransaction(db, async (transaction) => {
      const discountRef = doc(db, 'discounts', discount.name);
      const discountDoc = await transaction.get(discountRef);

      if (discountDoc.exists()) {
        throw 'Discount already exists';
      }

      transaction.set(discountRef, {
        ...discount,
        created_at: serverTimestamp(),
        modified_at: serverTimestamp(),
      });
    });

    console.log('Discount written with ID: ', discount.name);
  } catch (error) {
    console.error('Error adding discount: ', error);
  }
};
