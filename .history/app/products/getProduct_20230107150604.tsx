"use client";
import React from "react";
import { useRouter } from "next/navigation";

async function getProduct(page: any) {
  const res = await fetch(
    `https://reqres.in/api/products?page=${page}&per_page=5`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

function GetProduct({ searchParams }: any) {
  const page = searchParams.page ?? "1";
  const productsData = getProduct(page);

  const [products] = await Promise.all([productsData]);
  const router = useRouter();
  if (product) {
    router.refresh();
  }
  return (
    <div>
      {product.data.map((product: any) => {
        return <div>{product.name}</div>;
      })}
    </div>
  );
}

export default GetProduct;
