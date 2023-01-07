import React from "react";

type SingleColorProps = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

function SingleColor({ id, name, year, color, pantone_value }) {
  return <div>Color</div>;
}

export default SingleColor;
