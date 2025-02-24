import React, { useState } from "react";

function InputArea() {
  const [isValid, setIsValid] = useState(false);

  function isValidInput(input: string) {
    setIsValid(input.length > 0);
  }

  return (
    <div className="flex gap-2 justify-center items-center flex-col">
      <input
        onChange={(e) => isValidInput(e.target.value)}
        className="border p-2 rounded text-black"
      />
      <button
        className={`${
          isValid
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-400 cursor-default"
        } text-white p-2 rounded`}
        disabled={!isValid}
        onClick={() => {
          console.log("clicked");
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default InputArea;
