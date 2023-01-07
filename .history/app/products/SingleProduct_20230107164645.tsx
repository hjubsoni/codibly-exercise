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
    <Link className="flex gap-4 p-4" style={{ background: product.color }}>
      <div>{product.name}</div>
      <div>{product.year}</div>
      <div>{product.color}</div>
      <div>{product.pantone_value}</div>
    </Link>
  );
}

export default SingleProduct;
