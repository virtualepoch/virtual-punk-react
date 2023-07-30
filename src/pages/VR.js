import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

import bg from "../assets/images/realistic_wireframe_matrix.jpg";
import { OrbitControls } from "@react-three/drei";
import { Ayanami } from "./dissolve/Ayanami";
import { DissolveMaterial } from "./dissolve/DissolveMaterial";
import { useControls } from "leva";

const boxMaterial = new THREE.MeshStandardMaterial({ color: "white" });

const BackDrop = () => {
  const map = useLoader(THREE.TextureLoader, bg);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0;
  });

  return (
    <mesh position={[0, 5, 0]} rotation={[0, 1.6, 0]} ref={ref}>
      <sphereGeometry args={[27, 20, 4]} />
      <meshStandardMaterial map={map} side={THREE.BackSide} />
    </mesh>
  );
};

function Ground() {
  return (
    <>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial color="#dbecfb" />
      </mesh>
    </>
  );
}

const reiBaseScale = 0.01;

export function VR() {
  const { itemsDisplayed } = useControls({
    itemsDisplayed: {
      value: "rei",
      options: ["box", "mod2", "rei"],
    },
  });

  const [visibleItem, setVisibleItem] = useState(itemsDisplayed);
  const onFadeOut = () => setVisibleItem(itemsDisplayed);

  return (
    <>
      <VRButton />
      <Canvas shadows camera={{ position: [0, 2, 5], rotation: [0, 5, 0], fov: 60 }}>
        <OrbitControls />
        <ambientLight intensity={1} />
        <pointLight intensity={1} />
        <XR>
          <Controllers />
          <Hands />
          <mesh>
            <sphereGeometry args={[0.2, 8, 8]} />
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

            {visibleItem === "mod2" && <Ayanami position={[0, 0, 0.4]} rotation={[0, -0.6, 0]} scale={[reiBaseScale, reiBaseScale, reiBaseScale]} dissolveVisible={itemsDisplayed === "mod2"} onFadeOut={onFadeOut} />}

            {visibleItem === "rei" && <Ayanami position={[0, 0, 0.4]} rotation={[0, -0.6, 0]} scale={[reiBaseScale, reiBaseScale, reiBaseScale]} dissolveVisible={itemsDisplayed === "rei"} onFadeOut={onFadeOut} />}
          </mesh>
        </XR>
      </Canvas>
    </>
  );
}
