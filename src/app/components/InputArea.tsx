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
      className="flex gap-8 justify-center items-center flex-col pt-4"
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
      <div className="flex flex-row gap-2 w-full justify-center items-center h-[40px]">
        <button
          className={`${
            isValid
              ? "border border-black dark:border-white hover:border-2 text-black transition-all duration-300 dark:text-white hover:dark:text-white hover:text-white "
              : "bg-gray-400 cursor-default "
          } text-white p-2 rounded-xl border`}
          disabled={!isValid}
        >
          Generate
        </button>
      </div>
    </form>
  );
}

export default InputArea;
