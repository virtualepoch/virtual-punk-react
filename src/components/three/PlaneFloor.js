import { Plane, useTexture } from "@react-three/drei";

export const PlaneFloor = ({ args, position, rotX, performance }) => {
  const textures = useTexture({
    map: `${
      performance === 0
        ? "/textures/tile-green/baseColorLow.png"
        : performance === 2
        ? "/textures/tile-green/baseColor.png"
        : "/textures/tile-green/baseColorMed.png"
    }`,
    displacementMap: `${
      performance === 0
        ? "/textures/tile-green/heightLow.png"
        : performance === 2
        ? "/textures/tile-green/height.png"
        : "/textures/tile-green/heightMed.png"
    }`,
    roughnessMap: `${
      performance === 0
        ? "/textures/tile-green/roughnessLow.png"
        : performance === 2
        ? "/textures/tile-green/roughness.png"
        : "/textures/tile-green/roughnessMed.png"
    }`,
    metalnessMap: `${
      performance === 0
        ? "/textures/tile-green/metallicLow.png"
        : performance === 2
        ? "/textures/tile-green/metallic.png"
        : "/textures/tile-green/metallicMed.png"
    }`,
    normalMap: `${
      performance === 0
        ? "/textures/tile-green/normalLow.png"
        : performance === 2
        ? "/textures/tile-green/normal.png"
        : "/textures/tile-green/normalMed.png"
    }`,
  });

  return (
    <Plane args={args} position={position} rotation-x={rotX}>
      <meshStandardMaterial {...textures} />
    </Plane>
  );
};
