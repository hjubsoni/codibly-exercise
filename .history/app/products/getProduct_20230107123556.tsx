import React from "react";

async function GetProduct() {
  const products = await fetch(
    `https://reqres.in/api/products?page=${searchParams.page}&per_page=5`
  );
  const response = await products.json();
  const { data } = response;
  return <div>GetProduct</div>;
}

export default GetProduct;
