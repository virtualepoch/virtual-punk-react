import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from "react";
import { StarshipLightsCamera } from "../components/StarshipLightsCamera";
import { Canvas } from "@react-three/fiber";

export function StarPunk() {
  const style = {
    h1: {
      position: "absolute",
      top: "80px",
      left: 0,
      zIndex: 4,
      color: "white",
      padding: "10px",
    },
    canvas: {
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      background: "linear-gradient(to right, rgb(0, 50, 50), black, rgb(0, 50, 50))",
    },
  };

  const ref = useRef();

  function ExtendingWalls() {
    return (
      <mesh position={[0, 0, -1500]} rotation={[Math.PI / -2, Math.PI / 4, 0]}>
        <cylinderGeometry args={[55, 55, 3000, 4, 200]} />
        <meshBasicMaterial color={"aqua"} wireframe={true} />
      </mesh>
    );
  }

  return (
    <>
      <h1 style={style.h1}>Star Punk</h1>
      <button
        className="left-btn"
        onClick={() => {
          ref.current.moveLeft();
        }}
      >
        &lt;
      </button>
      <button
        className="right-btn"
        onClick={() => {
          ref.current.moveRight();
        }}
      >
        &gt;
      </button>
      <Canvas style={style.canvas}>
        <ExtendingWalls />
        <StarshipLightsCamera ref={ref} />
      </Canvas>
    </>
  );
}
