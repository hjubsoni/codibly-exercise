import React from "react";

async function Product({ searchParams }: any) {
  const products = await fetch(
    `https://reqres.in/api/products?page=${searchParams.page}&per_page=5`
  );
  const response = await products.json();
  const { data } = response;

  return (
    <div>
      {data.map((product: any) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
          </div>
        );
      })}
      <button onClick={navigateToNextPage}>heelo</button>
    </div>
  );
}

export default Product;
