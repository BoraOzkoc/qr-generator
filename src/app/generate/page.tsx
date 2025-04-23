"use client";
import { useRouter, useSearchParams } from "next/navigation";
import QRCodeGenerator from "../components/QRCodeGenerator";
import { useRef } from "react";
import { MdFileDownload } from "react-icons/md";
import { LinearGradient } from "react-text-gradients";
import { downloadQRCode } from "../utilities/qrDownload";

export default function Generate() {
  const urlParam = useSearchParams();
  const router = useRouter();
  const url = urlParam.get("url");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    console.debug(containerRef);
    downloadQRCode(containerRef);
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
      <div className="flex flex-col justify-center items-center gap-6">
        <LinearGradient gradient={["to left", "#ff68f0, #17acff"]}>
          <h1 className="text-center text-2xl font-bold text-white">
            Your QR Code has been generated
          </h1>
        </LinearGradient>
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 rounded-2xl h-[300px] w-[300px] aspect-square flex flex-col justify-center items-center gap-6 text-center">
          <div
            id="sticker"
            ref={containerRef}
            className={`relative flex flex-col w-full h-full gap-6 justify-center items-center rounded-xl bg-black`}
          >
            <QRCodeGenerator text={url} targetWidth={200} />
          </div>
        </div>
        <div className="flex flex-row gap-2 w-[300px] justify-between">
          <button
            className="border justify-center w-[100px] hover:border-2 text-white transition-all duration-300 font-semibold px-4 rounded-lg group flex items-center gap-2"
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
            className="p-2 h-[40px] w-[40px] flex group text-white justify-center items-center border border-white dark:border-white hover:border-2 dark:hover:border-white rounded-lg transition-all duration-300"
          >
            <MdFileDownload className="group-hover:translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
