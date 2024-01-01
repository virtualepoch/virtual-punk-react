import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

export const BgSphere = (props, { args, texture, wrapY = 1, wrapX = 1 }) => {
  const map = useLoader(THREE.TextureLoader, texture);
  map.repeat.set(wrapY, wrapX);
  map.wrapS = map.wrapT = THREE.RepeatWrapping;

  return (
    <Sphere args={args} {...props}>
      <meshBasicMaterial map={map} side={THREE.BackSide} />
    </Sphere>
  );
};
