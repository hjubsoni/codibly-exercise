import React from "react";

async function Page() {
  const response = await fetch("https://reqres.in/api/products");
  const data = await response.json();
  console.log(data);
  return <div>Page</div>;
}

export default Page;
