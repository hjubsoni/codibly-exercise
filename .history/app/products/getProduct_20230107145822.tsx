import React from "react";

async function getData(page: any) {
  const res = await fetch(
    `https://reqres.in/api/products?page=${page}&per_page=5`
  );
  return res.json();
}
async function GetProduct({product}: any}) {
 
  return <div>GetProduct</div>;
}

export default GetProduct;
