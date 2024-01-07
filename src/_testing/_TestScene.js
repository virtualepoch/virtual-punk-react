import React, { useRef } from "react";
import * as THREE from "three";
import {
  Box,
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Sphere,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { useFrame } from "@react-three/fiber";
import { WaterOne } from "../components/three/WaterOne";
import { Atom } from "../components/three/Atom";

export const TestScene = () => {
  const BoxTextureTest = ({ performance, position }) => {
    const textures = useTexture({
      map: `${
        performance < 2
          ? "/textures/metal-futuristic-grid/baseColor.png"
          : "/textures/metal-futuristic-grid/baseColor.png"
      }`,
      displacementMap: `${
        performance < 2
          ? "/textures/metal-futuristic-grid/height.png"
          : "/textures/metal-futuristic-grid/height.png"
      }`,
      roughnessMap: `${
        performance < 2
          ? "/textures/metal-futuristic-grid/roughness.png"
          : "/textures/metal-futuristic-grid/roughness.png"
      }`,
      metalnessMap: `${
        performance < 2
          ? "/textures/metal-futuristic-grid/metallic.png"
          : "/textures/metal-futuristic-grid/metallic.png"
      }`,
      normalMap: `${
        performance < 2
          ? "/textures/metal-futuristic-grid/normal.png"
          : "/textures/metal-futuristic-grid/normal.png"
      }`,
      alphaMap: `${
        performance < 2
          ? "/textures/metal-futuristic-grid/opacity.png"
          : "/textures/metal-futuristic-grid/opacity.png"
      }`,
    });

    const repeat = 4;
    const repeatX = repeat * 2;
    const repeatY = repeat;

    textures.map.repeat.set(repeatX, repeatY);
    textures.map.wrapS = textures.map.wrapT = THREE.RepeatWrapping;

    textures.displacementMap.repeat.set(repeatX, repeatY);
    textures.displacementMap.wrapS = textures.displacementMap.wrapT =
      THREE.RepeatWrapping;

    textures.roughnessMap.repeat.set(repeatX, repeatY);
    textures.roughnessMap.wrapS = textures.roughnessMap.wrapT =
      THREE.RepeatWrapping;

    textures.metalnessMap.repeat.set(repeatX, repeatY);
    textures.metalnessMap.wrapS = textures.metalnessMap.wrapT =
      THREE.RepeatWrapping;

    textures.normalMap.repeat.set(repeatX, repeatY);
    textures.normalMap.wrapS = textures.normalMap.wrapT = THREE.RepeatWrapping;

    textures.alphaMap.repeat.set(repeatX, repeatY);
    textures.alphaMap.wrapS = textures.alphaMap.wrapT = THREE.RepeatWrapping;

    const sphere = useRef();
    useFrame((state, delta) => {
      sphere.current.position.y =
        -5 + Math.sin(state.clock.elapsedTime * 2) * 5;
      sphere.current.rotation.x =
        sphere.current.rotation.y =
        sphere.current.rotation.z +=
          delta;
    });

    const box = useRef();
    useFrame((state, delta) => {
      box.current.position.y = -5 + Math.sin(state.clock.elapsedTime * 2) * 5;
      box.current.rotation.x =
        box.current.rotation.y =
        box.current.rotation.z +=
          delta;
    });

    return (
      <>
        <group ref={sphere} position={[-7, 0, -25]}>
          <Sphere args={[4, 32, 32]}>
            <meshStandardMaterial color="cyan" {...textures} />
          </Sphere>
          <Atom scale={5} lightIntensity={5} />
        </group>

        <group ref={box} position={[7, 0, -25]}>
          <Box args={[8, 8, 8]}>
            <meshStandardMaterial color="cyan" {...textures} />
          </Box>
          <Atom scale={5} lightIntensity={5} />
        </group>
      </>
    );
  };

  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  return (
    <>
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

      <BoxTextureTest />
    </>
  );
};
