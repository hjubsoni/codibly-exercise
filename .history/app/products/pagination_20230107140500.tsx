"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useRouter } from "next/navigation";

function Pagination({ page }: any) {
  const router = useRouter();

  const nextPageDisabled = page === "3";
  const prevPageDisabled = page === "1";
  const nextPage = () => {
    router.push(`/products?page=${parseInt(page) + 1}`);
    router.forward();
  };
  const prevPage = () => {
    page === "2"
      ? router.push(`/products`)
      : router.push(`/products?page=${parseInt(page) - 1}`);
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
