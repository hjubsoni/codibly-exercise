"use client";

import React from "react";
import { useRouter } from "next/navigation";
import GetProduct from "./GetProduct";

function RefreshGetProduct() {
  const router = useRouter();
  const refreshData = () => {
    router.refresh();
  };
  const [num, setNum] = React.useState(3);
  return <GetProduct num={num} />;
}

export default RefreshGetProduct;
