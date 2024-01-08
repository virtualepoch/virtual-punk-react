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
import { TorusSceneMap } from "./TorusSceneMap";
import { Ocean } from "../components/three/Ocean";
import texture from "../assets/images/panoramas/cyber-sky.jpg";

export const TorusScene = ({ performanceLevel, thirdPerson }) => {
  const map = useLoader(THREE.TextureLoader, texture);

  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  const cam = useRef();
  const sceneMap = useRef();
  const dragonTorus = useRef();

  useEffect(() => {
    gsap.to(dragonTorus.current.position, {
      y: thirdPerson ? -0.2 : 0,
      z: thirdPerson ? -2 : 0,
      duration: 0.7,
      ease: "power1.inOut",
    });
  }, [dragonTorus, thirdPerson]);

  useFrame(() => {
    if (sceneMap.current.position.z > 175) sceneMap.current.position.z = 0;
    sceneMap.current.position.z += 0.03;
  });

  const camPos = 1;
  return (
    <group>
      <PerspectiveCamera ref={cam} makeDefault position={[0, 0, camPos]} />

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
        intensity={5}
        position={[-1, 2, 4]}
      />

      <Sphere args={[300, 16, 16]}>
        <meshBasicMaterial map={map} side={THREE.BackSide} />
        <Ocean position-y={-30} />
      </Sphere>

      <DragonFlying dragonRef={dragonTorus} />

      <TorusSceneMap sceneMap={sceneMap} performanceLevel={performanceLevel} />
    </group>
  );
};
