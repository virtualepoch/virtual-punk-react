import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Game } from "./Testing2Game";
import { MobileController } from "./components/MobileController";

export const Controls = {
  accelerate: "accelerate",
  back: "back",
  left: "left",
  right: "right",
  boost: "boost",
};

export function AniMoto() {
  const map = useMemo(
    () => [
      { name: Controls.accelerate, keys: ["Space"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.boost, keys: ["ArrowUp", "KeyW"] },
    ],
    []
  );
  
  return (
    <>
      <h1 className="page-title animoto">AniMoto</h1>
      <KeyboardControls map={map}>
        <Canvas className="canvas moto" shadows camera={{ position: [0, 6, 14], fov: 42 }}>
          {/* <color attach="background" args={["#dbedfb"]} /> */}
          {/* <fog attach="fog" args={["#dbedfb", 30, 40]} /> */}
          <Suspense>
            <Physics debug>
              <Game />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
      <MobileController />
        <Link className="pill trans" to="/">
          exit
        </Link>
    </>
  );
}
