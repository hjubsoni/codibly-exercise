import React from "react";

function ColorInput() {
  return (
    <form>
      <label htmlFor="color">Search colors</label>
      <input
        type="text"
        id="color"
        pattern="[0-9"
        placeholder="Enter color id"
      />
    </form>
  );
}

export default ColorInput;
