import React, { useEffect, createRef } from "react";
import QRcode from "qrcode";

export default function QrCodeComponent(props) {
  const qrDivRef = createRef(null);
  useEffect(() => {
    if (props?.content) {
      QRcode.toCanvas(qrDivRef.current, props?.content);
    }
  }, [props?.content]);
  return (
    <div>
      <canvas ref={qrDivRef} id="qr-div"></canvas>
    </div>
  );
}
