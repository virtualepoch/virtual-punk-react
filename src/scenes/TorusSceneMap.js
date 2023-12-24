import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Box, Plane } from "@react-three/drei";
// COMPONENTS
import { MegaWyvern } from "../components/models/MegaWyvern";
import { TempleOfLight } from "../components/models/TempleOfLight";
import { ShadowDragon } from "../components/models/ShadowDragon";
// TEXTURES
import textureLg from "../assets/images/textures/hex-100.jpg";
import { degToRad } from "three/src/math/MathUtils";
import { Ocean } from "../components/three/Ocean";
import { Megalodon } from "../components/models/Megalodon";
import { PcSpider } from "../components/models/PcSpider1k";
import gsap from "gsap";

export const TorusSceneMap = ({ sceneMap, target }) => {
  const mapWidth = 30;
  const mapHeight = 5;
  const mapLength = 200;

  const shadowDragon = useRef();
  const megalodon = useRef();
  const spider = useRef();

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
      <mesh position={[-20, -7.5, -40]} scale={10}>
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
      <group ref={spider} position={[-36, 11, -100]} rotation-y={Math.PI / 8}>
        <PcSpider scale={1.5} />
      </group>
      <Megalodon megalodon={megalodon} scale={15} position={[0, -16, -320]} />
      <Ocean position={[0, -7, 0]} />
      <Box
        args={[mapWidth, mapHeight, mapLength * 2]}
        position={[-mapWidth * 1.5, -7, -mapLength]}
        rotation={[0, 0, 0]}
      >
        <meshBasicMaterial map={texture} />
      </Box>
    </group>
  );
};
