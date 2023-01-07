"use client";
import React from "react";
import { useRouter } from "next/navigation";
import GetProduct from "./getProduct";

async function Product({ searchParams }: any) {
  const router = useRouter();

  return (
    <div>
      <GetProduct page={searchParams.page} />
    </div>
  );
}

export default Product;
