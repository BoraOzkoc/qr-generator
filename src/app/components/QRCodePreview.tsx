import React from "react";
import QRCodeGenerator from "./QRCodeGenerator";

type QRCodePreviewProps = {
  url: string;
};

function QRCodePreview({ url }: QRCodePreviewProps) {
  return (
    <div className="flex overflow-hidden flex-col group-h h-7 hover:h-20 justify-between transition-[height] duration-500 ease-in-out items-center text-center relative">
      <div>{url}</div>
      <div className="flex rounded-md justify-center items-center border h-10 w-10 translate-y-8 absolute overflow-hidden">
        <QRCodeGenerator text={url} targetWidth={2} />
      </div>
    </div>
  );
}

export default QRCodePreview;
