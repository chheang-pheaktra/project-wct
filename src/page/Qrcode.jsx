import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';

const QrCodeGenerator = () => {
  const [inputLink, setInputLink] = useState('');
  const qrCodeRef = useRef(null);

  const handleInputChange = (e) => {
    setInputLink(e.target.value);
  };

  const generateQrCode = () => {
    // You can add validation or modify inputLink as needed
    if (inputLink.trim() === '') {
      alert('Please enter a valid link.');
      return;
    }


    // Update the QR code
    const canvas = qrCodeRef.current.querySelector('canvas');
    if (canvas) {
      canvas.toBlob((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'qrcode.png';
        link.click();
      });
    }
  };

  return (
    <div className="text-center w-11/12 mx-auto mt-5">
      <h2 className="text-4xl font-bold">QR Code Generator & Download</h2>
      <div className="mt-5 flex justify-between border w-1/2 mx-auto p-4 ">
        <label htmlFor="inputLink " className="item-center py-4 px-3">Enter link:</label>
        <input
          type="text"
          id="inputLink"
          value={inputLink}
          onChange={handleInputChange}
          className="w-1/2 outline-none bg-transparent min-h-full"
        />
        <button onClick={generateQrCode} className="bg-blue-500 text-white hover:bg-blue-900  py-4 px-3 rounded-r-lg">Download QR Code</button>
      </div>

      <div ref={qrCodeRef} className=" w-1/2 mx-auto">
        {inputLink && (
          <div className="1/2 mx-auto mt-5 font-semibold text-3xl">
            <p className="w-1/2 mx-auto text-center">Generated QR code:</p>
              <div className="w-1/2 px-24 mt-5 mx-auto">
                 <QRCode  value={inputLink} />
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QrCodeGenerator;
