import React from "react";
import QRCodePreview from "./QRCodePreview";
function SavedQRCodes() {
  const [savedData, setSavedData] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

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
    <div className="text-white flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-bold mb-4">Created QR Codes</p>
        <div className="flex flex-col gap-4">
          {savedData.map((item, index) => (
            <div
              key={index}
              className="flex rounded-lg bg-gray-800 w-full justify-center text-center items-center"
            >
              <span className=" flex justify-center text-center items-center">
                <QRCodePreview text={item} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SavedQRCodes;
