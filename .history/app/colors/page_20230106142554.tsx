import React from "react";
import ColorInput from "../components/ColorInput";
import Color from "./color";

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

async function Color() {
  const response = await fetch("https://reqres.in/api/products?per_page=5");
  const products: Data = await response.json();

  const { data } = products;
  return (
    <div>
      <ColorInput />
      <div>
        {data.map((product: Product) => {
          return <Color />;
        })}
      </div>
    </div>
  );
}

export default Color;
