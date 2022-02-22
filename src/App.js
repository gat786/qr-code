import React, { createRef, useState } from "react";
import QRcode from "qrcode";

import logo from "./logo.svg";
import "./App.css";
import QrCodeComponent from "./QrCodeComponent";

// make sure you do install https://www.npmjs.com/package/qrcode
// npm i qrcode
// yarn add qrcode

function App() {
  const qrDivRef = createRef(null);
  const [qrCodeString, setQrCodeString] = useState();

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <div>
      <input
        onChange={(event) => {
          setQrCodeString(event?.target?.value);
        }}
      />
      <QrCodeComponent content={qrCodeString} />
    </div>
  );
}

export default App;
