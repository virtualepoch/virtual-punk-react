import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

import bg from "../../assets/images/realistic_wireframe_matrix.jpg";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Ayanami } from "../dissolve/Ayanami";
import { Xuxa } from "./Xuxa";
import { Witch, WitchDaphne } from "./Witch";
import { DissolveMaterial } from "../dissolve/DissolveMaterial";
import { useControls } from "leva";

import floorTexture1 from "../../assets/images/brick-textures/Brick_Wall_015_OCC.jpg";
import floorTexture2 from "../../assets/images/brick-textures/Brick_Wall_015_COLOR.jpg";
import { Godzilla } from "./Godzilla";

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
  const textures = useLoader(THREE.TextureLoader, floorTexture2);
  return (
    <>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial map={textures} />
      </mesh>
    </>
  );
}

const reiBaseScale = 0.01;

export function VR() {
  const { itemsDisplayed } = useControls({
    itemsDisplayed: {
      value: "rei",
      options: ["zilla", "xuxa", "rei", "witch"],
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
            {visibleItem === "zilla" && <Godzilla position={[0, 0, -7]} rotation={[0, -0.6, 0]} scale={0.02} dissolveVisible={itemsDisplayed === "zilla"} onFadeOut={onFadeOut} />}

            {visibleItem === "xuxa" && <Xuxa position={[0, 0, 0.4]} rotation={[0, -0.6, 0]} scale={0.7} dissolveVisible={itemsDisplayed === "xuxa"} onFadeOut={onFadeOut} />}

            {visibleItem === "rei" && <Ayanami position={[0, 0, 0.4]} rotation={[0, -0.6, 0]} scale={[reiBaseScale, reiBaseScale, reiBaseScale]} dissolveVisible={itemsDisplayed === "rei"} onFadeOut={onFadeOut} />}

            {visibleItem === "witch" && <Witch position={[0, 1.2, 0.4]} rotation={[0, 0, 0]} scale={0.05} dissolveVisible={itemsDisplayed === "witch"} onFadeOut={onFadeOut} />}
          </mesh>
        </XR>
      </Canvas>
    </>
  );
}
