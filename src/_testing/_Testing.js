import { useEffect, useRef } from "react";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import { useFrame } from "@react-three/fiber";
import {
  useHelper,
  PerspectiveCamera,
  OrbitControls,
  CameraControls,
} from "@react-three/drei";
// COMPONENTS
import { Ocean } from "../components/three/Ocean";
import { PlaneFloor } from "../components/three/PlaneFloor";
import { degToRad } from "three/src/math/MathUtils";

export const Testing = ({ performance, vrSession }) => {
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1, "red");

  const directionalLight2 = useRef();
  useHelper(directionalLight2, DirectionalLightHelper, 1, "blue");
  
  const pointLight = useRef();
  useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  return (
    <>
      <group>
        <PerspectiveCamera
          makeDefault={vrSession ? false : true}
          position={[0, 4, 8]}
        />
        <OrbitControls />

        <directionalLight
          ref={directionalLight}
          position={[-2, 3, 1]}
          intensity={3}
        />

        <directionalLight
          ref={directionalLight2}
          position={[2, 1, -2]}
          intensity={3}
        />

        <pointLight ref={pointLight} position={[0, 1, 1]} intensity={2} />

        <PlaneFloor args={[5, 5]} rotX={degToRad(-70)} />
        <Ocean position={[0, -10, 0]} />
      </group>
    </>
  );
};
