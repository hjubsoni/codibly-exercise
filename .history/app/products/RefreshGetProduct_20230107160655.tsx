"use client";

import React from "react";
import { useRouter } from "next/navigation";
import GetProduct from "./getProduct";

function RefreshGetProduct() {
  const [num, setNum] = React.useState(0);
  return (
    <>
      <GetProduct num={num} />
    </>
  );
}

export default RefreshGetProduct;
