import React from "react";

type SearchParams = {
  page: string;
};

async function GetProducts({ searchParams }: { searchParams: SearchParams }) {
  const products = await fetch("https://reqres.in/api/products?per_page=5");
  return (
    <div>
      <h1>Get Product</h1>
    </div>
  );
}

export default GetProducts;

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
