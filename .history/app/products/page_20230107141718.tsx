import React from "react";
import Pagination from "./pagination";
import ColorInput from "../components/ColorInput";
import GetProduct from "./getProduct";

async function getProduct(page: any) {
  const res = await fetch(
    `https://reqres.in/api/products?page=${page}&per_page=5`
  );
  return res.json();
}
type SearchParams = {
  searchParams: {
    page: string;
  };
};

async function Product({ searchParams }: SearchParams) {
  const page = searchParams.page ?? "1";
  const productsData = getProduct(page);

  const [products] = await Promise.all([productsData]);

  return (
    <>
      <ColorInput />
      <GetProduct />
      <Pagination page={page} />
    </>
  );
}

export default Product;
