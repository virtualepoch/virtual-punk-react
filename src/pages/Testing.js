import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../components/models/Ayanami_rei";
import { PillLinks } from "../components/PillLinks";

export function Testing() {
  return (
    <>
      <h1 className="page-title">Testing</h1>
      <Canvas className="canvas testing" camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={1} />
        <OrbitControls />
        <Model position={[0, -1, 0]} />
      </Canvas>
      <PillLinks backTo={"/"} backName={"home"} forwardTo={"/torus"} forwardName={"torus"} />
    </>
  );
}
