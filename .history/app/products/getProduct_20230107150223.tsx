"use client";
import React from "react";
import { useRouter } from "next/navigation";

function GetProduct({ product }: any) {
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
