// import React from "react";

// type ColorPageProps = {
//   params: {
//     colorId: string;
//   };
// };

// type singleColorTypes = {
//   data: {
//     id: number;
//     name: string;
//     year: number;
//     color: string;
//     pantone_value: string;
//   };
// };

// async function Color(props: ColorPageProps) {
//   const response = await fetch(
//     `https://reqres.in/api/products?id=${props.params.colorId}`
//   );
//   const singleColors: singleColorTypes = await response.json();
//   const { data } = singleColors;
//   const { id, name, year, color, pantone_value } = data;

//   return (
//     <div className="flex gap-4" style={{ background: color }}>
//       <div>{id}</div>
//       <div>{name}</div>
//       <div>{year}</div>
//       <div>{color}</div>
//       <div>{pantone_value}</div>
//     </div>
//   );
// }

// export default Color;
