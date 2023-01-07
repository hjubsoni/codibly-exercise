import React from "react";

function ColorInput() {
  return (
    <form>
      <label htmlFor="color">Search colors</label>
      <input
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        type="text"
        id="color"
        pattern="[0-9"
        placeholder="Enter color id"
      />
    </form>
  );
}

export default ColorInput;
