import React from "react";
type ColorPageProps = {
  params: {
    colorId: string;
  };
};

async function ColorPage(props: ColorPageProps) {
  const data = await fetch(
    `https://reqres.in/api/products?id=${props.params.colorId}`
  );
  const singleColor = await data.json();
  console.log(singleColor);
  return <div>ColorPage</div>;
}

export default ColorPage;
