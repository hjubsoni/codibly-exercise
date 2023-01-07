import React from "react";
import { useRouter } from "next/navigation";

function GetProduct() {
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

  return <div>hello</div>;
}

export default GetProduct;
