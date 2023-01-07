"use client";
import React from "react";
import { useRouter } from "next/navigation";
import GetProduct from "./GetProduct";

type SearchParams = {
  page: string;
};

function RefreshGetProduct({ searchParams }: { searchParams: SearchParams }) {
  const router = useRouter();
  const refreshData = () => {
    router.refresh();
  };
  const [num, setNum] = React.useState(3);
  return <GetProduct refreshData={refreshData} searchParams={searchParams} />;
}

export default RefreshGetProduct;
