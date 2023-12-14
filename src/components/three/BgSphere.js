import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

export const BgSphere = ({
  radius,
  widthSegments,
  heightSegments,
  position,
  rotation,
  bgImage,
  bgWrapY,
  bgWrapX,
}) => {
  const bgTexture = useLoader(THREE.TextureLoader, bgImage);
  bgTexture.repeat.set(bgWrapY, bgWrapX);
  bgTexture.wrapS = bgTexture.wrapT = THREE.RepeatWrapping;

  return (
    <Sphere
      args={[radius, widthSegments, heightSegments]}
      position={position}
      rotation={rotation}
    >
      <meshStandardMaterial map={bgTexture} side={THREE.BackSide} />
    </Sphere>
  );
};
