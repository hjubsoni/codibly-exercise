"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

function Pagination() {
  return (
    <div className="flex items-center justify-center gap-4">
      <button>
        <ArrowLeft />
      </button>
      <button>
        <ArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
