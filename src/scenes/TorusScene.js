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
import {
  Box,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  useHelper,
} from "@react-three/drei";
import { ShadowDragon } from "../components/models/ShadowDragon";
import gsap from "gsap";
import { Tree } from "../components/models/Tree";
import {
  Physics,
  RigidBody,
  RapierRigidBody,
  vec3,
  quat,
  euler,
} from "@react-three/rapier";
import { TempleOfLight } from "../components/models/TempleOfLight";

export const TorusScene = ({ performance, thirdPerson }) => {
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  const texture = useLoader(
    THREE.TextureLoader,
    // performance === 0 ? textureSm :
    textureLg
  );

  texture.repeat.set(32, 16);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  const cam = useRef();
  const sceneMap = useRef();
  const torusGroup = useRef();
  // const treeGroup = useRef();
  const shadowDragon = useRef();
  const clock = new THREE.Clock();

  // useEffect(() => {
  //   var tl = gsap.timeline({ repeat: 1, repeatDelay: 1 });
  //   tl.to(shadowDragon.current.position, { z: -3, duration: 9 });
  //   tl.to(shadowDragon.current.position, { z: -3, duration: 2 });
  //   tl.to(shadowDragon.current.position, { z: 5, duration: 1 });
  //   tl.to(shadowDragon.current.position, { z: -20, duration: 10 });
  //   // tl.pause();
  //   // tl.resume();
  //   // tl.seek(1.5);
  //   // tl.reverse();
  // });

  const dragonTorus = useRef();
  useEffect(() => {
    gsap.to(dragonTorus.current.position, {
      y: thirdPerson ? -0.5 : 0,
      z: thirdPerson ? -1 : 0,
      duration: 0.7,
      ease: "power1.inOut",
    });
  }, [dragonTorus, thirdPerson]);

  useFrame(() => {
    const a = clock.getElapsedTime();
    sceneMap.current.rotation.y -= 0.001;
  });

  return (
    <group>
      <PerspectiveCamera ref={cam} makeDefault position={[0, 0, 0.1]}>
        <OrbitControls
          minDistance={0}
          maxDistance={0.1}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 4}
        />
        <ambientLight intensity={1} />
        <directionalLight
          ref={directionalLight}
          intensity={10}
          position={[-1, 2, 4]}
        />
      </PerspectiveCamera>

      <DragonFlying dragonRef={dragonTorus} />

      <group ref={sceneMap} position={[-25, -5, 0]}>
        <mesh position={[0, -7, 0]} scale={15}>
          <TempleOfLight />
        </mesh>
        <mesh ref={shadowDragon} position={[24, 0, -5]}>
          <ShadowDragon />
        </mesh>
        <Plane
          args={[100, 100]}
          position={[0, -8, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <meshBasicMaterial map={texture} />
        </Plane>
      </group>
    </group>
  );
};

// <group ref={treeGroup} position={[-1, -1, -15]}>
// <Tree position={[-1.5, 0, 0]} />
// <Tree position={[1.5, 0, 0]} />
// <Tree position={[1.5, 0, -4]} scale={2} />
// <Tree position={[-1.5, 0, -5]} scale={0.5} />
// <Tree position={[-3.5, 0, -10]} scale={2.5} />
// </group>

// <group ref={torusGroup} position={[0, 0, 0]}>
// <TorusSceneGroup />
// </group>
