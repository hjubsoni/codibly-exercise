"use client";
import React from "react";
import { useRouter } from "next/navigation";
import GetProduct from "./getProduct";

async function Product({ searchParams }: any) {
  const router = useRouter();

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
