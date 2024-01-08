import { useState } from "react";

export const BtnIdahomeMenu = ({
  idahomeNavMenuOpen,
  setIdahomeNavMenuOpen,
}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <button
        className="btn-idahome-menu flex-center"
        aria-label="navigation menu button"
        onClick={() => setIdahomeNavMenuOpen(!idahomeNavMenuOpen)}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
        style={{
          transform: pressed ? "scale(0.95)" : "scale(1)",
        }}
      >
        <div
          className={idahomeNavMenuOpen ? "bar open scale-x" : "bar open"}
        ></div>
        <div
          className={idahomeNavMenuOpen ? "bar open scale-x" : "bar open"}
        ></div>

        <div
          className={idahomeNavMenuOpen ? "bar close" : "bar close scale-x"}
        ></div>
        <div
          className={idahomeNavMenuOpen ? "bar close" : "bar close scale-x"}
        ></div>
      </button>
    </>
  );
};
