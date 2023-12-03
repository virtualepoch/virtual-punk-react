import { useState } from "react";
import { Link } from "react-router-dom";

export const FooterLink = ({ forwardTo, forwardName, onClick }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="footer-link-container">
      <Link
        className={
          pressed ? "footer-link single pressed" : "footer-link single"
        }
        to={forwardTo}
        onClick={onClick}
        onMouseDown={() => setPressed(true)}
        onTouchStart={() => setPressed(true)}
      >
        {forwardName}
      </Link>
      {/* LINK EFFECTS ////////////////////////////// */}
      <div className="effect single "></div>
      <div className="effect-2 single"></div>
      <div className="effect-3 single"></div>
      <div className="effect-4 single "></div>

      {/* LINK ICON //////////////////////////////////// */}
      <div className="center-icon-2 single">
        <div className="bar"></div>
        <div className="bar center"></div>
      </div>

      {/* LINK SHADOW /////////////////////////////////////////// */}
      <div
        className={pressed ? "shadow single pressed" : "shadow single"}
      ></div>
    </div>
  );
};
