"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Pagination from "./pagination";
import ColorInput from "../components/ColorInput";

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
  const router = useRouter();
  const page = searchParams.page ?? "1";
  const productsData = getProduct(page);

  const [products] = await Promise.all([productsData]);

  return (
    <>
      <ColorInput />
      <div>
        {products.data.map((product: any) => {
          return <div>{product.name}</div>;
        })}
        <Pagination page={page} />
      </div>
    </>
  );
}

export default Product;
