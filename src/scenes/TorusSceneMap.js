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
import gsap from "gsap";

import { FloatingIslandPortal } from "../components/models/FloatingIslandPortal";
import { DragonFantasy } from "../components/models/DragonFantasy";


export const TorusSceneMap = ({ sceneMap }) => {
  const ShadowDragonIsland = (props) => {
    return (
      <group {...props}>
        <FloatingIslandPortal />
        <ShadowDragon scale={8} position-y={5} />
      </group>
    );
  };
  
  const TempleIsland = (props) => {
    return (
      <group {...props}>
        <DragonFantasy scale={3} position={[0, 5, 2]} />
        <FloatingIslandPortal />
        <TempleOfLight
          position={[0, 5, 0]}
          rotation={[0, -0.3, 0]}
          scale={1.2}
        />
      </group>
    );
  };

  return (
    <group ref={sceneMap} position={[0, -5, 0]}>
      <MegaWyvern scale={4} position={[-6, 2, -30]} rotation-y={degToRad(35)} />
      <ShadowDragonIsland position={[10, -5, -30]} rotation-y={-1} />
      <TempleIsland position={[0, -70, -250]} scale={10} />
    </group>
  );
};
