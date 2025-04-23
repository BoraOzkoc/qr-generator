export const downloadQRCode = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  fileName: string = "qrcode"
) => {
  if (!containerRef.current) {
    console.error("Container reference not found");
    return;
  }

  const canvas = containerRef.current.querySelector("canvas");
  if (!canvas) {
    console.error("Canvas element not found in container");
    return;
  }

  const link = document.createElement("a");
  link.download = `${fileName}.png`;
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
