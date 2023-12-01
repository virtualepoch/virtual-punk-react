import { useState } from "react";

export const BtnNavMenu = ({ navMenuOpen, setNavMenuOpen }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <button
        className="btn-nav-menu"
        aria-label="navigation menu button"
        onMouseDown={() => {
          setPressed(true);
          setNavMenuOpen(!navMenuOpen);
        }}
        onMouseUp={() => setPressed(false)}
        onTouchStart={() => {
          setPressed(true);
          setNavMenuOpen(!navMenuOpen);
        }}
        onTouchEnd={() => setPressed(false)}
      >
        <div className={navMenuOpen ? "bar open scale-x" : "bar open"}></div>
        <div className={navMenuOpen ? "bar open scale-x" : "bar open"}></div>

        <div className={navMenuOpen ? "bar close" : "bar close scale-x"}></div>
        <div className={navMenuOpen ? "bar close" : "bar close scale-x"}></div>
      </button>
      <div
        className={
          pressed ? "btn-nav-box-shadow pressed" : "btn-nav-box-shadow"
        }
      ></div>
    </>
  );
};
