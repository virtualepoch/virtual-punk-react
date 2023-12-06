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

  return (
    <>

      <HomeCanvas ref={rabbitHole}/>


    </>
  );
}
