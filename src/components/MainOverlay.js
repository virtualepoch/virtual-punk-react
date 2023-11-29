import React, { useEffect, useRef, useState } from "react";
import "./main-overlay.css";
import { CSSTransition } from "react-transition-group";

export const MainOverlay = () => {
  const [overlayOpen, setOverlayOpen] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setOverlayOpen(false)
    },2000)
  },[overlayOpen])

  console.log(overlayOpen)

  return (
    <CSSTransition
      in={overlayOpen}
      unmountOnExit
      timeout={1000}
      classNames="main-overlay"
    >
      <div className="main-overlay">
        <div className="logo-container">
          <div className="logo"></div>
          <div className="logo"></div>
          <div className="logo"></div>
          <div className="logo"></div>
          <div className="logo"></div>
        </div>
      </div>
    </CSSTransition>
  );
}
