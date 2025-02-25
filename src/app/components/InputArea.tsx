import React, { useState } from "react";
import { useRouter } from "next/navigation";

function InputArea() {
  const [isValid, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const urlRegex =
    /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i;
  function isValidInput(input: string) {
    setInputValue(input);

    setIsValid(isValidUrl(input));
  }
  const isValidUrl = (urlString: string) => {
    return urlRegex.test(urlString);
  };

  return (
    <form
      className="flex gap-2 justify-center items-center flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/generate?url=${inputValue}`);
      }}
    >
      <input
        placeholder="https://boraozkoc.com"
        onChange={(e) => isValidInput(e.target.value)}
        className="border-2 p-2 rounded text-black outline-none focus:ring-1 focus:ring-blue-500"
      />
      <button
        className={`${
          isValid
            ? "border border-blue-500 hover:bg-blue-500 text-black dark:text-white hover:dark:text-white hover:text-white "
            : "bg-gray-400 cursor-default "
        } text-white p-2 rounded-xl border-2`}
        disabled={!isValid}
      >
        Generate
      </button>
    </form>
  );
}

export default InputArea;
