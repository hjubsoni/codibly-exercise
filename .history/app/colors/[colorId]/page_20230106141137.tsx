import React from "react";

async function ColorPage() {
  const response = await fetch("https://reqres.in/api/products?per_page=5");
  const products = await response.json();
  const { data } = products;
  return (
    <div>
      {data.map((product: Product) => {
        return (
          <div>
            <h1>{product.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default ColorPage;
