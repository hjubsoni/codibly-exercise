import React from "react";

type ColorProps = {
  params: {
    colorId: string;
  };
};

async function Color({ params }: ColorProps) {
  const data = await fetch(
    `https://reqres.in/api/products?id=${params.colorId}`
  );
  const response = await data.json();
  return <div>{response}</div>;
}

export default Color;
