import InputArea from "./InputArea";

function WelcomePage() {
  return (
    <div className="border-4 shadow-md shadow-zinc-500 border-zinc-500 font-semibold rounded-3xl container h-[50vh] w-[600px] flex flex-col justify-center items-center text-center gap-y-2">
      <h1>Welcome to QR Code Generator</h1>
      <p>
        This is a simple QR Code Generator. You can generate a QR Code for free.
      </p>
      <p>Enter the URL you want to encode in the QR Code.</p>
      <InputArea />
    </div>
  );
}

export default WelcomePage;
