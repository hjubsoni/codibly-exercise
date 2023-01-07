"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useRouter } from "next/navigation";

function Pagination({ page }: number) {
  console.log(page);
  const router = useRouter();
  const nextPageDisabled = parseInt(page) === 3;
  const prevPageDisabled = parseInt(page) === 1;
  const nextPage = () => {
    router.push(`/products?page=${parseInt(page) + 1}`);
  };
  const prevPage = () => {
    router.push(`/products?page=${parseInt(page) - 1}`);
  };
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        className="p-2 border-2 flex items-center justify-center"
        onClick={prevPage}
        disabled={prevPageDisabled}
      >
        <ArrowLeft />
      </button>
      <button
        className="p-2 border-2 flex items-center justify-center"
        onClick={nextPage}
        disabled={nextPageDisabled}
      >
        <ArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
