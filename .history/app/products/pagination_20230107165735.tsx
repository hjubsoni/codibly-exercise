"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

import Link from "next/link";

function Pagination({ page }: any) {
  const nextPageDisabled = page === "3";
  const prevPageDisabled = page === "1";

  return (
    <div className="flex items-center justify-center gap-4">
      <Link href={`/products?page=${parseInt(page) - 1}`}>
        <button
          className="p-2 border-2 flex items-center justify-center"
          disabled={prevPageDisabled}
        >
          <ArrowLeft />
        </button>
      </Link>

      <Link href={`/products?page=${parseInt(page) + 1}`}>
        <button
          className="p-2 border-2 flex items-center justify-center"
          disabled={nextPageDisabled}
        >
          <ArrowRight />
        </button>
      </Link>
    </div>
  );
}

export default Pagination;
