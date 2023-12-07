import { useRef } from "react";
import * as THREE from "three";
import { useHelper } from "@react-three/drei";

import { RabbitHole } from "../components/three/RabbitHole";

export const IntroScene = () => {
  // const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  return (
    <>
      <ambientLight intensity={1} position={[0, 0, 0]} />
      <directionalLight
        // ref={directionalLight}
        position={[1, 1, 1]}
        angle={0.3}
      />
      <RabbitHole />
    </>
  );
};
