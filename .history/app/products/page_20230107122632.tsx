import React from "react";

async function Product({ searchParams }: any) {
  const data = await fetch(
    `https://reqres.in/api/products?page=${searchParams}&perPage=5`
  );
  const response = await data.json();
  console.log(response);

  return <div>Product</div>;
}

export default Product;

// import React from "react";
// import ColorInput from "../components/ColorInput";
// import SingleColor from "./singleColor";
// import Pagination from "./pagination";
// import Colors from "./colors";

// async function Products() {
//   return (
//     <main className="flex flex-col gap-8 p-2">
//       <ColorInput />
//       <Colors />
//     </main>
//   );
// }

// export default Products;
