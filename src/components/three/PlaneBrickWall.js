import * as THREE from "three";
import { LinearEncoding } from "three";
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

  const repeatX = 4;
  const repeatY = 2;

  textures.map.repeat.set(repeatX, repeatY);
  textures.map.wrapS = textures.map.wrapT = THREE.RepeatWrapping;

  textures.aoMap.repeat.set(repeatX, repeatY);
  textures.aoMap.wrapS = textures.aoMap.wrapT = THREE.RepeatWrapping;

  textures.displacementMap.repeat.set(repeatX, repeatY);
  textures.displacementMap.wrapS = textures.displacementMap.wrapT =
    THREE.RepeatWrapping;

  textures.roughnessMap.repeat.set(repeatX, repeatY);
  textures.roughnessMap.wrapS = textures.roughnessMap.wrapT =
    THREE.RepeatWrapping;

  textures.normalMap.repeat.set(repeatX, repeatY);
  textures.normalMap.wrapS = textures.normalMap.wrapT = THREE.RepeatWrapping;

  return (
    <Plane {...props}>
      <meshStandardMaterial
        {...textures}
        normalMap-encoding={LinearEncoding}
        displacementScale={displacementScale}
        aoMapIntensity={aoMapIntensity}
        roughness={roughness}
      />
    </Plane>
  );
};
