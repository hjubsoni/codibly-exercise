"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

function Pagination() {
  return (
    <div className="flex items-center justify-center gap-4">
      <button className="p-2 border-2 flex items-center justify-center">
        <ArrowLeft />
      </button>
      <button className="p-2 border-2 flex items-center justify-center">
        <ArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
