// // import { addProduct } from '../lib/products';

// const categories = ['consoles', 'games', 'accessories', 'toys', 'clothing', 'home'];
// const discounts = ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'];

// const products = [
//   // Generate 20 products
//   ...Array(20)
//     .fill(0)
//     .map((_, i) => ({
//       name: `Product ${i + 2}`,
//       description: 'lorem ipsum dolor sit amet',
//       image: 'https://picsum.photos/1200',
//       category: categories[Math.floor(Math.random() * categories.length)],
//       discount: discounts[Math.floor(Math.random() * discounts.length)],
//       price: 10,
//       quantity: Math.floor(Math.random() * 20),
//     })),
// ];

const Seeder = () => {
  //   const handleSeeder = async () => {
  //     products.map(async (product) => {
  //       await addProduct(product);
  //       console.log('Products added');
  //     });
  //   };
  //   return (
  //     <>
  //       <button onClick={handleSeeder}>seed database</button>
  //     </>
  //   );
};

export default Seeder;
