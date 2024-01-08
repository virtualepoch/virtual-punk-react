import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

// COMPONENTS
import { Atom } from "../components/three/Atom";
import { GridCity } from "../components/models/GridCity";

export const PunkScene = () => {
  const TextureTest = ({ performance }) => {
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
    const repeatX = repeat;
    const repeatY = repeat / 2;

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

    return (
      <>
        <group ref={sphere} position={[0, 0, -40]}>
          <Sphere args={[3, 16, 16]}>
            <meshStandardMaterial color={0xff2255} {...textures} />
          </Sphere>
          <Atom scale={3.7} lightIntensity={5} />
        </group>
      </>
    );
  };

  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "white");

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 1]} />

      <OrbitControls
        minDistance={0.1}
        maxDistance={2}
        minAzimuthAngle={degToRad(-60)}
        maxAzimuthAngle={degToRad(60)}
        maxPolarAngle={degToRad(100)}
        minPolarAngle={degToRad(70)}
      />

      <ambientLight intensity={1} />

      <directionalLight
        ref={directionalLight}
        intensity={5}
        position={[-3, 0, 8]}
        color="#77ffff"
        castShadow
        shadow-camera-near={0}
        shadow-camera-far={100}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      <GridCity scale={20} position={[100, 1700, 0]} />

      <TextureTest />
    </>
  );
};
