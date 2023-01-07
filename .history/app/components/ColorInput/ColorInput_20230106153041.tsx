"use client";
import React from "react";
import { useRouter } from "next/navigation";

function ColorInput() {
  const [id, setId] = React.useState("");
  const [error, setError] = React.useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    parseInt(id) > 0 && parseInt(id) < 13
      ? router.push(`/colors/${parseInt(id)}`)
      : setError("Please enter a number between 1 and 12");
  };
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="color"
        >
          Color
        </label>
        <input
          onChange={(e) => setId(e.target.value)}
          value={id}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="color"
          type="text"
          pattern="[0-9]+"
          placeholder="Enter color id"
        />
      </div>
      <span className="text-red-500">{error}</span>
    </form>
  );
}

export default ColorInput;
