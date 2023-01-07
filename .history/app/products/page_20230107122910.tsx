import React from "react";

async function Product({ searchParams }: any) {
  const products = await fetch(
    `https://reqres.in/api/products?page=${searchParams.page}&per_page=5`
  );
  const response = await products.json();
  const { data: any } = response;

  return <div>
    {data.map((product: any) => {
      return <div key={product.id}>
        <h1>{product.name}</h1> 

    }
  </div>;
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
