import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainOverlay } from "../../components/ui/MainOverlay";
import { HomeCanvas } from "./Intro";
import "./home.css";

export function Home() {
  const rabbitHole = useRef();
  const navigate = useNavigate();

  function delayAndGo(e, path) {
    e.preventDefault();
    rabbitHole.current.fastForward();

    setTimeout(() => navigate(path), 2000);
  }

  const [lookRight, setLookRight] = useState(false);

  console.log(lookRight);

  return (
    <>
      <button className="btn-look-right" onClick={() => setLookRight(true)} />
      <MainOverlay />

      <HomeCanvas ref={rabbitHole} props={lookRight} />

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
    </>
  );
}
