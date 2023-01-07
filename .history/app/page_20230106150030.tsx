import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Link href="/colors">Explore colors</Link>
    </div>
  );
}

export default Page;
