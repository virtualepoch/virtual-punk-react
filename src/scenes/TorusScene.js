import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { TorusSceneGroup } from "../components/three/TorusSceneGroup";
import { Globe } from "../components/three/Globe";
// import textureSm from "../assets/images/textures/hex-100.jpg"
// import textureLg from "../assets/images/textures/hex-100.jpg"
// import textureSm from "../assets/images/textures/Tile_04-512x512.png";
import textureLg from "../assets/images/textures/Tile_04-512x512.png";
import { DragonFlying } from "../components/models/DragonFlying";

export const TorusScene = ({ performance }) => {
  const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  const texture = useLoader(
    THREE.TextureLoader,
    // performance === 0 ? textureSm :
    textureLg
  );
  const textureMult = 128;
  texture.repeat.set(32 * textureMult, 16 * textureMult);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  const torusGroup = useRef();
  // const clock = new THREE.Clock();
  useFrame(() => {
    // const a = clock.getElapsedTime();
    torusGroup.current.position.z -=
      torusGroup.current.position.z > -6 ? 0.02 : 0;
  });

  return (
    <group>
      <ambientLight intensity={1} />
      <directionalLight
        ref={directionalLight}
        intensity={10}
        position={[-1, 2, 4]}
      />
      {/* <pointLight ref={pointLight} position={[-4, 15, 10]} intensity={1}/> */}
      <DragonFlying position={[0, -0.7, 0]} />
      <Globe
        args={[512, 256, 256]}
        position={[0, -511.5, -50]}
        rotation={[0, 0, Math.PI / 2]}
        performance={performance}
        texture={texture}
      />
      <group ref={torusGroup} position={[0, 0, 0]}>
        <TorusSceneGroup />
      </group>
    </group>
  );
};
