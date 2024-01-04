import { Plane, useTexture } from "@react-three/drei";

export const PlaneFloor = (props) => {
  const textures = useTexture({
    map: "/textures/tile-green/baseColor.png",
    displacementMap: "/textures/tile-green/height.png",
    roughnessMap: "/textures/tile-green/roughness.png",
    metalnessMap: "/textures/tile-green/metallic.png",
    normalMap: "/textures/tile-green/normal.png",
  });

  return (
    <Plane {...props}>
      <meshStandardMaterial {...textures} />
    </Plane>
  );
};
