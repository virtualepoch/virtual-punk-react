import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { DragonScene } from "./DragonScene";

export function Dragon() {
  return (
    <Canvas
      shadows
      camera={{ position: [-5, 3, 5], rotation: [0, 0, 0], fov: 50 }}
    >
      <fog attach="fog" args={["gray", 1, 50]} />
      <Suspense fallback={null}>
        <DragonScene />
      </Suspense>
    </Canvas>
  );
}
