import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { JetConcept } from "../components/models/Jet_concept";
import earth500 from "../assets/images/earth_clouds_1k.jpg";
import earth8k from "../assets/images/earth_clouds_4k.jpg";
import { PillLinks } from "../components/PillLinks";

export function Testing() {
  function Earth() {

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
      earthRef.current.rotation.x += 0.0002;
    });

    return (
      <mesh ref={earthRef} position={[0, -80, -70]}>
        <sphereGeometry args={[100, 110, 110]} />
        <meshPhongMaterial map={texture} />
      </mesh>
    );
  }

  function JetMesh() {
    const jet = useRef(null);

    // useFrame(() => {
    //   jet.current.rotation.x += 0.01;
    //   jet.current.position.y += 0.01;
    // });

    return (
      <mesh ref={jet} position={[0, -2, 0]}>
        <JetConcept scale={1} rotation={[0.6, Math.PI / -2, 0]} />
      </mesh>
    );
  }
  return (
    <>
      <h1 className="page-title">Testing</h1>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 15, 10]} angle={0.3} />
        <OrbitControls />
        <PerspectiveCamera position={[0, 0, 12]} rotation={[0, 0, 0]} fov={50} makeDefault far={5000} />
        <JetMesh />
        <Earth />
        <Stars />
      </Canvas>
      <PillLinks backTo={"/"} backName={"home"} forwardTo={"/torus"} forwardName={"torus"} />
    </>
  );
}
