import React from "react";
import { useRouter } from "next/navigation";
import getProduct from "./getProduct";

async function Product({ searchParams }: any) {
  const productsData = getProduct(searchParams);
  const [products] = await Promise.all([productsData]);
  console.log(products);
  return <div></div>;
}

export default Product;
