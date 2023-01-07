import Link from "next/link";
import React from "react";

type SingleColorProps = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
  colorsPage: string;
};

function SingleColor({
  id,
  name,
  year,
  color,
  pantone_value,
  colorsPage,
}: SingleColorProps) {
  return (
    <Link href={`products/2/color/${id}`} className="flex gap-4">
      <div>{name}</div>
      <div>{year}</div>
      <div>{color}</div>
      <div>{pantone_value}</div>
    </Link>
  );
}

export default SingleColor;
