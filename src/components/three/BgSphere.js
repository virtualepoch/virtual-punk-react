import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

export const BgSphere = ({
  radius = 100,
  widthSegments = 8,
  heightSegments = 8,
  position,
  rotation,
  bgImage,
  bgWrapY = 1,
  bgWrapX = 1,
}) => {
  const map = useLoader(THREE.TextureLoader, bgImage);
  map.repeat.set(bgWrapY, bgWrapX);
  map.wrapS = map.wrapT = THREE.RepeatWrapping;

  return (
    <Sphere
      args={[radius, widthSegments, heightSegments]}
      position={position}
      rotation={rotation}
    >
      <meshBasicMaterial map={map} side={THREE.BackSide} />
    </Sphere>
  );
};
