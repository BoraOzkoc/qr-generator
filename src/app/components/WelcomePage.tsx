import InputArea from "./InputArea";

function WelcomePage() {
  return (
    <div className="border shadow-md shadow-white border-x-zinc-500 rounded-3xl container h-[80vh] flex flex-col justify-center items-center text-center gap-4">
      <h1>Welcome to QR Code Generator</h1>
      <p>
        This is a simple QR Code Generator. You can generate a QR Code for free.
      </p>
      <p>Enter the text you want to encode in the QR Code.</p>
      <InputArea />
    </div>
  );
}

export default WelcomePage;
