import React from "react";
import QRCodeGenerator from "./QRCodeGenerator";
import { MdFileDownload } from "react-icons/md";
import { downloadQRCode } from "../utilities/qrDownload";
import { useRef } from "react";
type QRCodePreviewProps = {
  url: string;
};

function QRCodePreview({ url }: QRCodePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  function handleDownload() {
    downloadQRCode(containerRef);
  }
  return (
    <div
      ref={containerRef}
      className="flex overflow-hidden flex-col h-7 hover:h-20 justify-start transition-[height] duration-500 ease-in-out items-center text-center"
    >
      <div>{url}</div>
      <div className="flex flex-row w-fit justify-center items-start pt-3 gap-10">
        <div className="flex border rounded-md justify-center items-center h-10 w-10 ">
          <QRCodeGenerator text={url} targetWidth={2} />
        </div>
        <button
          onClick={handleDownload}
          className=" h-10 w-10 flex text-white justify-center items-center border border-white hover:border-2 hover:border-white rounded-lg transition-all duration-300"
        >
          <MdFileDownload className="group-hover:translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

export default QRCodePreview;
