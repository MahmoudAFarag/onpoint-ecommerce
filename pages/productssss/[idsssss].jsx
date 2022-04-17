import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SingleProduct = () => {
  const route = useRouter();
  const id = route.query.id;

  console.log(id);

  return <Link href='/'><a>aaaa</a></Link>;
};

export default SingleProduct;
