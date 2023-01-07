import React from "react";
import GetProduct from "./GetProduct";
import RefreshGetProduct from "./RefreshGetProduct";

// async function getProduct(page: any) {
//   const res = await fetch(
//     `https://reqres.in/api/products?page=${page}&per_page=5`
//   );
//   return res.json();
// }
// type SearchParams = {
//   searchParams: {
//     page: string;
//   };
// };

type SearchParams = {
  page: string;
};

function Products({ searchParams }: { searchParams: SearchParams }) {
  console.log(searchParams);
  // const page = searchParams.page ?? "1";
  // const productsData = getProduct(page);

  // const [products] = await Promise.all([productsData]);
  // const b = await products;
  return <RefreshGetProduct />;
}

export default Products;
