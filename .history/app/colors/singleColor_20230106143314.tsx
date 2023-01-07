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
  return <Link href={`/colors/${id}`}>{name}</Link>;
}

export default SingleColor;
