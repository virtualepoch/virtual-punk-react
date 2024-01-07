import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Box, Plane, useTexture } from "@react-three/drei";
// COMPONENTS
import { MegaWyvern } from "../components/models/MegaWyvern";
import { TempleOfLight } from "../components/models/TempleOfLight";
import { ShadowDragon } from "../components/models/ShadowDragon";
// TEXTURES
import texture from "../assets/images/textures/hex-512.jpg";
import { degToRad } from "three/src/math/MathUtils";
import { Ocean } from "../components/three/Ocean";
import gsap from "gsap";

import { FloatingIslandPortal } from "../components/models/FloatingIslandPortal";
import { DragonFantasy } from "../components/models/DragonFantasy";

export const TorusSceneMap = ({ sceneMap }) => {
  const textures = useTexture({
    map: `${
      performance < 2
        ? "/textures/moss-rock/baseColor.jpg"
        : "/textures/moss-rock/baseColor.jpg"
    }`,
    displacementMap: `${
      performance < 2
        ? "/textures/moss-rock/height.jpg"
        : "/textures/moss-rock/height.jpg"
    }`,
    roughnessMap: `${
      performance < 2
        ? "/textures/moss-rock/roughness.jpg"
        : "/textures/moss-rock/roughness.jpg"
    }`,
    metalnessMap: `${
      performance < 2
        ? "/textures/moss-rock/metallic.jpg"
        : "/textures/moss-rock/metallic.jpg"
    }`,
    normalMap: `${
      performance < 2
        ? "/textures/moss-rock/normal.jpg"
        : "/textures/moss-rock/normal.jpg"
    }`,
  });

  const repeatX = 10;
  const repeatY = 5;

  textures.map.repeat.set(repeatX, repeatY);
  textures.map.wrapS = textures.map.wrapT = THREE.RepeatWrapping;

  textures.displacementMap.repeat.set(repeatX, repeatY);
  textures.displacementMap.wrapS = textures.displacementMap.wrapT =
    THREE.RepeatWrapping;

  textures.roughnessMap.repeat.set(repeatX, repeatY);
  textures.roughnessMap.wrapS = textures.roughnessMap.wrapT =
    THREE.RepeatWrapping;

  textures.metalnessMap.repeat.set(repeatX, repeatY);
  textures.metalnessMap.wrapS = textures.metalnessMap.wrapT =
    THREE.RepeatWrapping;

  textures.normalMap.repeat.set(repeatX, repeatY);
  textures.normalMap.wrapS = textures.normalMap.wrapT = THREE.RepeatWrapping;

  // const map = useLoader(THREE.TextureLoader, texture);
  // map.repeat.set(30, 16);
  // map.wrapS = map.wrapT = THREE.RepeatWrapping;

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
      <Plane
        args={[120, 60]}
        position={[-5, -20, -60]}
        rotation-y={Math.PI / 2}
      >
        <meshStandardMaterial {...textures} />
      </Plane>

      <Plane args={[120, 60]} position={[5, -20, -60]} rotation-y={Math.PI / 2}>
        <meshStandardMaterial {...textures} side={THREE.BackSide} />
      </Plane>

      <MegaWyvern
        scale={4}
        position={[-6, 2, -150]}
        rotation-y={degToRad(35)}
      />

      <ShadowDragonIsland position={[10, -5, -140]} rotation-y={-1} />

      <TempleIsland position={[0, -70, -250]} scale={10} />
    </group>
  );
};
