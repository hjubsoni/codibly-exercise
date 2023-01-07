import React from "react";
import { useRouter } from "next/navigation";

function GetProduct({ num }: { num: number }) {
  return (
    <div>
      <h1>Get Product</h1>
      <h2>{num}</h2>
    </div>
  );
}

export default GetProduct;

// async function GetProduct({ searchParams }: any) {
//   const page = searchParams.page ?? "1";
//   const router = useRouter();
//   const res = await fetch(
//     `https://reqres.in/api/products?page=${page}&per_page=5`
//   );
//   if (res.status < 300) {
//     router.refresh();
//   }

//   const products = await res.json();
