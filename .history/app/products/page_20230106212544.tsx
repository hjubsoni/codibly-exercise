"use client";
import React from "react";
import ColorInput from "../components/ColorInput";
import SingleColor from "./singleColor";
import Pagination from "./pagination";

async function Products() {
  const [page, setPage] = React.useState(1);

  return (
    <main className="flex flex-col gap-8 p-2">
      <div>
        <ColorInput />
      </div>
      <Pagination page={page} />
    </main>
  );
}

export default Products;
