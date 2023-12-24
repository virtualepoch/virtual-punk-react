import { useRef } from "react";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import { useFrame } from "@react-three/fiber";
import { useHelper, PerspectiveCamera, OrbitControls } from "@react-three/drei";
// COMPONENTS
import { Ocean } from "../components/three/Ocean";
import { TorusSceneMap } from "../scenes/TorusSceneMap";

export const TestingBlank = () => {
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1, "red");
  const pointLight = useRef();
  useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  return (
    <>
      <group>
        <PerspectiveCamera makeDefault position={[0, 0, 10]}>
          <OrbitControls />
        </PerspectiveCamera>
        <directionalLight
          ref={directionalLight}
          position={[-2, 4, 2]}
          intensity={2}
        />
        <pointLight ref={pointLight} position={[0, -1, 0]} intensity={2} />
        <TorusSceneMap />
        {/* <Ocean position={[0, -10, 0]} /> */}
      </group>
    </>
  );
};
