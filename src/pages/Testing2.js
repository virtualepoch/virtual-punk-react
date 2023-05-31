import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Game } from "./Testing2Game";
import { PillLinks } from "../components/PillLinks";

export function Testing2() {
  return (
    <>
      <h1 className="page-title">Testing-2</h1>
      <Canvas className="canvas" shadows camera={{ position: [0, 6, 14], fov: 42 }}>
        {/* <color attach="background" args={["#dbedfb"]} /> */}
        <fog attach="fog" args={["#dbedfb", 30, 40]} />
        <Suspense>
          <Physics debug>
            <Game />
          </Physics>
        </Suspense>
        <Stars />
      </Canvas>
      <PillLinks backTo="/" backName="home" forwardTo="/torus" forwardName="torus" />
    </>
  );
}
