"use client";
import React from "react";
import { useRouter } from "next/navigation";

async function GetProduct({ searchParams }: any) {
  const page = searchParams.page ?? "1";
  const router = useRouter();
  const res = await fetch(
    `https://reqres.in/api/products?page=${page}&per_page=5`
  );
  if (res.status < 300) {
    router.refresh();
  }

  const products = await res.json();

  return (
    <div>
      {products.data.map((product: any) => {
        return <div>{product.name}</div>;
      })}
    </div>
  );
}

export default GetProduct;
