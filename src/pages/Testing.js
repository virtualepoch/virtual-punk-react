import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { MeshReflectorMaterial, OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import earth500 from "../assets/images/earth_clouds_1k.jpg";
import earth8k from "../assets/images/earth_clouds_4k.jpg";
import marbleLarge from "../assets/images/marble_large.jpg";
import marbleSmall from "../assets/images/marble_small.jpg";
import { PillLinks } from "../components/PillLinks";

export function Testing() {
  function Floor() {
    return (
      <>
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial blur={[400, 400]} resolution={1024} mixBlur={0.9} mixStrength={15} depthScale={1} minDepthThreshold={0.85} color="#dbecfb" metalness={0.6} />
        </mesh>
      </>
    );
  }

  function Earth() {
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
      <mesh ref={earthRef} position={[0, 9.3, 0]}>
        <sphereGeometry args={[3, 10, 10]} />
        <meshPhongMaterial map={texture} />
      </mesh>
    );
  }

  function EarthPedestal() {
    function textureChanger() {
      if (window.innerWidth < 700) {
        return marbleSmall;
      } else {
        return marbleLarge;
      }
    }
    const texture = useLoader(THREE.TextureLoader, textureChanger());
    return (
      <mesh position={[0, 2.4, 0]}>
        <cylinderGeometry args={[2, 5, 8, 3, 1]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    );
  }

  function PictureFrame() {
    const shape = new THREE.Shape();

    let sizeX = 6;
    let sizeY = 6;
    let radius = 0.5;

    let halfX = sizeX * 0.5 - radius;
    let halfY = sizeY * 0.5 - radius;
    let baseAngle = Math.PI * 0.5;
    shape.absarc(halfX, halfY, radius, baseAngle * 0, baseAngle * 0 + baseAngle);
    shape.absarc(-halfX, halfY, radius, baseAngle * 1, baseAngle * 1 + baseAngle);
    shape.absarc(-halfX, -halfY, radius, baseAngle * 2, baseAngle * 2 + baseAngle);
    shape.absarc(halfX, -halfY, radius, baseAngle * 3, baseAngle * 3 + baseAngle);

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
  }

  return (
    <>
      <h1 className="page-title">Testing</h1>
      <Canvas className="canvas" shadows>
        <OrbitControls maxPolarAngle={Math.PI / 2} />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 15, 10]} angle={0.3} intensity={0.8} castShadow color="red" />
        <PerspectiveCamera position={[0, 0, 20]} rotation={[0, 0, 0]} fov={60} makeDefault far={1000} />
        <Floor />
        <Earth />
        <EarthPedestal />
        <PictureFrame />
        <Stars />
      </Canvas>
      <PillLinks backTo="/" backName="home" forwardTo="/torus" forwardName="torus" />
    </>
  );
}
