import React, { useRef } from "react";
import { MainOverlay } from "../../components/MainOverlay";
import { HomeCanvas } from "./HomeCanvas";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";

export function Home() {
  const rabbitHole = useRef();
  const navigate = useNavigate();

  function delayAndGo(e, path) {
    e.preventDefault();
    rabbitHole.current.fastForward();

    setTimeout(() => navigate(path), 3000);
  }

  return (
    <>
      <MainOverlay />
      <HomeCanvas ref={rabbitHole} />
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

      <div className="footer-link-container">
        <Link
          className="footer-link forward"
          to="/torus"
          onClick={(e) => delayAndGo(e, "/torus")}
        >
          torus
        </Link>
      </div>
    </>
  );
}
