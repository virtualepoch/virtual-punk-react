import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import a1 from "./images/Abstract_512x512-75.png";
import a2 from "./images/Metal_03-128x128.png";
import a3 from "./images/Stone_05-128x128.png";
import a4 from "./images/Stone_14-128x128.png";
import a5 from "./images/Tile_02-128x128.png";
import a6 from "./images/Tile_04-128x128.png";
import a7 from "./images/Tile_06-128x128.png";
import a8 from "./images/Tile_11-128x128.png";
import a9 from "./images/Tile_12-128x128.png";
import a10 from "./images/Tile_20-128x128.png";
import { CamControls } from "../../components/CamControls";
import { buttonGroup, useControls } from "leva";

export const TorusScene = ({
  texture,
  setTexture,
  wrapX,
  setWrapX,
  wrapY,
  setWrapY,
}) => {
  var torusRotSpeed = 0.01;

  function TorusGroup() {
    // function textureChanger() {
    //   if (window.innerWidth < 700) {
    //     return a1;
    //   } else {
    //     return a2;
    //   }
    // }

    const { radialSegments } = useControls("radialSegments", {
      radialSegments: {
        value: 8,
        min: 2,
        max: 16,
        step: 1,
      },
    });

    const { tubularSegments } = useControls("tubularSegments", {
      tubularSegments: {
        value: 16,
        min: 3,
        max: 64,
        step: 1,
      },
    });

    console.log(texture);

    const meshTexture = useLoader(
      THREE.TextureLoader,
      texture === 1
        ? a1
        : texture === 2
        ? a2
        : texture === 3
        ? a3
        : texture === 4
        ? a4
        : texture === 5
        ? a5
        : texture === 6
        ? a6
        : texture === 7
        ? a7
        : texture === 8
        ? a8
        : texture === 9
        ? a9
        : a10
    );

    meshTexture.repeat.set(wrapY, wrapX);
    meshTexture.wrapS = meshTexture.wrapT = THREE.RepeatWrapping;

    const meshRef1 = useRef(null);
    const meshRef2 = useRef(null);
    const meshRef3 = useRef(null);
    const meshRef4 = useRef(null);

    useFrame(() => {
      if (
        !meshRef1.current ||
        !meshRef2.current ||
        !meshRef3.current ||
        !meshRef4.current
      ) {
        return;
      }
      meshRef1.current.rotation.x += torusRotSpeed;
      meshRef2.current.rotation.x -= torusRotSpeed;
      meshRef3.current.rotation.y -= torusRotSpeed;
      meshRef4.current.rotation.y += torusRotSpeed;
    });

    return (
      <>
        <mesh ref={meshRef1} position={[0, 0, 0]}>
          <torusGeometry args={[0.9, 0.1, radialSegments, tubularSegments]} />
          {texture > 0 ? (
            <meshStandardMaterial map={meshTexture} />
          ) : (
            <meshStandardMaterial color="red" wireframe={true} />
          )}
        </mesh>
        <mesh ref={meshRef2} position={[0, 0, 0]}>
          <torusGeometry args={[1.1, 0.1, radialSegments, tubularSegments]} />
          {texture > 0 ? (
            <meshStandardMaterial map={meshTexture} />
          ) : (
            <meshStandardMaterial color="aqua" wireframe={true} />
          )}
        </mesh>
        <mesh ref={meshRef3} position={[0, 0, 0]}>
          <torusGeometry args={[1.3, 0.1, radialSegments, tubularSegments]} />
          {texture > 0 ? (
            <meshStandardMaterial map={meshTexture} />
          ) : (
            <meshStandardMaterial color="red" wireframe={true} />
          )}
        </mesh>
        <mesh ref={meshRef4} position={[0, 0, 0]}>
          <torusGeometry args={[1.5, 0.1, radialSegments, tubularSegments]} />
          {texture > 0 ? (
            <meshStandardMaterial map={meshTexture} />
          ) : (
            <meshStandardMaterial color="aqua" wireframe={true} />
          )}
        </mesh>
      </>
    );
  }

  function Sphere() {
    const sphere = useRef(null);

    useFrame(() => {
      sphere.current.rotation.y += 0.5;
    });
    return (
      <mesh ref={sphere}>
        <sphereGeometry args={[0.2, 4, 2]} />
        <meshBasicMaterial color="red" wireframe={true} />
      </mesh>
    );
  }

  return (
    <group>
      <ambientLight intensity={1} />
      <TorusGroup />
      <Sphere />
    </group>
  );
};
