import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

import bg from "../assets/images/dreamlike_sunset.jpg";
import { OrbitControls } from "@react-three/drei";
import { Ayanami } from "./dissolve/Ayanami";

const BackDrop = () => {
  const map = useLoader(THREE.TextureLoader, bg);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0003;
  });

  return (
    <mesh position={[0, 0, 0]} rotation={[0, 1.6, 0]} ref={ref}>
      <sphereGeometry args={[27, 20, 4]} />
      <meshStandardMaterial map={map} side={THREE.BackSide} />
    </mesh>
  );
};

function Ground() {
  return (
    <>
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[55, 55]} />
        <meshBasicMaterial color="#dbecfb" />
      </mesh>
    </>
  );
}

export function VR() {
  return (
    <>
      <VRButton />
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={1} />
        <pointLight intensity={1} />
        <XR>
          <Controllers />
          <Hands />
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="blue" />
          </mesh>
          <BackDrop />
          <Ground />
          <Ayanami position={[0, -1.5, -4]} rotation={[0, -0.6, 0]} scale={[0.03, 0.03, 0.03]} />
        </XR>
      </Canvas>
    </>
  );
}
