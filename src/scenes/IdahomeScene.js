import { useRef } from "react";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import { useHelper, PerspectiveCamera, OrbitControls } from "@react-three/drei";

// COMPONENTS
import { degToRad } from "three/src/math/MathUtils";
import { PoolMountains } from "../__idahome/PoolMountains";

export const IdahomeScene = ({ performance }) => {
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1, "red");

  const pointLight = useRef();
  useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  return (
    <>
      <group>
        <PerspectiveCamera makeDefault position={[0, 0, 0.5]} />
        <OrbitControls
          minDistance={0.1}
          maxDistance={1}
          minAzimuthAngle={degToRad(-30)}
          maxAzimuthAngle={degToRad(60)}
          maxPolarAngle={degToRad(100)}
          minPolarAngle={degToRad(70)}
        />

        <directionalLight
          ref={directionalLight}
          position={[-2, 3, 1]}
          intensity={3}
        />

        <pointLight ref={pointLight} position={[0, 1, 1]} intensity={2} />

        <PoolMountains position={[0, -1, 0]} rotation-y={degToRad(100)} />
      </group>
    </>
  );
};
