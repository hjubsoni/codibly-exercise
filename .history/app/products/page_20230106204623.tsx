import React from "react";
import ColorInput from "../components/ColorInput";
import SingleColor from "./singleColor";
import Pagination from "./pagination";

type Data = {
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

async function Products() {
  let page = 1;
  const response = await fetch(
    `https://reqres.in/api/products?per_page=5&page=${page}`
  );
  const products: Data = await response.json();
  const { data } = products;

  return (
    <main className="flex flex-col gap-8 p-2">
      <div>
        <ColorInput />
        <div className="flex flex-col gap-6">
          {data.map((product: Product) => {
            return <SingleColor {...product} />;
          })}
        </div>
      </div>
      <Pagination page={page} />
    </main>
  );
}

export default Products;
