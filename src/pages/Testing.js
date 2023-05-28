import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Model } from "../components/models/SolarSystem";
import { PillLinks } from "../components/PillLinks";

export function Testing() {
  return (
    <>
      <h1 className="page-title">Testing</h1>
      <Canvas className="canvas" camera={{ position: [0, 0, -3] }}>
        <ambientLight intensity={1} />
        <OrbitControls />
        <Model />
        <Stars />
        <PerspectiveCamera position={[250, 0, 0]} rotation={[0, 0, 0]} fov={80} makeDefault far={5000} />
      </Canvas>
      <PillLinks backTo={"/"} backName={"home"} forwardTo={"/torus"} forwardName={"torus"} />
    </>
  );
}
