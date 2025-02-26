import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function InputArea() {
  const [isValid, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const [savedQrCode, setSavedQrCode] = useState<string[]>([]);
  const urlRegex =
    /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i;

  useEffect(() => {
    const savedCodes = localStorage.getItem("savedQrCode");
    if (savedCodes) {
      setSavedQrCode(JSON.parse(savedCodes));
    }
  }, []);

  useEffect(() => {
    console.log("Updated savedQrCode:", savedQrCode);
  }, [savedQrCode]);

  function isValidInput(input: string) {
    setInputValue(input);

    setIsValid(isValidUrl(input));
  }
  const isValidUrl = (urlString: string) => {
    return urlRegex.test(urlString);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedCodes = [...savedQrCode, inputValue];
    setSavedQrCode(updatedCodes);
    localStorage.setItem("savedQrCode", JSON.stringify(updatedCodes));
    router.push(`/generate?url=${inputValue}`);
  };

  return (
    <form
      className="flex gap-8 justify-center items-center flex-col pt-4"
      onSubmit={handleSubmit}
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
              ? "border border-white hover:border-2 text-white transition-all duration-300 "
              : "bg-gray-400 text-white cursor-default "
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
