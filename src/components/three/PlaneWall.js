import { Plane, useTexture } from "@react-three/drei";

export const PlaneWall = (props) => {
  const textures = useTexture({
    map: "/textures/metal-screen-orange/baseColor.png",
    displacementMap: "/textures/metal-screen-orange/height.png",
    roughnessMap: "/textures/metal-screen-orange/roughness.png",
    metalnessMap: "/textures/metal-screen-orange/metallic.png",
    normalMap: "/textures/metal-screen-orange/normal.png",
    alphaMap: "/textures/metal-screen-orange/opacity.png",
  });

  return (
    <Plane {...props}>
      <meshStandardMaterial {...textures} transparent />
    </Plane>
  );
};
