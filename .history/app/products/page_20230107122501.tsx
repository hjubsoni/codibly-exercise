import React from "react";

function Product({ searchParams }: any) {
  console.log(searchParams);
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
