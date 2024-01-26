import React, { useRef } from "react";
import * as THREE from "three";
import {
  Float,
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Sphere,
  useHelper,
} from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { WaterOne } from "../components/three/WaterOne";
import earth1k from "../assets/basic-textures/earth_clouds_1k.jpg";
import earth4k from "../assets/basic-textures/earth_clouds_4k.jpg";
import { TestSphereTexture } from "../components/_testing/test-components/TestSphereTexture";
import { Text3dTest } from "../components/_testing/test-components/Text3dTest";
import { TestSphereTextureStone } from "../components/_testing/test-components/TestSphereTextureStone";

export const TestScene = ({ performanceLevel }) => {
  const Earth = () => {
    const texture = useLoader(
      THREE.TextureLoader,
      performance > 0 ? earth4k : earth1k
    );

    const earth = useRef();
    useFrame(() => {
      earth.current.rotation.y += 0.01;
    });

    return (
      <Sphere ref={earth} args={[30, 16, 16]} position={[-50, 50, -300]}>
        <meshPhongMaterial map={texture} />
      </Sphere>
    );
  };
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");
  ///////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Text3dTest />
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />

      <OrbitControls
        minDistance={0}
        maxDistance={2000}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 4}
      />

      <ambientLight intensity={1} />

      <directionalLight
        ref={directionalLight}
        intensity={5}
        position={[-4, 8, 4]}
      />

      <WaterOne position={[0, -10, 0]} />

      <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />

      <TestSphereTexture position={[10, 0, -50]} />
      <TestSphereTextureStone position={[0, -2, -10]} />

      <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={0.1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[10, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Earth />
      </Float>
    </>
  );
};
