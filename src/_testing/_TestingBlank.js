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
import { TorusSceneMap } from "../scenes/TorusSceneMap";

export const TestingBlank = () => {
  const directionalLight2 = useRef();
  useHelper(directionalLight2, DirectionalLightHelper, 1, "blue");
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1, "red");
  const pointLight = useRef();
  useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  const controls = useRef();
  const target = useRef();
  const val = useRef();
  useFrame(() => {
    // controls.current.setLookAt(
    //   target.current.position.x,
    //   target.current.position.y,
    //   target.current.position.z,
    //   true
    // );
  });

  return (
    <>
      <group>
        <PerspectiveCamera makeDefault position={[0, 0, 10]}>
          <CameraControls ref={controls} />
        </PerspectiveCamera>
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
        {/* <pointLight ref={pointLight} position={[0, 0, 1]} intensity={2} /> */}
        <TorusSceneMap target={target} />

        {/* <Ocean position={[0, -10, 0]} /> */}
      </group>
    </>
  );
};
