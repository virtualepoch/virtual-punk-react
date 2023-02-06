import React, { useRef, useEffect } from "react";
import "../components/wire-box-underlay.css";

export function WireBoxUnderlay() {
  // WIRE BOX ANIMATION
  const wireFrameContainer = useRef(null);

  useEffect(() => {
    wireFrameContainer.current.classList.add("open");
  });

  return (
    <div className="underlay-container">
      <div className="wire-frame-container" ref={wireFrameContainer}>
        <div className="wire-frame"></div>
        <div className="wire-frame"></div>
        <div className="wire-frame"></div>
        <div className="wire-frame"></div>
        <div className="wire-frame"></div>
        <div className="wire-frame"></div>
        <div className="wire-frame"></div>
        <div className="wires"></div>
        <div className="wires right"></div>
        <div className="wires top"></div>
        <div className="wires bottom"></div>
      </div>
    </div>
  );
}
