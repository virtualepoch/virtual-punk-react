import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { StarPunkShip } from "./StarPunkShip";

export function StarPunkScene() {
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
      <mesh
        ref={walls}
        position={[0, 0, -1500]}
        rotation={[Math.PI / -2, Math.PI / 4, 0]}
      >
        <cylinderGeometry args={[55, 55, 3000, 4, 200]} />
        <meshBasicMaterial color={"aqua"} wireframe={true} />
      </mesh>
    );
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 15, -10]} />
      <Stars />
      <StarPunkShip position={[0, -3, -15]} />
      <ExtendingWalls />
    </>
  );
}
