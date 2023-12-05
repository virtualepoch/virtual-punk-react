import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export const BgSphere = ({
  bgState,
  bgImage1,
  bgImage2,
  bgImage3,
  bgWrapY,
  bgWrapX,
}) => {
  const bgTexture = useLoader(
    THREE.TextureLoader,
    bgState === 1 ? bgImage1 : bgState === 2 ? bgImage2 : bgImage3
  );
  bgTexture.repeat.set(bgWrapY, bgWrapX);
  bgTexture.wrapS = bgTexture.wrapT = THREE.RepeatWrapping;
  return (
    <mesh position={[0, 0, 0]} rotation={[0, 1.6, 0]}>
      <sphereGeometry args={[10, 40, 20]} />
      {bgState === 0 ? (
        <meshStandardMaterial />
      ) : (
        <meshStandardMaterial map={bgTexture} side={THREE.BackSide} />
      )}
    </mesh>
  );
};
