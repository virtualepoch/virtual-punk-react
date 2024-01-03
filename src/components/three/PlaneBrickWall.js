import { Plane, useTexture } from "@react-three/drei";

export const PlaneBrickWall = (
  props,
  { displacementScale, aoMapIntensity, roughness }
) => {
  const textures = useTexture({
    map: "/textures/brick-white/Brick_Wall_015_COLOR.jpg",
    aoMap: "/textures/brick-white/Brick_Wall_015_OCC.jpg",
    displacementMap: "/textures/brick-white/Brick_Wall_015_DISP.png",
    roughnessMap: "/textures/brick-white/Brick_Wall_015_ROUGH.jpg",
    normalMap: "/textures/brick-white/Brick_Wall_015_NORM.jpg",
  });

  return (
    <Plane {...props}>
      <meshStandardMaterial
        {...textures}
        displacementScale={displacementScale}
        aoMapIntensity={aoMapIntensity}
        roughness={roughness}
      />
    </Plane>
  );
};
