import React from "react";

type ColorProps = {
  params: {
    colorId: string;
  };
};

async function Color({ params }: ColorProps) {
  const color = await fetch(
    `https://reqres.in/api/products?id=${parseInt(params.colorId)}`
  );
  const { data } = await color.json();

  return (
    <div>
      <div>{data.name}</div>
      <div>{data.year}</div>
      <div>{data.color}</div>
      <div>{data.pantone_value}</div>
    </div>
  );
}

export default Color;
