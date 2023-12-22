import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { TorusSceneGroup } from "../components/three/TorusSceneGroup";
import { Globe } from "../components/three/Globe";
// import textureSm from "../assets/images/textures/hex-100.jpg"
// import textureLg from "../assets/images/textures/hex-100.jpg"
// import textureSm from "../assets/images/textures/Tile_04-512x512.png";
import textureLg from "../assets/images/textures/Tile_04-512x512.png";
import { DragonFlying } from "../components/models/DragonFlying";
import { Box, Cloud, Clouds } from "@react-three/drei";
import { ShadowDragon } from "../components/models/ShadowDragon";
import gsap from "gsap";

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
  const shadowDragon = useRef();
  const clock = new THREE.Clock();
  useFrame(() => {
    const a = clock.getElapsedTime();
    torusGroup.current.position.z -=
      torusGroup.current.position.z > -6 ? 0.02 : 0;
    torusGroup.current.position.y += a >= 4 ? 0.1 : 0;
    torusGroup.current.rotation.y += a >= 4 ? 0.3 : a >= 8 ? 0 : 0;
  });

  useEffect(() => {
    var tl = gsap.timeline({ repeat: 1, repeatDelay: 1 });
    tl.to(shadowDragon.current.position, { z: -3, duration: 9 });
    tl.to(shadowDragon.current.position, { z: -3, duration: 2 });
    tl.to(shadowDragon.current.position, { z: 5, duration: 1 });
    tl.to(shadowDragon.current.position, { z: -20, duration: 10 });
    // tl.pause();
    // tl.resume();
    // tl.seek(1.5);
    // tl.reverse();
  });

  return (
    <group>
      <ambientLight intensity={1} />
      <directionalLight
        ref={directionalLight}
        intensity={10}
        position={[-1, 2, 4]}
      />
      {performance === 2 && (
        <Clouds limit={100}>
          <Cloud
            seed={10}
            fade={30}
            speed={0.1}
            growth={4}
            segments={20}
            volume={6}
            opacity={0.6}
            bounds={[4, 3, 1]}
            color={"blue"}
          />
          <Cloud
            seed={20}
            fade={30}
            position={[0, 1, 0]}
            speed={0.5}
            growth={4}
            volume={10}
            opacity={1}
            bounds={[6, 2, 1]}
            color={"red"}
          />
          <pointLight position={[0, 0, 0.5]} color="blue" />
        </Clouds>
      )}
      {/* <pointLight ref={pointLight} position={[-4, 15, 10]} intensity={1}/> */}
      <DragonFlying position={[0, -0.7, 0]} />
      <Globe
        args={[512, 256, 256]}
        position={[0, -512, -50]}
        rotation={[0, 0, Math.PI / 2]}
        performance={performance}
        texture={texture}
      />
      <group ref={shadowDragon} position={[0, 0, -20]}>
        <ShadowDragon />
      </group>
      <group ref={torusGroup} position={[0, 0, 0]}>
        <TorusSceneGroup />
      </group>
    </group>
  );
};
