import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import textureSm from "../../assets/images/rabbit-hole/future-machine-1024.jpg";
import textureMed from "../../assets/images/rabbit-hole/future-machine-2048.jpg";
import { Cylinder } from "@react-three/drei";

export const RabbitHole = ({ position, downgradedPerformance }) => {
  const texture = useLoader(
    THREE.TextureLoader,
    downgradedPerformance ? textureSm : textureMed
  );
  texture.repeat.set(3, 15);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <Cylinder
      args={[5, 5, 100, 3, 1, true]}
      position={position}
      rotation={[Math.PI / -2, 0, 0]}
    >
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </Cylinder>
  );
};
