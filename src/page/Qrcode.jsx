import { QRCodeCanvas } from 'qrcode.react';
import { useState, useRef } from "react";

const Qrcode = () => {
  const [url, setUrl] = useState("");
  const qrRef = useRef();
  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };
  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };
  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={300}
      bgColor={"#ffff"}
      level={"H"}
    />
  );
  
    return (
      <section className=" mx-auto mt-5">
        <h1 className="text-center mt-4 text-4xl font-semibold mb-5">Generate Your QR</h1>
      <div className="qrcode__container">
        <div className="flex justify-center align-middle">
        <div className=" " ref={qrRef}>{qrcode}</div>
        </div>
      <div className="input__group text-center pt-4" >
        <form onSubmit={downloadQRCode}>
          <div className=" xl:w-1/2 mx-auto">
          <labe className="" >Enter URL</labe>
          <input
          className="p-4 outline-none mx-5 "
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="https://hackernoon.com"
          />
          </div>
          <button type="submit" disabled={!url} className="bg-blue-600 p-3 rounded-lg text-white mt-5 mb-5">
            Download QR code
          </button>
        </form>
      </div>
    </div>
      </section>
    );
}
export default Qrcode;
