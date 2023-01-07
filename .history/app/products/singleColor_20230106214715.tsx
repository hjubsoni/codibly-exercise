import Link from "next/link";
import React from "react";

type SingleColorProps = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

function SingleColor({
  id,
  name,
  year,
  color,
  pantone_value,
}: SingleColorProps) {
  return (
    <Link
      href={`products/${id}`}
      className="flex gap-4 p-4 items-center justify-center rounded-md"
      style={{ background: color }}
    >
      <div>{name}</div>
      <div>{year}</div>
      <div>{color}</div>
      <div>{pantone_value}</div>
    </Link>
  ); // import React from "react";
  // import SingleColor from "./singleColor";

  // type Data = {
  //   page: number;
  //   per_page: number;
  //   total: number;
  //   total_pages: number;
  //   data: Array<Product>;
  // };

  // type Product = {
  //   id: number;
  //   name: string;
  //   year: number;
  //   color: string;
  //   pantone_value: string;
  // };

  // type ColorsProps = {
  //   page: number;
  // };

  // async function Colors({ page }: ColorsProps) {
  //   const response = await fetch(
  //     `https://reqres.in/api/products?per_page=5&page=${page}`
  //   );
  //   const products: Data = await response.json();
  //   const { data } = products;
  //   return (
  //     <div className="flex flex-col gap-6">
  //       {data.map((product: Product) => {
  //         return <SingleColor {...product} />;
  //       })}
  //     </div>
  //   );
  // }

  // export default Colors;
}

export default SingleColor;