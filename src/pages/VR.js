import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

import bg from "../assets/images/realistic_wireframe_matrix.jpg";
import { ContactShadows, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { Ayanami } from "./dissolve/Ayanami";
import { DissolveMaterial } from "./dissolve/DissolveMaterial";
import { useControls } from "leva";

const boxMaterial = new THREE.MeshStandardMaterial({ color: "white" });
const sphereMaterial = new THREE.MeshStandardMaterial({ color: "white" });

const BackDrop = () => {
  const map = useLoader(THREE.TextureLoader, bg);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.000;
  });

  return (
    <mesh position={[0, 3, 0]} rotation={[0, 1.6, 0]} ref={ref}>
      <sphereGeometry args={[20, 20, 20]} />
      <meshStandardMaterial map={map} side={THREE.BackSide} />
    </mesh>
  );
};

function Ground() {
  return (
    <>
      <mesh position={[0, -1.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <MeshReflectorMaterial blur={[400, 400]} resolution={1024} mixBlur={0.3} mixStrength={15} depthScale={1} minDepthThreshold={0.85} color="#dbecfb" metalness={0.9} />
      </mesh>
    </>
  );
}

const reiBaseScale = 0.016;

export function VR() {
  // const { itemsDisplayed } = useControls({
  //   itemsDisplayed: {
  //     value: "rei",
  //     options: ["box", "sphere", "rei"],
  //   },
  // });

  // const [visibleItem, setVisibleItem] = useState(itemsDisplayed);
  // const onFadeOut = () => setVisibleItem(itemsDisplayed);

  return (
    <>
      <VRButton />
      <Canvas shadows camera={{ position: [0, 0, 2], rotation: [0, 0, 0], fov: 50 }}>
        <OrbitControls />
        <ambientLight intensity={1} />
        <pointLight intensity={1} />
        <XR>
          <Controllers />
          <Hands />
          <mesh>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="red" />
          </mesh>
          <BackDrop />
          <Ground />

          <mesh position-z={-1}>
            {/* {visibleItem === "box" && (
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

            {visibleItem === "rei" && <Ayanami position={[0, -1.3, 0]} rotation={[0, -0.6, 0]} scale={[reiBaseScale, reiBaseScale, reiBaseScale]} dissolveVisible={itemsDisplayed === "rei"} onFadeOut={onFadeOut} />} */}

            <Ayanami position={[0, -1.3, 0]} rotation={[0, -0.6, 0]} scale={[reiBaseScale, reiBaseScale, reiBaseScale]} />
          </mesh>
          <ContactShadows opacity={0.7} position={[0, -1.29, 0]} />
        </XR>
      </Canvas>
    </>
  );
}
