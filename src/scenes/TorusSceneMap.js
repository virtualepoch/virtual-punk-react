import * as THREE from "three";
import { Plane, useTexture } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

// COMPONENTS
import { MegaWyvern } from "../components/models/MegaWyvern";
import { FloatingIslandPortal } from "../components/models/FloatingIslandPortal";
import { DragonFantasy } from "../components/models/DragonFantasy";
import { TempleOfLight } from "../components/models/TempleOfLight";

export const TorusSceneMap = ({ sceneMap, performanceLevel }) => {
  const textures = useTexture({
    map: `${
      performanceLevel < 2
        ? "/textures/moss-rock/baseColor-1024.jpg"
        : "/textures/moss-rock/baseColor.jpg"
    }`,
    displacementMap: `${
      performanceLevel < 2
        ? "/textures/moss-rock/height-1024.jpg"
        : "/textures/moss-rock/height.jpg"
    }`,
    roughnessMap: `${
      performanceLevel < 2
        ? "/textures/moss-rock/roughness-1024.jpg"
        : "/textures/moss-rock/roughness.jpg"
    }`,
    metalnessMap: `${
      performanceLevel < 2
        ? "/textures/moss-rock/metallic-16.jpg"
        : "/textures/moss-rock/metallic.jpg"
    }`,
    normalMap: `${
      performanceLevel < 2
        ? "/textures/moss-rock/normal-1024.jpg"
        : "/textures/moss-rock/normal.jpg"
    }`,
    alphaMap: `${
      performanceLevel < 2
        ? "/textures/moss-rock/opacity-16.jpg"
        : "/textures/moss-rock/opacity.jpg"
    }`,
  });

  const repeatX = 10;
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

  textures.alphaMap.repeat.set(repeatX, repeatY);
  textures.alphaMap.wrapS = textures.alphaMap.wrapT = THREE.RepeatWrapping;

  const TempleIsland = (props) => {
    return (
      <group {...props}>
        <DragonFantasy scale={3} position={[0, 5, 2]} />
        <FloatingIslandPortal />
        <TempleOfLight
          position={[0, 5, 0]}
          rotation={[0, -0.3, 0]}
          scale={1.2}
        />
      </group>
    );
  };

  return (
    <group ref={sceneMap} position={[0, -5, 0]}>
      <Plane
        args={[60, 60]}
        position={[-10, -20, -30]}
        rotation-y={Math.PI / 2}
      >
        <meshStandardMaterial {...textures} />
      </Plane>

      <Plane args={[60, 60]} position={[10, -20, -30]} rotation-y={Math.PI / 2}>
        <meshStandardMaterial {...textures} side={THREE.BackSide} />
      </Plane>

      <MegaWyvern
        scale={4}
        position={[-7, -5, -120]}
        rotation-y={degToRad(35)}
      />

      <TempleIsland position={[0, -70, -220]} scale={10} />
    </group>
  );
};
