"use client";
import { useRouter, useSearchParams } from "next/navigation";
import QRCodeGenerator from "../components/QRCodeGenerator";
import { useRef } from "react";
import { MdFileDownload } from "react-icons/md";

export default function Generate() {
  const urlParam = useSearchParams();
  const router = useRouter();
  const url = urlParam.get("url");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (containerRef.current) {
      const canvas = containerRef.current.querySelector("canvas");
      if (canvas) {
        const link = document.createElement("a");
        link.download = `qrcode.png`;
        link.href = canvas.toDataURL("image/png");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };
  if (!url)
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div>No URL provided</div>
        <button onClick={() => router.push("/")}>Go back</button>
      </div>
    );
  return (
    <div className=" flex flex-col justify-center items-center gap-6 h-screen">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-3xl w-[400px] h-fit aspect-square flex flex-col justify-center items-center gap-6 text-center">
        <div className="flex flex-col gap-6 justify-center items-center bg-white dark:bg-black rounded-3xl p-4">
          <h1 className="text-2xl font-bold">
            Your QR Code has been generated
          </h1>
          <QRCodeGenerator text={url} />
          <div className="flex flex-row gap-2 justify-between w-full pt-3">
            <button
              className="border justify-center w-[100px] hover:border-2 border-black text-black dark:border-white dark:text-white transition-all duration-300 font-semibold px-4 rounded-lg group flex items-center gap-2"
              onClick={() => router.push("/")}
            >
              <svg
                className=" group-hover:-translate-x-2 group-hover:scale-125 transition-all duration-300 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>
            <button
              onClick={handleDownload}
              className="p-2 h-[40px] w-[40px] flex group justify-center items-center border border-black dark:border-white hover:border-2 dark:hover:border-white rounded-lg transition-colors"
            >
              <MdFileDownload className="group-hover:translate-y-0.5 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
