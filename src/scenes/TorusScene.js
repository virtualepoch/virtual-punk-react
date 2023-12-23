import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Plane,
  useHelper,
} from "@react-three/drei";
import gsap from "gsap";

//COMPONENTS
import { BgSphere } from "../components/three/BgSphere";
import { TorusSceneGroup } from "../components/three/TorusSceneGroup";
import { DragonFlying } from "../components/models/DragonFlying";
import { TempleOfLight } from "../components/models/TempleOfLight";
import { ShadowDragon } from "../components/models/ShadowDragon";

// import textureSm from "../assets/images/textures/hex-100.jpg"
// import textureLg from "../assets/images/textures/Tile_04-512x512.png";
import textureLg from "../assets/images/textures/hex-100.jpg";
import bgTexture from "../assets/images/panoramas/cyber-sky.jpg";

export const TorusScene = ({ performance, thirdPerson }) => {
  const mapWidth = 50;
  const mapLength = 200;

  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  const texture = useLoader(
    THREE.TextureLoader,
    // performance === 0 ? textureSm :
    textureLg
  );

  texture.repeat.set(mapWidth / 4, mapLength / 2);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  const cam = useRef();
  const sceneMap = useRef();
  const torusGroup = useRef();
  const shadowDragon = useRef();
  const clock = new THREE.Clock();

  const dragonTorus = useRef();
  useEffect(() => {
    gsap.to(dragonTorus.current.position, {
      y: thirdPerson ? -0.5 : 0,
      z: thirdPerson ? -1 : 0,
      duration: 0.7,
      ease: "power1.inOut",
    });
  }, [dragonTorus, thirdPerson]);

  useFrame(() => {
    const a = clock.getElapsedTime();
    torusGroup.current.position.z -=
      torusGroup.current.position.z > -6 ? 0.02 : 0;
    torusGroup.current.position.y += a >= 4 ? 0.1 : 0;
    torusGroup.current.rotation.y += a >= 4 ? 0.3 : a >= 8 ? 0 : 0;

    if (sceneMap.current.position.z > 175) sceneMap.current.position.z = 0;
    sceneMap.current.position.z += 0.03;
  });

  const camPos = 0.1;
  return (
    <group>
      <PerspectiveCamera ref={cam} makeDefault position={[0, 0, camPos]}>
        <OrbitControls
          minDistance={0}
          maxDistance={camPos}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 4}
        />
        <ambientLight intensity={1} />
        <directionalLight
          ref={directionalLight}
          intensity={10}
          position={[-1, 2, 4]}
        />
      </PerspectiveCamera>
      <BgSphere bgImage={bgTexture} />

      <DragonFlying dragonRef={dragonTorus} />
      <group ref={torusGroup} position={[0, 0, 0]}>
        <TorusSceneGroup />
      </group>

      <group ref={sceneMap} position={[0, -5, 0]}>
        <mesh position={[-25, -7.5, -40]} scale={15}>
          <TempleOfLight />
        </mesh>
        <mesh position={[25, -7.5, -40]} scale={15}>
          <TempleOfLight />
        </mesh>
        <mesh ref={shadowDragon} position={[24, 0, -5]}>
          <ShadowDragon />
        </mesh>
        <Plane
          args={[mapWidth, mapLength]}
          position={[0, -8, -mapLength / 2]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <meshBasicMaterial map={texture} transparent opacity={0.5} />
        </Plane>
      </group>
    </group>
  );
};
