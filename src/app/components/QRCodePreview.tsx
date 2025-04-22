import React from "react";

type QRCodePreviewProps = {
  text: string;
};

function QRCodePreview({ text }: QRCodePreviewProps) {
  return (
    <div className="flex overflow-hidden flex-col hover:gap-y-10 hover:h-20 justify-between transition-all duration-100 items-center text-center ">
      <div>{text}</div>
      <div className="flex ">sasas</div>
    </div>
  );
}

export default QRCodePreview;
