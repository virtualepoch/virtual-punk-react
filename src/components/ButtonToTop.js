import React, { useRef, useEffect } from "react";
import "./button-to-top.css";

export function ButtonToTop() {
  const buttonToTop = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        buttonToTop.current.classList.add("open");
      } else {
        buttonToTop.current.classList.remove("open");
      }
    });
  });

  function scrollToTop() {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button className="button-to-top" ref={buttonToTop} onClick={scrollToTop}>
      <div className="button-to-top-bars"></div>
    </button>
  );
}
