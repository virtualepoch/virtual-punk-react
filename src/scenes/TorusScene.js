import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  useHelper,
} from "@react-three/drei";
import gsap from "gsap";
//COMPONENTS
import { DragonFlying } from "../components/models/DragonFlying";
import { TorusSceneGroup } from "../components/three/TorusSceneGroup";
import { BgSphere } from "../components/three/BgSphere";
import { TorusSceneMap } from "./TorusSceneMap";
import texture from "../assets/images/panoramas/cyber-sky.jpg";
import { Ocean } from "../components/three/Ocean";
// EXPORT: FUNCTIONAL COMPONENT
export const TorusScene = ({ performance, thirdPerson }) => {
  const map = useLoader(THREE.TextureLoader, texture);
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  const cam = useRef();
  const sceneMap = useRef();
  const torusGroup = useRef();
  const dragonTorus = useRef();
  const clock = new THREE.Clock();

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
      <PerspectiveCamera ref={cam} position={[0, 0, camPos]}>
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

      <Sphere args={[300, 16, 16]}>
        <meshBasicMaterial map={map} side={THREE.BackSide} />
        <Ocean position-y={-30}/>
      </Sphere>

      <DragonFlying dragonRef={dragonTorus} />

      <group ref={torusGroup} position={[0, 0, 0]}>
        <TorusSceneGroup />
      </group>

      <TorusSceneMap sceneMap={sceneMap} />
    </group>
  );
};
