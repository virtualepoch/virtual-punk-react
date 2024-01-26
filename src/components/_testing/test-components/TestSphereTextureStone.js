import * as THREE from "three";
import { Sphere, useHelper, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Atom } from "../../three/Atom";

export const TestSphereTextureStone = ({ position }) => {
  const textures = useTexture({
    map: "/textures/terra/albedo-512.jpg",
    displacementMap: "/textures/terra/albedo-512.jpg",
    roughnessMap: "/textures/terra/roughness-512.jpg",
    metalnessMap: "/textures/terra/albedo-512.jpg",
    normalMap: "/textures/terra/albedo-512.jpg",
    alphaMap: "/textures/terra/albedo-512.jpg",
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
    // sphere.current.position.y = -5 + Math.sin(state.clock.elapsedTime * 2) * 5;
    sphere.current.rotation.x =
    sphere.current.rotation.y =
    sphere.current.rotation.z +=
    delta;
  });
  
  
  const dLight = useRef();
  useHelper(dLight, THREE.DirectionalLightHelper, 1, "blue");

  return (
    <>
      <group  position={position}>
      <directionalLight ref={dLight} intensity={5} position={[-4, 8, 4]} />
        <Sphere ref={sphere} args={[4, 32, 32]}>
          <meshStandardMaterial {...textures} />
        </Sphere>
        <Atom scale={5} lightIntensity={5} />
      </group>
    </>
  );
};
