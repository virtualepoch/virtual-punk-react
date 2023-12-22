import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Sphere } from "@react-three/drei";

export const Globe = ({
  args = [3, 16, 16],
  position = [0, -10, -64],
  texture,
  rotation,
}) => {
  const sphere = useRef();

  useFrame(() => {
    sphere.current.rotation.x += 0.00002;
  });

  return (
    <Sphere ref={sphere} args={args} position={position} rotation={rotation}>
      <meshPhongMaterial map={texture} />
    </Sphere>
  );
};
