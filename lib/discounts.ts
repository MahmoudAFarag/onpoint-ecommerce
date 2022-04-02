import { collection, CollectionReference, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
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

  if (!discount.active) {
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

    const discounts = await getDiscounts();
    const foundDiscount = discounts?.find((item) => item.name === discount.name);

    if (foundDiscount) {
      throw new Error('Discount already exists');
    } else {
      const discountRef = await addDoc(discountsCol, {
        ...discount,
        created_at: serverTimestamp(),
        modified_at: serverTimestamp(),
      });

      console.log('Document written with ID: ', discountRef.id);
    }
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
