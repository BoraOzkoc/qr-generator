"use client";
import SavedQRCodes from "./components/SavedQRCodes";
import WelcomePage from "./components/WelcomePage";
export default function Home() {
  return (
    <div className=" container mx-auto w-full h-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center py-32">
        <WelcomePage />
      </div>
      <SavedQRCodes />
    </div>
  );
}
