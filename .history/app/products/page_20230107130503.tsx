import React from "react";
import { useRouter } from "next/navigation";
import Pagination from "./pagination";

async function getProduct(page: any) {
  const res = await fetch(
    `https://reqres.in/api/products?page=${p}&per_page=5`
  );
  return res.json();
}

async function Product({ searchParams }: any) {
  const p = searchParams.page ?? 1;
  const productsData = getProduct(p);
  const [products] = await Promise.all([productsData]);
  console.log(searchParams);

  return (
    <div>
      {products.data.map((product: any) => {
        return <div>{product.name}</div>;
      })}
      <Pagination page={p} />
    </div>
  );
}

export default Product;
