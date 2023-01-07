import React from "react";
import GetProducts from "./GetProducts";

type SearchParams = {
  page: string;
};

function Products({ searchParams }: { searchParams: SearchParams }) {
  // const page = searchParams.page ?? "1";
  // const productsData = getProduct(page);

  // const [products] = await Promise.all([productsData]);
  // const b = await products;
  return <GetProducts />;
}

export default Products;
