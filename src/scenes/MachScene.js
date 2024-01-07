import * as THREE from "three";
import { useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  Stars,
} from "@react-three/drei";
import { JetConcept } from "../components/models/Jet_concept";
import earth1k from "../assets/images/textures/earth_clouds_1k.jpg";
import earth4k from "../assets/images/textures/earth_clouds_4k.jpg";
import { degToRad } from "three/src/math/MathUtils";
import { EarthTank2k } from "../components/models/EarthTank2k";

export const MachScene = ({ performance, vrSession }) => {
  const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");
  const viewport = useThree((state) => state.viewport); // used to scale scene

  function Earth() {
    const texture = useLoader(
      THREE.TextureLoader,
      performance > 0 ? earth4k : earth1k
    );
    const earthRef = useRef(null);

    useFrame(() => {
      if (earthRef.current) earthRef.current.rotation.x += 0.0001;
    });

    return (
      <Sphere args={[100, 110, 110]} ref={earthRef} position={[0, -80, -70]}>
        <meshPhongMaterial map={texture} />
      </Sphere>
    );
  }

  const earth4kair = useRef();
  useFrame(() => {
    earth4kair.current.rotation.x += 0.0005;
  });

  return (
    <group scale={viewport.aspect}>
      <PerspectiveCamera
        makeDefault={vrSession ? false : true}
        position={[0, 0, 5]}
      />

      <OrbitControls
        minDistance={0}
        // maxDistance={150}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 4}
      />

      <ambientLight intensity={2} />

      <directionalLight
        ref={directionalLight}
        position={[-2, 4, -2]}
        intensity={1}
      />

      <JetConcept scale={1} rotation={[degToRad(45), degToRad(-90), 0.2]} />

      {/* <Earth /> */}
      <group ref={earth4kair} position={[0, -9, -8]}>
        <EarthTank2k scale={1.8} />
      </group>

      <Stars />
    </group>
  );
};
