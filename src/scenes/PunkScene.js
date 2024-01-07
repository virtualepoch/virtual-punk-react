import { useRef } from "react";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import { useLoader } from "@react-three/fiber";
import { Float, Sphere, Stars, useHelper } from "@react-three/drei";

// THREE COMPONENTS
import { Ocean } from "../components/three/Ocean";
import earth1k from "../assets/images/textures/earth_clouds_1k.jpg";
import earth4k from "../assets/images/textures/earth_clouds_4k.jpg";

export const PunkScene = ({ performance }) => {
  const light = useRef();
  useHelper(light, DirectionalLightHelper, 1, "red");

  function Earth() {
    const texture = useLoader(
      THREE.TextureLoader,
      performance > 0 ? earth4k : earth1k
    );

    return (
      <Sphere args={[3, 16, 16]} position={[0, -10, -64]}>
        <meshPhongMaterial map={texture} />
      </Sphere>
    );
  }

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        ref={light}
        position={[0, 15, -10]}
        intensity={1}
        color="white"
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

      <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={0.1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[10, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Earth />
      </Float>

      <Ocean position={[0, -10, 0]} sunColor={"white"} waterColor={"red"} />
      
      <Stars />
    </>
  );
};
