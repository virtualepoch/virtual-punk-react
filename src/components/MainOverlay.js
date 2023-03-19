import React, { useEffect, useRef } from "react";
import "./main-overlay.css"

export function MainOverlay() {
  // CLOSE MAIN OVERLAY
  const mainOverlay = useRef(null);
  useEffect(() => {
    mainOverlay.current.style.transform = "translateY(-100vh)";
  });
  
  return (
    <div className="main-overlay" ref={mainOverlay}>
      <div className="logo-container">
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
      </div>
    </div>
  );
}
