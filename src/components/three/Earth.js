import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import earth500 from "../../assets/images/textures/earth_clouds_1k.jpg";
import earth8k from "../../assets/images/textures/earth_clouds_4k.jpg";
import { useRef } from "react";

export const Earth = () => {
  function textureChanger() {
    if (window.innerWidth < 700) {
      return earth500;
    } else {
      return earth8k;
    }
  }

  const texture = useLoader(THREE.TextureLoader, textureChanger());
  const earthRef = useRef(null);

  useFrame(() => {
    earthRef.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={earthRef} position={[0, -10, -64]}>
      <sphereGeometry args={[3, 10, 10]} />
      <meshPhongMaterial map={texture} />
    </mesh>
  );
};
