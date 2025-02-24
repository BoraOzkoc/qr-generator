import { useQRCode } from "next-qrcode";
import React from "react";
interface QRCodeGeneratorProps {
  text: string;
}
function QRCodeGenerator({ text }: QRCodeGeneratorProps) {
  const { Canvas } = useQRCode();
  return (
    <div className="flex justify-center items-center border border-x-zinc-500 w-full h-full">
      <Canvas
        text={text}
        options={{
          errorCorrectionLevel: "M",
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: "#ffffff",
            light: "#000000",
          },
        }}
      />
    </div>
  );
}

export default QRCodeGenerator;
