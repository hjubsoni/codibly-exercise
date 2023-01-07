"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

function Pagination({ page }: { page: number }) {
  const [currentPage, setCurrentPage] = React.useState(page);
  const disabledLeftButton = currentPage === 1;
  const disabledRightButton = currentPage === 3;
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        className="p-2 border-2 flex items-center justify-center"
        onClick={prevPage}
        disabled={disabledLeftButton}
      >
        <ArrowLeft />
      </button>
      <button
        disabled={disabledRightButton}
        className="p-2 border-2 flex items-center justify-center"
        onClick={nextPage}
      >
        <ArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
