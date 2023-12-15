import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import textureSm from "../../assets/images/rabbit-hole/future-machine-1024.jpg";
import textureMed from "../../assets/images/rabbit-hole/future-machine-2048.jpg";

export const RabbitHole = ({ position, downgradedPerformance }) => {
  const map = useLoader(
    THREE.TextureLoader,
    downgradedPerformance ? textureSm : textureMed
  );
  map.repeat.set(3, 15);
  map.wrapS = map.wrapT = THREE.RepeatWrapping;

  return (
    <mesh position={position} rotation={[Math.PI / -2, 0, 0]}>
      <cylinderGeometry args={[5, 5, 100, 3, 1, true]} />
      <meshBasicMaterial map={map} side={THREE.BackSide} />
    </mesh>
  );
};
