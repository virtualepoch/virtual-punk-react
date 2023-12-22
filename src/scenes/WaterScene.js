import { useRef } from "react";
import * as THREE from "three";
import { Float, Stars, useHelper } from "@react-three/drei";
import textureSm from "../assets/images/textures/earth_clouds_1k.jpg";
import textureLg from "../assets/images/textures/earth_clouds_4k.jpg";

// THREE COMPONENTS
import { Ocean } from "../components/three/Ocean";
import { Globe } from "../components/three/Globe";
import { DirectionalLightHelper } from "three";
import { useLoader } from "@react-three/fiber";

export const WaterScene = ({ performance }) => {
  const light = useRef();
  useHelper(light, DirectionalLightHelper, 1, "red");

  const texture = useLoader(
    THREE.TextureLoader,
    performance === 0 ? textureSm : textureLg
  );

  return (
    <>
      <ambientLight intensity={1} />
      <Stars />
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
        <Globe performance={performance} texture={texture} />
      </Float>
      <Ocean position={[0, -10, 0]} sunColor={"white"} waterColor={"red"} />
    </>
  );
};
