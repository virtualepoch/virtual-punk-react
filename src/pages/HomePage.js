import React, { useRef } from "react";
import { MainOverlay } from "../components/MainOverlay";
import { CanvasHome } from "../components/CanvasHome";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";

export function HomePage() {
  const ref = useRef();
  const navigate = useNavigate();

  function delayAndGo(e, path) {
    e.preventDefault();
    ref.current.fastForward();

    setTimeout(() => navigate(path), 3000);
  }

  return (
    <>
      <MainOverlay />
      <CanvasHome ref={ref} />
      <header className="hero-section">
        <p className="hero-text">Welcome!</p>
        <p className="hero-text">
          My name is Craig <span className="word-pop">Kaufman</span>
        </p>
        <p className="hero-text">
          This is my portfolio of<br></br>
          <span className="three-d-text">3D</span>
        </p>
        <p className="hero-text">Hope you enjoy!</p>
      </header>

      <Link className="red-pill" to={"/torus"} onClick={(e) => delayAndGo(e, "/torus")}></Link>
    </>
  );
}
