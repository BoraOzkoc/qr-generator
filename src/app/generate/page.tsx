"use client";
import { useRouter, useSearchParams } from "next/navigation";
import QRCodeGenerator from "../components/QRCodeGenerator";

export default function Generate() {
  const urlParam = useSearchParams();
  const router = useRouter();
  const url = urlParam.get("url");
  if (!url)
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div>No URL provided</div>
        <button onClick={() => router.push("/")}>Go back</button>
      </div>
    );
  return (
    <div className=" flex flex-col justify-center items-center gap-6 h-screen">
      <div className="border-4 rounded-3xl border-blue-300 w-[400px] h-fit aspect-square flex flex-col justify-center items-center gap-6 text-center">
        <h1 className="text-2xl font-bold">Your QR Code has been generated</h1>
        <QRCodeGenerator text={url} />
        <button
          className="border-2 border-blue-500 text-blue-500 font-semibold px-4 py-2 rounded group hover:bg-blue-500 hover:text-white flex items-center gap-2"
          onClick={() => router.push("/")}
        >
          <svg
            className=" group-hover:-translate-x-2 transition-all  duration-300  w-6 h-6"
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
      </div>
    </div>
  );
}
