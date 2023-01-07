import React from "react";

type ColorProps = {
  params: {
    colorId: string;
  };
};

async function Color({ params }: ColorProps) {
  const colorData = await fetch(
    `https://reqres.in/api/products?id=${parseInt(params.colorId)}`
  );
  const { data } = await colorData.json();
  const { name, year, color, pantone_value } = data;

  return (
    <div className="flex gap-4 p-4 " style={{ background: data.color }}>
      <div>{name}</div>
      <div>{year}</div>
      <div>{color}</div>
      <div>{pantone_value}</div>
    </div>
  );
}

export default Color;
