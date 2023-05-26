import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from "react";
import { StarshipLightsCamera } from "./StarshipLightsCamera";
import { Canvas } from "@react-three/fiber";

export function StarPunk() {
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
      <h1 className="page-title">Star Punk</h1>
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
      <Canvas>
        <ExtendingWalls />
        <StarshipLightsCamera ref={ref} />
      </Canvas>
    </>
  );
}
