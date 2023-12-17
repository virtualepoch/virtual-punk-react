import * as THREE from "three";
import { useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { Stars, useHelper } from "@react-three/drei";
import { JetConcept } from "../components/models/Jet_concept";
import earth500 from "../assets/images/textures/earth_clouds_1k.jpg";
import earth8k from "../assets/images/textures/earth_clouds_4k.jpg";

export function MachScene() {
  const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");
  const viewport = useThree((state) => state.viewport); // used to scale scene

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
      if (earthRef.current) earthRef.current.rotation.x += 0.0001;
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
      <mesh ref={jet} position={[0, 0, 0]}>
        <JetConcept scale={1} rotation={[0.6, Math.PI / -2, 0.2]} />
      </mesh>
    );
  }

  return (
    <group scale={viewport.aspect}>
      <group position={[0, 0, -10]} rotation={[-0.1, 0, 0]}>
        <ambientLight intensity={1} />
        <directionalLight ref={directionalLight} position={[-2, 4, -2]} />
        <JetMesh />
        <Earth />
      </group>
      <Stars />
    </group>
  );
}
