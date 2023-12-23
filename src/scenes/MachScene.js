import * as THREE from "three";
import { useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { JetConcept } from "../components/models/Jet_concept";
import earth500 from "../assets/images/textures/earth_clouds_1k.jpg";
import earth8k from "../assets/images/textures/earth_clouds_4k.jpg";
import { degToRad } from "three/src/math/MathUtils";

export const MachScene = ({ performance }) => {
  const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");
  const viewport = useThree((state) => state.viewport); // used to scale scene

  function Earth() {
    const texture = useLoader(
      THREE.TextureLoader,
      performance > 0 ? earth8k : earth500
    );
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
      <OrbitControls
        minDistance={0}
        maxDistance={15}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 4}
      />
      <group position={[0, 0, 0]} rotation={[-0.1, 0, 0]}>
        <ambientLight intensity={2} />
        <directionalLight
          ref={directionalLight}
          position={[-2, 4, -2]}
          intensity={1}
        />
        <JetMesh />
        <Earth />
      </group>
      <Stars />
    </group>
  );
};
