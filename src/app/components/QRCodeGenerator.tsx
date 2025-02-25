import { useQRCode } from "next-qrcode";
import React, { useEffect, useState } from "react";

interface QRCodeGeneratorProps {
  text: string;
}

function QRCodeGenerator({ text }: QRCodeGeneratorProps) {
  const { Canvas } = useQRCode();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`flex justify-center items-center border rounded-xl p-3 transition-opacity duration-[3000ms] ${
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
    </div>
  );
}

export default QRCodeGenerator;
