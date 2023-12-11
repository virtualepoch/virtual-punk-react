import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import texture from "../../assets/images/torus/future-machine-512.jpg";

export const RabbitHole = ({ position }) => {
  const map = useLoader(THREE.TextureLoader, texture);
  map.repeat.set(4, 4);
  map.wrapS = map.wrapT = THREE.RepeatWrapping;

  return (
    <mesh position={position} rotation={[Math.PI / -2, 0, 0]}>
      <cylinderGeometry args={[5, 5, 100, 3, 1, true]} />
      <meshBasicMaterial
        map={map}
        side={THREE.BackSide}
        // color={"aqua"}
        // wireframe={true}
        // transparent
        // opacity={0.7}
      />
    </mesh>
  );
};
