import InputArea from "./InputArea";
import { LinearGradient } from "react-text-gradients";

function WelcomePage() {
  return (
    <div className="p-[4px] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="text-white bg-black rounded-3xl h-[50vh] w-[600px] flex flex-col justify-center items-center text-center">
        <div className="flex flex-col gap-y-2 px-16">
          <LinearGradient gradient={["to left", "#ff68f0, #17acff"]}>
            <h1 className=" font-bold text-4xl pb-8">
              Welcome to QR Code Generator
            </h1>{" "}
          </LinearGradient>

          <p>
            This is a simple QR Code Generator. You can generate a QR Code for
            free.
          </p>
          <p>Enter the URL you want to encode in the QR Code.</p>
          <InputArea />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
