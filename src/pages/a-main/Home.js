import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainOverlay } from "../../components/MainOverlay";
import { HomeCanvas } from "./HomeCanvas";
import "./home.css";
import { FooterLink } from "../../components/FooterLink";
import { FooterLinks } from "../../components/FooterLinks";

export function Home() {
  const rabbitHole = useRef();
  const navigate = useNavigate();

  function delayAndGo(e, path) {
    e.preventDefault();
    rabbitHole.current.fastForward();

    setTimeout(() => navigate(path), 2000);
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
        <p className="hero-text">Please stand by</p>
      </header>

      <FooterLinks
        single
        forwardTo="/torus"
        forwardName="torus"
        onClick={(e) => delayAndGo(e, "/torus")}
      />
    </>
  );
}
