import QRCode from "react-qr-code";
import "./style.css";
import { useState } from "react";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGnenerateQrCode = () => {
    setQrCode(input);
    setInput("")
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="QR코드로 변환할 값을 입력해주세요."
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGnenerateQrCode}
        >
          Generator
        </button>
      </div>
      <div>
        <QRCode id="qc-code-value" value={qrCode} size={400} bgColor="#ffffff" />
      </div>
    </div>
  );
};
export default QRCodeGenerator;
