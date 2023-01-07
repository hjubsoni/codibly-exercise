"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useRouter } from "next/navigation";

function Pagination({ page }: any) {
  const [pag, setPag] = React.useState(page);

  const nextPage = () => {
    setPag(pag + 1);
  };
  return (
    <div className="flex items-center justify-center gap-4">
      <button className="p-2 border-2 flex items-center justify-center">
        <ArrowLeft />
      </button>
      <button
        className="p-2 border-2 flex items-center justify-center"
        onClick={nextPage}
      >
        <ArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
