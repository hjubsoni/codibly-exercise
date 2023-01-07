import Link from "next/link";
import React from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

function Pagination() {
  return (
    <div>
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
