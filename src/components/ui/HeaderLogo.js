import { useState } from "react";
import { Link } from "react-router-dom";

export const HeaderLogo = ({ setNavMenuOpen }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <Link
        className="logo-container"
        to={"/"}
        aria-label="link to home page"
        onClick={() => setNavMenuOpen(false)}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
      >
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
      </Link>
      <div
        className="logo-box-shadow"
        style={{
          boxShadow: pressed ? "none" : "2px 2px 10px 1px rgba(0,0,0,0.5)",
        }}
      ></div>
    </>
  );
};
