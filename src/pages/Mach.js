import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { JetConcept } from "../components/models/Jet_concept";
import earth500 from "../assets/images/earth_clouds_1k.jpg";
import earth8k from "../assets/images/earth_clouds_4k.jpg";
import { PillLinks } from "../components/PillLinks";
import { CreditsModal } from "../components/CreditsModal";

export function Mach() {
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

  const credits = `Credits for the jet model on this page go to:
  "Jet Concept" (https://skfb.ly/oAEKN) by markkingsnorth is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
  `;

  return (
    <>
      <h1 className="page-title">Mach</h1>
      <CreditsModal creditsInfo={credits} />
      <Canvas camera={{ position: [0, 10, 12], rotation: [0, 0, 0], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 15, 10]} angle={0.3} />
        <OrbitControls autoRotate={true} />
        <JetMesh />
        <Earth />
        <Stars />
      </Canvas>
      <PillLinks backTo="/shoe" backName="shoe" forwardTo="/star-punk" forwardName="star-punk" />
    </>
  );
}
