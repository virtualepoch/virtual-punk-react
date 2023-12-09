import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import texture from "../../assets/images/torus/future-machine-512.jpg";

export const RabbitHole = ({position}) => {
  const cylinder = useRef();
  const map = useLoader(THREE.TextureLoader, texture);
  map.repeat.set(4, 4);
  map.wrapS = map.wrapT = THREE.RepeatWrapping;

  useFrame(() => {
    cylinder.current
      ? (cylinder.current.rotation.y -= 0.0006)
      : (cylinder.current.rotation.z += 0);
  });

  return (
    <mesh
      ref={cylinder}
      position={position}
      rotation={[Math.PI / -2, Math.PI / 4, 0]}
    >
      <cylinderGeometry args={[5, 5, 100, 3, 1, true]} />
      {/* <meshBasicMaterial color={"aqua"} wireframe={true} /> */}
      <meshBasicMaterial
        map={map}
        side={THREE.BackSide}
        // transparent
        // opacity={0.7}
      />
    </mesh>
  );
};
