import React from "react";
import SingleProduct from "./SingleProduct";

type SearchParams = {
  page: string;
};

type Products = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<Product>;
};

type Product = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

async function GetProducts({ searchParams }: { searchParams: SearchParams }) {
  const response = await fetch(
    `https://reqres.in/api/products?per_page=5&page=${searchParams.page}`
  );
  const products: Products = await response.json();
  console.log(products);
  const { data } = products;
  console.log(data);
  return (
    <div className="flex flex-col gap-4">
      {data.map((product: Product) => {
        return <SingleProduct {...product} key={product.id} />;
      })}
    </div>
  );
}

export default GetProducts;
