import { Box, Plane, useTexture } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

export const BoxDoor = ({ position, rotation, performance }) => {
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
    <group position={position} rotation={rotation}>
      <Plane args={[4, 10]} position={[-2.05, 5, 0]} rotation={[0, 0, 0]}>
        <meshStandardMaterial {...textures} />

        {/* LEFT */}
        <Plane
          args={[1, 10]}
          position={[-2, 0, -0.31]}
          rotation={[0, degToRad(-90), 0]}
          material-color="#330000"
        />

        {/* RIGHT */}
        <Plane
          args={[1, 10]}
          position={[2, 0, -0.31]}
          rotation={[0, degToRad(90), 0]}
          material-color="#330000"
        />

        {/* TOP */}
        <Plane
          args={[4, 1]}
          position={[0, 5, -0.31]}
          rotation={[degToRad(-90), 0, 0]}
          material-color="#330000"
        />
      </Plane>

      <Plane args={[4, 10]} position={[2.05, 5, 0]} rotation={[0, 0, 0]}>
        <meshStandardMaterial {...textures} />

        {/* LEFT */}
        <Plane
          args={[1, 10]}
          position={[-2, 0, -0.31]}
          rotation={[0, degToRad(-90), 0]}
          material-color="#330000"
        />

        {/* RIGHT */}
        <Plane
          args={[1, 10]}
          position={[2, 0, -0.31]}
          rotation={[0, degToRad(90), 0]}
          material-color="#330000"
        />

        {/* TOP */}
        <Plane
          args={[4, 1]}
          position={[0, 5, -0.31]}
          rotation={[degToRad(-90), 0, 0]}
          material-color="#330000"
        />
      </Plane>
    </group>
  );
};
