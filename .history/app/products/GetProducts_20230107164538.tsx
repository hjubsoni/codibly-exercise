import React from "react";
import SingleProduct from "./SingleProduct";

type SearchParams = {
  page: string;
};

type Product = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

async function GetProducts({ searchParams }: { searchParams: SearchParams }) {
  const response = await fetch(
    `https://reqres.in/api/products?per_page=5&page=${searchParams.page}`
  );
  const products = await response.json();
  const { data } = products;
  return (
    <div className="flex flex-col gap-4">
      {data.map((product: Product) => {
        return <SingleProduct {...product} key={product.id} />;
      })}
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
