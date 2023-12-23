import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Sphere } from "@react-three/drei";

export const Globe = ({
  args = [3, 16, 16],
  position = [0, -10, -64],
  rotation,
  texture,
}) => {
  const sphere = useRef();

  const map = useLoader(
    THREE.TextureLoader,
    // performance === 0 ? textureSm :
    texture
  );

  // useFrame(() => {
  //   sphere.current.rotation.x += 0.00002;
  // });

  return (
    <Sphere ref={sphere} args={args} position={position} rotation={rotation}>
      <meshPhongMaterial map={map} />
    </Sphere>
  );
};
