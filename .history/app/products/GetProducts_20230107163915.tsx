import React from "react";

type SearchParams = {
  page: string;
};

type Product = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

async function GetProducts({ searchParams }: { searchParams: SearchParams }) {
  const response = await fetch(
    `https://reqres.in/api/products?per_page=5&page=${searchParams.page}`
  );
  const products = await response.json();
  const { data } = products;
  return (
    <div className="flex flex-col gap-4">
      {data.map((product: Product) => {
        return (
          <div
            key={product.id}
            className="flex gap-4 p-4"
            style={{ background: product.color }}
          >
            <div>{product.name}</div>
            <div>{product.year}</div>
            <div>{product.color}</div>
            <div>{product.pantone_value}</div>
          </div>
        );
      })}
    </div>
  );
}

export default GetProducts;

// async function GetProduct({ searchParams }: any) {
//   const page = searchParams.page ?? "1";
//   const router = useRouter();
//   const res = await fetch(
//     `https://reqres.in/api/products?page=${page}&per_page=5`
//   );
//   if (res.status < 300) {
//     router.refresh();
//   }

//   const products = await res.json();
