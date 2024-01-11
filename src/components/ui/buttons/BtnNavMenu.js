// import { useState } from "react";

export const BtnNavMenu = ({ navMenuOpen, setNavMenuOpen }) => {
  // const [pressed, setPressed] = useState(false);

  return (
    <>
      <button
        className="btn-nav-menu flex-center"
        aria-label="navigation menu button"
        onClick={() => setNavMenuOpen(!navMenuOpen)}
        // onMouseDown={() => setPressed(true)}
        // onMouseUp={() => setPressed(false)}
        // onTouchStart={() => setPressed(true)}
        // onTouchEnd={() => setPressed(false)}
        // style={{
        //   transform: pressed ? "scale(0.95)" : "scale(1)",
        // }}
      >
        <div className={navMenuOpen ? "bar open scale-x" : "bar open"}></div>
        <div className={navMenuOpen ? "bar open scale-x" : "bar open"}></div>

        <div className={navMenuOpen ? "bar close" : "bar close scale-x"}></div>
        <div className={navMenuOpen ? "bar close" : "bar close scale-x"}></div>
      </button>
    </>
  );
};
