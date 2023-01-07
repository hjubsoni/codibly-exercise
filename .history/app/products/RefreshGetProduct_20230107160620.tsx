"use client";

import React from "react";
import { useRouter } from "next/navigation";
import GetProduct from "./getProduct";

function RefreshGetProduct({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GetProduct />
    </>
  );
}

export default RefreshGetProduct;
