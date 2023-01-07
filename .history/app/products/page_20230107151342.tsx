import React from "react";

import Pagination from "./pagination";
import ColorInput from "../components/ColorInput";
import GetProduct from "./getProduct";

type SearchParams = {
  searchParams: {
    page: string;
  };
};

async function Product({ searchParams }: SearchParams) {
  const page = searchParams.page ?? "1";
  const productsData = getProduct(page);

  const [products] = await Promise.all([productsData]);

  return (
    <>
      <ColorInput />
      <div>
        <GetProduct searchParams={searchParams} />
        <Pagination page={page} />
      </div>
    </>
  );
}

export default Product;
