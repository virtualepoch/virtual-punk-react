import * as THREE from "three";
import { Sphere, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Atom } from "../../components/three/Atom";

export const SphereTextureTest = ({ performance, position }) => {
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

    return (
      <group ref={sphere} position={[50, 0, -100]}>
        <Sphere args={[4, 32, 32]}>
          <meshStandardMaterial color="cyan" {...textures} />
        </Sphere>
        <Atom scale={5} lightIntensity={5} />
      </group>
    );
  };