import * as THREE from "three";
import { Suspense, useEffect, useMemo, useRef } from "react";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import {
  ContactShadows,
  CubeCamera,
  Decal,
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Stars,
  useHelper,
  useTexture,
} from "@react-three/drei";
import earth500 from "../assets/images/earth_clouds_1k.jpg";
import earth8k from "../assets/images/earth_clouds_4k.jpg";
import marbleLarge from "../assets/images/marble_large.jpg";
import marbleSmall from "../assets/images/marble_small.jpg";
import { Model } from "./Offworld";
import dad from "./dad.jpg";
import { Groot2 } from "./Groot2";
import { DirectionalLightHelper } from "three";
import { Ocean } from "../components/three/Ocean";

export const TestingWater = () => {
  const Earth = () => {
    // !!!!!!!!!!!! SEE IF YOU CAN CREATE A GLOBAL TEXTURE CHANGER THAT WILL CHANGE FOR ALL FUNCTIONS BASED ON VARIABLES SET IN THOSE FUNCTIONS
    function textureChanger() {
      if (window.innerWidth < 700) {
        return earth500;
      } else {
        return earth8k;
      }
    }

    const texture = useLoader(THREE.TextureLoader, textureChanger());
    const earthRef = useRef(null);

    useFrame(() => {
      earthRef.current.rotation.y += 0.002;
    });

    return (
      <mesh ref={earthRef} position={[0, -4, -14]}>
        <sphereGeometry args={[3, 10, 10]} />
        <meshPhongMaterial map={texture} />
      </mesh>
    );
  };

  const EarthPedestal = () => {
    function textureChanger() {
      if (window.innerWidth < 700) {
        return marbleSmall;
      } else {
        return marbleLarge;
      }
    }
    const texture = useLoader(THREE.TextureLoader, textureChanger());
    return (
      <mesh position={[0, -6, 0]}>
        <cylinderGeometry args={[2, 5, 8, 3, 1]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    );
  };

  const PictureFrame = () => {
    const shape = new THREE.Shape();

    let sizeX = 6;
    let sizeY = 6;
    let radius = 0.5;

    let halfX = sizeX * 0.5 - radius;
    let halfY = sizeY * 0.5 - radius;
    let baseAngle = Math.PI * 0.5;
    shape.absarc(
      halfX,
      halfY,
      radius,
      baseAngle * 0,
      baseAngle * 0 + baseAngle
    );
    shape.absarc(
      -halfX,
      halfY,
      radius,
      baseAngle * 1,
      baseAngle * 1 + baseAngle
    );
    shape.absarc(
      -halfX,
      -halfY,
      radius,
      baseAngle * 2,
      baseAngle * 2 + baseAngle
    );
    shape.absarc(
      halfX,
      -halfY,
      radius,
      baseAngle * 3,
      baseAngle * 3 + baseAngle
    );

    function textureChanger() {
      if (window.innerWidth < 700) {
        return marbleSmall;
      } else {
        return marbleLarge;
      }
    }

    const texture = useLoader(THREE.TextureLoader, textureChanger());

    return (
      <mesh position={[-8, 2, 1]} rotation={[0, 0.3, 0]}>
        <extrudeGeometry args={[shape, { bevelEnabled: false, depth: 1 }]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    );
  };

  // FOR SOME REASON THE ACTIVATING THE LIGHT HELPER ON THIS PAGE CAUSES THE TypeError:
  // !!! 'light.useHelper is not a function' !!!!!
  // const light = useRef();
  // if (light.current) light.useHelper(light, DirectionalLightHelper, 1, "red");

  return (
    <>
      <h1 className="page-title">Testing</h1>
      <Canvas className="canvas">
        <OrbitControls maxPolarAngle={Math.PI / 2} />
        <Environment preset="city" />
        <ambientLight intensity={1} />

        <PerspectiveCamera
          position={[0, 0, 20]}
          rotation={[0, 0, 0]}
          fov={60}
          makeDefault
          far={1000}
        />
        <ContactShadows position-y={0} opacity={0.4} />
        <Suspense>
          <directionalLight
            // ref={light}
            position={[0, 15, 10]}
            // angle={0.3}
            intensity={1}
            color="white"
            castShadow
            shadow-camera-near={0}
            shadow-camera-far={100}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0001}
          />
          <Ocean
            position={[0, -10, 0]}
            // sunColor={0xffffff}
            sunColor={"white"}
            // waterColor={0xff1e0f}
            waterColor={"red"}
          />
          {/* <Groot2 /> */}
          <Stars />
          {/* <EarthPedestal /> */}
          <Earth />
        </Suspense>
      </Canvas>

    </>
  );
};

// function Ground() {
//   const gridConfig = {
//     cellSize: 0.5,
//     cellThickness: 0.5,
//     cellColor: '#6f6f6f',
//     sectionSize: 3,
//     sectionThickness: 1,
//     sectionColor: '#9d4b4b',
//     fadeDistance: 30,
//     fadeStrength: 1,
//     followCamera: false,
//     infiniteGrid: true
//   }
//   return <Grid position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} />
// }

// const Shadows = memo(() => (
//   <AccumulativeShadows temporal frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
//     <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
//   </AccumulativeShadows>
// ))
