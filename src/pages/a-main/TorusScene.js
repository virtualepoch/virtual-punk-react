import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import a1 from "./images/Abstract_512x512-75.png";
import a2 from "./images/future-machine-512.jpg";
import a3 from "./images/sci-metal-512.jpg";
import a4 from "./images/sci-metal-1200.jpg";
import a5 from "./images/sci-metal-2-512.jpg";
import a6 from "./images/sci-metal-2-1024.jpg";
import a7 from "./images/space-cruiser-512.png";
import a8 from "./images/space-cruiser-1024.png";
import a9 from "./images/Tile_02-512x512.png";
import a10 from "./images/Tile_04-512x512.png";
import a11 from "./images/Tile_11-512x512.png";
import bg1 from "./images/bg/Blue_Nebula_01-1024x1024.png";
import bg2 from "./images/bg/Blue_Nebula_02-1024x1024.png";
import bg3 from "./images/bg/Blue_Nebula_03-1024x1024.png";

import { buttonGroup, useControls } from "leva";
import { OrbitControls } from "@react-three/drei";

export const TorusScene = ({ bg, bgWrapX, bgWrapY, texture, wrapX, wrapY }) => {
  function TorusGroup() {
    // function textureChanger() {
    //   if (window.innerWidth < 700) {
    //     return a1;
    //   } else {
    //     return a2;
    //   }
    // }

    const {
      radialSegments,
      tubularSegments,
      radius1,
      radius2,
      radius3,
      radius4,
      mesh1RotX,
      mesh1RotY,
      mesh1RotZ,
      mesh2RotX,
      mesh2RotY,
      mesh2RotZ,
      mesh3RotX,
      mesh3RotY,
      mesh3RotZ,
      mesh4RotX,
      mesh4RotY,
      mesh4RotZ,
    } = useControls(
      "Torus Dimension/Rotation",
      {
        radialSegs: {
          value: 8,
          min: 2,
          max: 16,
          step: 1,
        },
        tubularSegs: {
          value: 16,
          min: 3,
          max: 64,
          step: 1,
        },
        radius1: {
          value: 0.1,
          min: 0.02,
          max: 0.1,
          step: 0.01,
        },
        radius2: {
          value: 0.1,
          min: 0.02,
          max: 0.1,
          step: 0.01,
        },
        radius3: {
          value: 0.1,
          min: 0.02,
          max: 0.1,
          step: 0.01,
        },
        radius4: {
          value: 0.1,
          min: 0.02,
          max: 0.1,
          step: 0.01,
        },
        mesh1RotX: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh1RotY: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh1RotZ: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh2RotX: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh2RotY: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh2RotZ: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh3RotX: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh3RotY: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh3RotZ: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh4RotX: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh4RotY: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh4RotZ: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
      },
      { collapsed: true }
    );

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
        : texture === 10
        ? a10
        : a11
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
      meshRef1.current.rotation.x += mesh1RotX;
      meshRef1.current.rotation.y += mesh1RotY;
      meshRef1.current.rotation.z += mesh1RotZ;
      meshRef2.current.rotation.x += mesh2RotX;
      meshRef2.current.rotation.y += mesh2RotY;
      meshRef2.current.rotation.z += mesh2RotZ;
      meshRef3.current.rotation.x += mesh3RotX;
      meshRef3.current.rotation.y += mesh3RotY;
      meshRef3.current.rotation.z += mesh3RotZ;
      meshRef4.current.rotation.x += mesh4RotX;
      meshRef4.current.rotation.y += mesh4RotY;
      meshRef4.current.rotation.z += mesh4RotZ;
    });

    return (
      <>
        <mesh ref={meshRef1} position={[0, 0, 0]}>
          <torusGeometry
            args={[0.9, radius1, radialSegments, tubularSegments]}
          />
          {texture > 0 ? (
            <meshStandardMaterial map={meshTexture} />
          ) : (
            <meshStandardMaterial color="red" wireframe={true} />
          )}
        </mesh>

        <mesh ref={meshRef2} position={[0, 0, 0]}>
          <torusGeometry
            args={[1.1, radius2, radialSegments, tubularSegments]}
          />
          {texture > 0 ? (
            <meshStandardMaterial map={meshTexture} />
          ) : (
            <meshStandardMaterial color="aqua" wireframe={true} />
          )}
        </mesh>

        <mesh ref={meshRef3} position={[0, 0, 0]}>
          <torusGeometry
            args={[1.3, radius3, radialSegments, tubularSegments]}
          />
          {texture > 0 ? (
            <meshStandardMaterial map={meshTexture} />
          ) : (
            <meshStandardMaterial color="red" wireframe={true} />
          )}
        </mesh>

        <mesh ref={meshRef4} position={[0, 0, 0]}>
          <torusGeometry
            args={[1.5, radius4, radialSegments, tubularSegments]}
          />
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

  const Background = () => {
    const bgTexture = useLoader(
      THREE.TextureLoader,
      bg === 1 ? bg1 : bg === 2 ? bg2 : bg3
    );
    bgTexture.repeat.set(bgWrapY, bgWrapX);
    bgTexture.wrapS = bgTexture.wrapT = THREE.RepeatWrapping;
    return (
      <mesh position={[0, 0, 0]} rotation={[0, 1.6, 0]}>
        <sphereGeometry args={[10, 40, 20]} />
        {bg === 0 ? (
          <meshStandardMaterial wireframe color={"red"} />
        ) : (
          <meshStandardMaterial map={bgTexture} side={THREE.BackSide} />
        )}
      </mesh>
    );
  };

  return (
    <group>
      <ambientLight intensity={1} />
      {/* <directionalLight /> */}
      <OrbitControls />
      <TorusGroup />
      <Sphere />
      <Background />
    </group>
  );
};
