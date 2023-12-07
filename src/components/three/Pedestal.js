import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import marbleLarge from "../assets/images/marble_large.jpg";
import marbleSmall from "../assets/images/marble_small.jpg";

export const Pedestal = () => {
  function textureChanger() {
    if (window.innerWidth < 700) {
      return marbleSmall;
    } else {
      return marbleLarge;
    }
  }
  const texture = useLoader(THREE.TextureLoader, textureChanger());
  return (
    <mesh position={[0, -6, 0]}>
      <cylinderGeometry args={[2, 5, 8, 3, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};
