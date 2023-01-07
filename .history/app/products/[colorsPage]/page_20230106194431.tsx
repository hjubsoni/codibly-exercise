import React from "react";
import ColorInput from "../../components/ColorInput";
import Pagination from "../pagination";
import SingleColor from "../singleColor";
import { useRouter } from "next/navigation";

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
  colorsPage: string;
};

async function ColorPage({ params }: Props) {
  const response = await fetch("https://reqres.in/api/products?per_page=5");
  const products: Data = await response.json();

  console.log(props);

  const { data } = products;
  return (
    <main>
      <div>
        <ColorInput />
        <div>
          {data.map((product: Product) => {
            return <SingleColor {...product} />;
          })}
        </div>
      </div>
      <Pagination />
    </main>
  );
}

export default ColorPage;
