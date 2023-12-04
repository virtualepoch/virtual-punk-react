import { useState } from "react";
import { Link } from "react-router-dom";

export const FooterLink = ({ to, name, onClick, side }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <Link
        className={
          pressed ? `footer-link ${side} pressed` : `footer-link ${side}`
        }
        to={to}
        onClick={onClick}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
      >
        {name}
      </Link>
      {/* LINK EFFECTS ////////////////////////////// */}
      <div className={`effect ${side}`}></div>
      <div className={`effect-2 ${side}`}></div>
      <div className={`effect-3 ${side}`}></div>
      <div className={`effect-4 ${side}`}></div>

      {/* LINK ICON //////////////////////////////////// */}
      {side === "center" && (
        <div className={`center-icon-2 ${side}`}>
          <div className="bar"></div>
          <div className="bar center"></div>
        </div>
      )}

      {/* LINK SHADOW /////////////////////////////////////////// */}
      <div
        className={pressed ? `shadow ${side} pressed` : `shadow ${side}`}
      ></div>
    </>
  );
};
