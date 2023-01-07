
import React from "react";
import { useRouter } from "next/navigation";
import getProduct from "./getProduct";

async function Product({ searchParams }: any) {
  const productsData = getProduct(searchParams);
  const [products] = await Promise.all([productsData]])

  return (
    <div>
      {products.map((product) => {
        return <div>{product}</div>;
      })
      }}
    </div>
  );
}

export default Product;
