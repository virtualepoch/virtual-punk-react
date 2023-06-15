import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { StarPunkShip } from "./StarPunkShip";
import { PillLinks } from "../components/PillLinks";

export function StarPunk() {
  function ExtendingWalls() {
    const walls = useRef();

    useFrame(() => {
      if (walls.current.position.z < 1700) {
        walls.current.position.z += 0.4;
      } else {
        walls.current.position.z -= 1500;
      }
    });

    return (
      <mesh ref={walls} position={[0, 0, -1500]} rotation={[Math.PI / -2, Math.PI / 4, 0]}>
        <cylinderGeometry args={[55, 55, 3000, 4, 200]} />
        <meshBasicMaterial color={"aqua"} wireframe={true} />
      </mesh>
    );
  }

  return (
    <>
      <h1 className="page-title">Star Punk</h1>
      <Canvas camera={{ position: [0, 8, 15], rotation: [0, 0, 0], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 10]} angle={0.3} />
        <OrbitControls target={[0, 0, 0]} autoRotate={true} />
        <Stars />
        <StarPunkShip />
        <ExtendingWalls />
      </Canvas>
      <PillLinks backTo="/mach" backName="mach" forwardTo="/vr" forwardName="vr" />
    </>
  );
}
