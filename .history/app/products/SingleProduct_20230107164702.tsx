import React from "react";
import Link from "next/link";

type SingleProductProps = {
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

function SingleProduct({
  name,
  year,
  color,
  pantone_value,
}: SingleProductProps) {
  return (
    <Link className="flex gap-4 p-4" style={{ background: color }} href="/">
      <div>{name}</div>
      <div>{year}</div>
      <div>{color}</div>
      <div>{pantone_value}</div>
    </Link>
  );
}

export default SingleProduct;
