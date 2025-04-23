"use client";
import React from "react";
import QRCodePreview from "./QRCodePreview";
import { MdFileDownload } from "react-icons/md";
import { downloadQRCode } from "../utilities/qrDownload";
import { useRef } from "react";

function SavedQRCodes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [savedData, setSavedData] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  function handleDownload() {
    downloadQRCode(containerRef);
  }

  React.useEffect(() => {
    const loadData = () => {
      try {
        const data = localStorage.getItem("savedQrCode");
        if (data) {
          const parsedData = JSON.parse(data);
          setSavedData(parsedData);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="text-white flex justify-center items-center pb-16">
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-bold mb-4">Created QR Codes</p>
        <div className="flex flex-col justify-center items-center gap-4">
          {savedData.map((item, index) => (
            <div
              key={index}
              ref={containerRef}
              className="flex rounded-lg bg-gray-800 w-fit justify-center text-center p-3 items-center"
            >
              <span className=" flex justify-center text-center items-center">
                <QRCodePreview url={item} />
              </span>
              <button
                onClick={handleDownload}
                className=" p-2 h-[40px] w-[40px] flex group text-white justify-center items-center border border-white dark:border-white hover:border-2 dark:hover:border-white rounded-lg transition-all duration-300"
              >
                <MdFileDownload className="group-hover:translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SavedQRCodes;
