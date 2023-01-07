import React from "react";

async function GetProduct({ page }: any) {
  const response = await products.json();
  const { data } = response;
  return <div>GetProduct</div>;
}

export default GetProduct;
