import { useEffect, useState } from "react";

export const StyledBorder = ({ modalInfoOpen }) => {
  const [borderOpen, setBorderOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      modalInfoOpen ? setBorderOpen(true) : setBorderOpen(false);
    }, 500);
  }, [modalInfoOpen]);

  return (
    <div className="styled-border">
      <div
        className={borderOpen ? "bar-wrapper tall scale-y" : "bar-wrapper tall"}
      >
        <div className="bar top"></div>
        <div className="bar bottom"></div>
        <div className="bar middle"></div>
        <div className="bar bottom"></div>
        <div className="bar bottom"></div>
      </div>
      <div
        className={borderOpen ? "bar-wrapper med scale-y" : "bar-wrapper med"}
      >
        <div className="bar top"></div>
        <div className="bar bottom"></div>
        <div className="bar middle"></div>
        <div className="bar bottom"></div>
      </div>
      <div
        className={
          borderOpen ? "bar-wrapper short scale-y" : "bar-wrapper short"
        }
      >
        <div className="bar top"></div>
        <div className="bar bottom"></div>
        <div className="bar middle"></div>
        <div className="bar bottom"></div>
      </div>
      <div className={borderOpen ? "red-bar scale-y" : "red-bar"}></div>
      <div
        className={borderOpen ? "red-bar scale-y right" : "scale-y right"}
      ></div>
    </div>
  );
};
