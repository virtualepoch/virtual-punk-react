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
        onMouseDown={() => {
          setPressed(true);
          setNavMenuOpen(false);
        }}
        onMouseUp={() => setPressed(false)}
        onTouchStart={() => {
          setPressed(true);
          setNavMenuOpen(false);
        }}
        onTouchEnd={() => setPressed(false)}
      >
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
      </Link>
      <div
        className={pressed ? "logo-box-shadow pressed" : "logo-box-shadow"}
      ></div>
    </>
  );
};
