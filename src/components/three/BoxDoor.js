import * as THREE from "three";
import { Plane, useTexture } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { useLoader } from "@react-three/fiber";

export const BoxDoor = ({ position, rotation, performance }) => {
  const textures = useTexture({
    map: `${
      performance < 2
        ? "/textures/space-cruiser-panels/albedo-512.png"
        : "/textures/space-cruiser-panels/albedo-1024.png"
    }`,
    displacementMap: `${
      performance < 2
        ? "/textures/space-cruiser-panels/height-512.png"
        : "/textures/space-cruiser-panels/height-1024.png"
    }`,
    roughnessMap: `${
      performance < 2
        ? "/textures/space-cruiser-panels/roughness-512.png"
        : "/textures/space-cruiser-panels/roughness-1024.png"
    }`,
    metalnessMap: `${
      performance < 2
        ? "/textures/space-cruiser-panels/ao-512.png"
        : "/textures/space-cruiser-panels/ao-1024.png"
    }`,
    normalMap: `${
      performance < 2
        ? "/textures/space-cruiser-panels/normal-512.png"
        : "/textures/space-cruiser-panels/normal-1024.png"
    }`,
  });

  const repeatX = 2;
  const repeatY = 5;
  
  textures.map.repeat.set(repeatX, repeatY);
  textures.map.wrapS = textures.map.wrapT = THREE.RepeatWrapping;

  textures.displacementMap.repeat.set(repeatX, repeatY);
  textures.displacementMap.wrapS = textures.displacementMap.wrapT =
    THREE.RepeatWrapping;

  textures.roughnessMap.repeat.set(repeatX, repeatY);
  textures.roughnessMap.wrapS = textures.roughnessMap.wrapT =
    THREE.RepeatWrapping;

  textures.metalnessMap.repeat.set(repeatX, repeatY);
  textures.metalnessMap.wrapS = textures.metalnessMap.wrapT =
    THREE.RepeatWrapping;

  textures.normalMap.repeat.set(repeatX, repeatY);
  textures.normalMap.wrapS = textures.normalMap.wrapT = THREE.RepeatWrapping;

  return (
    <group position={position} rotation={rotation}>
      <Plane args={[4, 10]} position={[-2.01, 5, 0]} rotation={[0, 0, 0]}>
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

      <Plane args={[4, 10]} position={[2.01, 5, 0]} rotation={[0, 0, 0]}>
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
