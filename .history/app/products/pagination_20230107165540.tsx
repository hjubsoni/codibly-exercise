"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

import Link from "next/link";

function Pagination({ page }: any) {
  const nextPageDisabled = page === "3";
  const prevPageDisabled = page === "1";

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        className="p-2 border-2 flex items-center justify-center"
        disabled={prevPageDisabled}
      >
        <Link href={`/products?page=${parseInt(page) - 1}`}>
          <ArrowLeft />
        </Link>
      </button>
      <button
        className="p-2 border-2 flex items-center justify-center"
        disabled={nextPageDisabled}
      >
        <Link href={`/products?page=${parseInt(page) + 1}`}>
          <ArrowRight />
        </Link>
      </button>
    </div>
  );
}

export default Pagination;
