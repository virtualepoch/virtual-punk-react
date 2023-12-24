import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
// COMPONENTS
import { MegaWyvern } from "../components/models/MegaWyvern";
import { TempleOfLight } from "../components/models/TempleOfLight";
import { ShadowDragon } from "../components/models/ShadowDragon";
// TEXTURES
import textureLg from "../assets/images/textures/hex-100.jpg";
import { degToRad } from "three/src/math/MathUtils";
import { Ocean } from "../components/three/Ocean";
import { Megalodon } from "../components/models/Megalodon";

export const TorusSceneMap = ({ sceneMap, target }) => {
  const mapWidth = 50;
  const mapLength = 200;

  const shadowDragon = useRef();
  const megalodon = useRef();

  const texture = useLoader(
    THREE.TextureLoader,
    // performance === 0 ? textureSm :
    textureLg
  );
  texture.repeat.set(mapWidth / 4, mapLength / 2);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  useFrame(() => {
    if (megalodon.current.position.z >= 0) megalodon.current.position.z = -320;
    megalodon.current.position.z += 0.1;
  });

  return (
    <group ref={sceneMap} position={[0, -5, 0]}>
      <mesh position={[-25, -7.5, -40]} scale={15}>
        <TempleOfLight />
      </mesh>
      <mesh position={[25, -7.5, -40]} scale={15}>
        <TempleOfLight />
      </mesh>
      <mesh
        ref={target}
        scale={4}
        position={[-6, 2, -30]}
        rotation-y={degToRad(35)}
      >
        <MegaWyvern />
      </mesh>
      <mesh
        ref={shadowDragon}
        scale={12}
        position={[18, 1.8, -38]}
        rotation-y={degToRad(-35)}
      >
        <ShadowDragon />
      </mesh>
      <Megalodon megalodon={megalodon} scale={15} position={[0, -16, -320]} />
      <Ocean position={[0, -7, 0]} />
      <Plane
        args={[mapWidth, mapLength]}
        position={[0, -8, -mapLength / 2]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial map={texture} transparent opacity={0.5} />
      </Plane>
    </group>
  );
};
