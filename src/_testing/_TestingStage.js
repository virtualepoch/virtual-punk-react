import { useEffect, useRef } from "react";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import { useFrame } from "@react-three/fiber";
import {
  GradientTexture,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Sphere,
  useHelper,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { ReflectiveFloor } from "../components/three/ReflectiveFloor";
import { MedievalSciFiPillar } from "../components/models/MedievalSciFiPillar";
// COMPONENTS

export const TestingStage = () => {
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1, "red");
  const pointLight = useRef();
  useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  const material = new THREE.MeshStandardMaterial({
    color: "silver",
    toneMapped: false,
  });

  const cam = useRef();
  // const clock = new THREE.Clock();
  useFrame(() => {
    // const a = clock.getElapsedTime();
    if (cam.current) {
      // cam.current.position.z += 1;
    }
    pointLight.current.rotation.y += 0.01;
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} ref={cam}>
        <OrbitControls />
      </PerspectiveCamera>

      <group>
        <directionalLight
          ref={directionalLight}
          position={[-2, 4, 2]}
          intensity={2}
        />
        <pointLight ref={pointLight} position={[0, -1, 0]} intensity={2} />

        <Sphere args={[40, 8, 8]} rotation={[0, 0, 0]} position={[0, 1, -10]}>
          <meshBasicMaterial side={THREE.BackSide}>
            <GradientTexture
              stops={[0, 0.5, 1]}
              colors={["#009b9b", "#ff00ff", "#009b9b"]}
              size={10}
            />
          </meshBasicMaterial>
        </Sphere>
        <MedievalSciFiPillar position={[-10, -3.6, 0]} />
        <MedievalSciFiPillar position={[10, -3.6, 0]} />
        <MedievalSciFiPillar position={[-5, -3.6, -10]} />
        <MedievalSciFiPillar position={[5, -3.6, -10]} />
        <ReflectiveFloor />
      </group>
    </>
  );
};
