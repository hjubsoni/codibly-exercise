import React from "react";
import Image from "next/image";

async function Page() {
  const response = await fetch("https://reqres.in/api/products?per_page=5");
  const products = await response.json();
  const { data } = products;
  return (
    <div>
      {data.map((product: any) => {
        return (
          <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <Image src={product.image} alt={product.name} />
          </div>
        );
      })}
    </div>
  );
}

export default Page;
