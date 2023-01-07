"use client";
import React from "react";
import { useRouter } from "next/navigation";
import GetProduct from "./getProduct";

async function Product({ searchParams }: any) {
  const router = useRouter();
  const products = await fetch(
    `https://reqres.in/api/products?page=${searchParams.page}&per_page=5`
  );
  const response = await products.json();
  const { data } = response;

  const navigateToNextPage = () => {
    router.push(`/products?page=${searchParams.page + 1}`);
  };

  return (
    <div>
      <GetProduct />
    </div>
  );
}

export default Product;
