import { addProduct } from '../lib/products';

const Seeder = () => {
  const handleAdd = async (e) => {
    e.preventDefault();

    const data = await fetch('https://fakestoreapi.com/products');
    const products = await data.json();

    products.map((product) =>
      addProduct({
        name: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
        discount: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
        reviews: [
          {
            name: 'John',
            review:
              "I've been using this product for a long time now and I'm very happy with the results. I've tried many other products but this is by far the best. I can't say enough good things about this product.",
          },
          {
            name: 'Peter',
            review:
              "I've been using this product for a long time now and I'm very happy with the results. I've tried many other products but this is by far the best. I can't say enough good things about this product.",
          },
          {
            name: 'Mary',
            review:
              "I've been using this product for a long time now and I'm very happy with the results. I've tried many other products but this is by far the best. I can't say enough good things about this product.",
          },
        ],
      })
    );
  };

  return (
    <>
      <div>seeder</div>
      <button onClick={handleAdd}>add products</button>
    </>
  );
};

export default Seeder;
