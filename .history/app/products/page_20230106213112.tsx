"use client";
import React from "react";
import ColorInput from "../components/ColorInput";
import SingleColor from "./singleColor";
import Pagination from "./pagination";
import Colors from "./colors";

async function Products() {
  const [page, setPage] = React.useState(1);

  return (
    <main className="flex flex-col gap-8 p-2">
      <ColorInput />

      <Pagination />
    </main>
  );
}

export default Products;
