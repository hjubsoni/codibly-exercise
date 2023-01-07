import React from "react";
import ColorInput from "../components/ColorInput";
import SingleColor from "./singleColor";

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

type Props = {
  params: {
    colorsPage: string;
  };
};

async function Products({ params }: Props) {
  const response = await fetch(
    `https://reqres.in/api/products?page=${parseInt(
      params.colorsPage
    )}&per_page=5`
  );
  const products: Data = await response.json();

  const { data } = products;
  return (
    <main>
      <div>
        <ColorInput />
        <div>
          {data.map((product: Product) => {
            return <SingleColor {...product} colorsPage={params.colorsPage} />;
          })}
        </div>
      </div>
      <Pagination />
    </main>
  );
}

export default Products;
