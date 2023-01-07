import Link from "next/link";
import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@mui/icons-material";

function Pagination() {
  return (
    <div>
      <button>
        <ArrowLeftIcon />
      </button>
      <button>
        <ArrowRightIcon />
      </button>
    </div>
  );
}

export default Pagination;
