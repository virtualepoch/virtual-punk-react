// import { CylinderCollider } from "@react-three/fiber";
import { OrbitControls, Cylinder, MeshReflectorMaterial } from "@react-three/drei";
import { RigidBody, CylinderCollider } from "@react-three/rapier";
import { Mushrooms } from "../components/models/Mushrooms";

import { words } from "./game/words";
import { useGameStore } from "./game/store";
import { useEffect } from "react";
import { LetterSpots } from "./game/LetterSpots";
import { CharacterController } from "./game/CharacterController";

export const Game = () => {
  const startGame = useGameStore((state) => state.startGame);

  useEffect(() => {
    startGame();
  }, []);

  function Floor() {
    return (
      <>
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial blur={[400, 400]} resolution={1024} mixBlur={0.9} mixStrength={15} depthScale={1} minDepthThreshold={0.85} color="#dbecfb" metalness={0.6} />
        </mesh>
      </>
    );
  }

  return (
    <>
      <OrbitControls />
      {/* LIGHTS */}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} angle={0.3} intensity={0.8} castShadow color={"#9e69da"} />

      {/* BACKGROUND */}
      <Floor />
      <Mushrooms scale={[1, 1, 1]} position={[-3, -1.5, -11]} rotation={[0, -1, 0]} />
      <Mushrooms scale={[2, 2, 2]} position={[0, -1.5, -14]} />
      <Mushrooms scale={[1, 1, 1]} position={[3, -1.5, -11]} rotation={[0, -1, 0]} />

      <group position-y={-1}>
        {/* STAGE */}
        <RigidBody colliders={false} type="fixed" position-y={-0.5} friction={2}>
          <CylinderCollider args={[1 / 2, 5]} />
          <Cylinder scale={[5, 1, 5]} receiveShadow>
            <meshStandardMaterial color="white" />
          </Cylinder>
        </RigidBody>

        {/* CHARACTER */}
        <CharacterController />

        {/* LETTERS */}
        <LetterSpots />
      </group>
    </>
  );
};
