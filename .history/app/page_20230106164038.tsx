import Link from "next/link";
import React from "react";

function Page() {
  const id = "01";
  return (
    <div className="h-screen flex justify-center items-center">
      <Link
        href={`/products/colors-${id}`}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Explore colors
      </Link>
    </div>
  );
}

export default Page;
