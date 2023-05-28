import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { JetConcept } from "../components/models/Jet_concept";
import { Earth4K } from "../components/models/Earth_4k_air";
import { PillLinks } from "../components/PillLinks";

export function Testing() {
  function EarthMesh() {
    const earth = useRef(null);

    useFrame(() => {
      earth.current.rotation.x += 0.0002;
    });

    return (
      <mesh ref={earth} position={[0, -80, -70]}>
        <Earth4K scale={1} rotation={[0, 3, 0]} />
      </mesh>
    );
  }

  function JetMesh() {
    const jet = useRef(null);

    useFrame(() => {
      jet.current.rotation.z += 0.01;
    });

    return (
      <mesh ref={jet} position={[0, -2, 0]}>
        <JetConcept scale={1} rotation={[0, Math.PI / -2, 0]} />
      </mesh>
    );
  }
  return (
    <>
      <h1 className="page-title">Testing</h1>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 15, 10]} angle={0.3} />
        <OrbitControls />
        <PerspectiveCamera position={[0, 0, 12]} rotation={[0, 0, 0]} fov={50} makeDefault far={5000} />
        <JetMesh />
        <EarthMesh />
        <Stars />
      </Canvas>
      <PillLinks backTo={"/"} backName={"home"} forwardTo={"/torus"} forwardName={"torus"} />
    </>
  );
}
