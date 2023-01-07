import React from "react";
import { useRouter } from "next/navigation";
import Pagination from "./pagination";
import ColorInput from "../components/ColorInput";

async function getProduct(page: any) {
  const res = await fetch(
    `https://reqres.in/api/products?page=${page}&per_page=5`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}
type SearchParams = {
  searchParams: {
    page: string;
  };
};

async function Product({ searchParams }: SearchParams) {
  const page = searchParams.page ?? "1";
  const productsData = getProduct(page);
  const [products] = await Promise.all([productsData]);
  console.log(searchParams);

  return (
    <>
      <ColorInput />
      <div>
        {products.data.map((product: any) => {
          return <div>{product.name}</div>;
        })}
        <Pagination page={page} />
      </div>
    </>
  );
}

export default Product;
