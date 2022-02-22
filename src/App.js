import React, { createRef, useRef } from "react";
import QRcode from "qrcode";

import logo from "./logo.svg";
import "./App.css";

// make sure you do install https://www.npmjs.com/package/qrcode
// npm i qrcode
// yarn add qrcode

function App() {
  const qrDivRef = createRef(null);

  return (
    <div>
      <button onClick={() => {
        QRcode.toCanvas(qrDivRef.current, "some text that we want to make qr off")
      }}>Generate QR code</button>
      <canvas ref={qrDivRef} id="qr-div"></canvas>
    </div>
  );
}

export default App;
