import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

import bg from "../assets/images/dreamlike_sunset.jpg";
import { OrbitControls } from "@react-three/drei";
import { Ayanami } from "./dissolve/Ayanami";
import { DissolveMaterial } from "./dissolve/DissolveMaterial";
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

const reiBaseScale = 0.025;

export function VR() {
  const { itemsDisplayed } = useControls({
    itemsDisplayed: {
      value: "rei",
      options: ["box", "sphere", "rei"],
    },
  });

  const [visibleItem, setVisibleItem] = useState(itemsDisplayed);
  const onFadeOut = () => setVisibleItem(itemsDisplayed);

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
            <sphereGeometry args={[0.3, 8, 8]} />
            <meshBasicMaterial color="blue" />
          </mesh>
          <BackDrop />
          <Ground />

          <mesh position-z={-1}>
            {visibleItem === "box" && (
              <mesh>
                <boxGeometry />
                <DissolveMaterial baseMaterial={boxMaterial} visible={itemsDisplayed === "box"} onFadeOut={onFadeOut} color="#0082b2" />
              </mesh>
            )}

            {visibleItem === "sphere" && (
              <mesh scale={0.5}>
                <sphereGeometry />
                <DissolveMaterial baseMaterial={sphereMaterial} visible={itemsDisplayed === "sphere"} onFadeOut={onFadeOut} color="#ff0000" />
              </mesh>
            )}

            {visibleItem === "rei" && <Ayanami position={[0, -1.5, 0]} rotation={[0, -0.6, 0]} scale={[reiBaseScale, reiBaseScale, reiBaseScale]} dissolveVisible={itemsDisplayed === "rei"} onFadeOut={onFadeOut} />}
          </mesh>
        </XR>
      </Canvas>
    </>
  );
}
