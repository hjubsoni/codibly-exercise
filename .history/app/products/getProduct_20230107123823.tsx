import React from "react";

async function GetProduct({ page }: any) {
  const products = await fetch(
    `https://reqres.in/api/products?page=${page}&per_page=5`,
    { cache: "no-store" }
  );
  const response = await products.json();
  const { data } = response;
  return <div>GetProduct</div>;
}

export default GetProduct;
