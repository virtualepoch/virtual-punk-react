import React, { useRef } from "react";
import * as THREE from "three";
import {
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Stars,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { useFrame } from "@react-three/fiber";

export const TestScene = () => {
  const PlaneFloor = ({ performance }) => {
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

    const repeatX = 5;
    const repeatY = 5;

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

    return (
      <Plane args={[10, 10]} position={[0, 0, 0]}>
        <meshStandardMaterial {...textures} />
      </Plane>
    );
  };

  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  const pointLight = useRef();
  // useHelper(pointLight, THREE.PointLightHelper, 1, "blue");

  const pointLight2 = useRef();
  // useHelper(pointLight2, THREE.PointLightHelper, 1, "blue");

  const pointLight3 = useRef();
  // useHelper(pointLight3, THREE.PointLightHelper, 1, "blue");

  const pointLight4 = useRef();
  // useHelper(pointLight4, THREE.PointLightHelper, 1, "blue");


  const lightPlane = useRef();
  const clock = new THREE.Clock();
  useFrame(() => {
    const a = clock.getElapsedTime();
    lightPlane.current.rotation.z += 0.01;
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />

      <OrbitControls
        minDistance={0}
        maxDistance={20}
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

      <Plane ref={lightPlane} args={[5, 5]} position={[0, 0, 0.7]}>
        <meshBasicMaterial transparent wireframe />
        <pointLight ref={pointLight} intensity={5} position={[0, 3, 0]} />
        <pointLight ref={pointLight2} intensity={5} position={[0, -3, 0]} />
        <pointLight ref={pointLight3} intensity={5} position={[-3, 0, 0]} />
        <pointLight ref={pointLight4} intensity={5} position={[3, 0, 0]} />
      </Plane>

      <Stars />

      <PlaneFloor />
    </>
  );
};
