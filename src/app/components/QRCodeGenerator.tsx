import { useQRCode } from "next-qrcode";
import React, { useEffect, useState, useRef } from "react";

interface QRCodeGeneratorProps {
  text: string;
}

function QRCodeGenerator({ text }: QRCodeGeneratorProps) {
  const { Canvas } = useQRCode();
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleDownload = () => {
    if (containerRef.current) {
      const canvas = containerRef.current.querySelector("canvas");
      if (canvas) {
        // Create a temporary link element
        const link = document.createElement("a");
        link.download = `${text}.png`;
        link.href = canvas.toDataURL("image/png");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={containerRef}
        className={`flex justify-center items-center border transition-opacity duration-[3000ms] ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
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
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Download QR Code
      </button>
    </div>
  );
}

export default QRCodeGenerator;
