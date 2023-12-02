import React, { useMemo } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Game } from "./Testing2Game";
import { FooterLinks } from "../../components/FooterLinks";
import { MobileController } from "./components/MobileController";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

export function LetterGame() {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );
  return (
    <>
      <h1 className="page-title">Letter-Game</h1>
      <KeyboardControls map={map}>
        <Canvas
          className="canvas"
          shadows
          camera={{ position: [0, 6, 14], fov: 42 }}
        >
          {/* <color attach="background" args={["#dbedfb"]} /> */}
          <fog attach="fog" args={["#dbedfb", 30, 40]} />
          <Suspense>
            <Physics debug>
              <Game />
            </Physics>
          </Suspense>
          <Stars />
        </Canvas>
      </KeyboardControls>
      <MobileController />
      <FooterLinks
        backTo="/"
        backName="home"
        forwardTo="/torus"
        forwardName="torus"
      />
    </>
  );
}
