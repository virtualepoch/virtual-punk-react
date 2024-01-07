import { Plane, useTexture } from "@react-three/drei";

export const PlaneWall = ({ args, position, rotY, performance }) => {
  const textures = useTexture({
    map: `${
      performance < 2
        ? "/textures/metal-screen-orange/baseColor-1024.png"
        : "/textures/metal-screen-orange/baseColor.png"
    }`,
    displacementMap: `${
      performance < 2
        ? "/textures/metal-screen-orange/height-1024.png"
        : "/textures/metal-screen-orange/height.png"
    }`,
    roughnessMap: `${
      performance < 2
        ? "/textures/metal-screen-orange/roughness-1024.png"
        : "/textures/metal-screen-orange/roughness.png"
    }`,
    metalnessMap: `${
      performance < 2
        ? "/textures/metal-screen-orange/metallic-1024.png"
        : "/textures/metal-screen-orange/metallic.png"
    }`,
    normalMap: `${
      performance < 2
        ? "/textures/metal-screen-orange/normal-1024.png"
        : "/textures/metal-screen-orange/normal.png"
    }`,
    alphaMap: `${
      performance < 2
        ? "/textures/metal-screen-orange/opacity-1024.png"
        : "/textures/metal-screen-orange/opacity.png"
    }`,
  });

  return (
    <Plane args={args} position={position} rotation-y={rotY}>
      <meshStandardMaterial {...textures} transparent />
    </Plane>
  );
};
