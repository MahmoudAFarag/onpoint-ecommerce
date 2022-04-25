// Components
import HomePage from '../../components/HomePage';

// Firebase
import { getProducts } from '../../lib/products';

const Search = ({ products }) => {
  return (
    <>
      <HomePage products={products} />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const q = ctx.query.q;

  // if user didn't search anything, just return empyt array
  if (!q) {
    return {
      props: {
        products: [],
      },
    };
  }

  const allProducts = await getProducts();

  // check if allProducts title contain q with regex
  const products = allProducts.filter((product) => product.name.toLowerCase().match(new RegExp(q, 'i')));

  const productsParsed = JSON.parse(JSON.stringify(products));

  return {
    props: {
      products: productsParsed,
    },
  };
};

export default Search;
