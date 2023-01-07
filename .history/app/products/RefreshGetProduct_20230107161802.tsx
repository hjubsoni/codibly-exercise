"use client";

import React from "react";
import { useRouter } from "next/navigation";
import GetProduct from "./GetProduct";

function RefreshGetProduct({ searchParams }: { searchParams: string }) {
  const router = useRouter();
  const refreshData = () => {
    router.refresh();
  };
  const [num, setNum] = React.useState(3);
  return <GetProduct refreshData={refreshData} />;
}

export default RefreshGetProduct;
