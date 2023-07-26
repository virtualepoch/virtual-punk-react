import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { CameraControls, ContactShadows, Environment } from "@react-three/drei";

import bg from "../../assets/images/dreamlike_sunset.jpg";

import { Ayanami } from "./Ayanami";
import { DissolveMaterial } from "./DissolveMaterial";
import { useControls } from "leva";

const boxMaterial = new THREE.MeshStandardMaterial({ color: "white" });
const sphereMaterial = new THREE.MeshStandardMaterial({ color: "white" });

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

export function DissolveScene() {
  const controlsRef = useRef();

  const { itemsDisplayed } = useControls({
    itemsDisplayed: {
      value: "box",
      options: ["box", "sphere"],
    },
  });

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight intensity={1} />
      <BackDrop />
      <CameraControls ref={controlsRef} minAzimuthAngle={-Math.PI / 1} maxAzimuthAngle={Math.PI / 1} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 4} minDistance={2} maxDistance={15} />
      {/* <Ayanami position={[0, -1.7, 0]} rotation={[0, -0.6, 0]} scale={[0.03,0.03,0.03]} /> */}
      <Environment preset="sunset" />
      <mesh>
        <boxGeometry />
        <DissolveMaterial baseMaterial={boxMaterial} visible={itemsDisplayed === "box"} />
      </mesh>
      <mesh scale={0.5}>
        <sphereGeometry />
        <DissolveMaterial baseMaterial={sphereMaterial} visible={itemsDisplayed === "sphere"} />
      </mesh>
      <ContactShadows scale={[16, 16]} opacity={0.5} />
    </>
  );
}
