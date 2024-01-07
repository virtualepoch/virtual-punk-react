import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

// COMPONENTS
import { JetConcept } from "../components/models/Jet_concept";
import { EarthTank2k } from "../components/models/EarthTank2k";

export const MachScene = ({ performance, vrSession }) => {
  const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");
  const viewport = useThree((state) => state.viewport); // used to scale scene

  const earth = useRef();
  useFrame(() => {
    earth.current.rotation.x += 0.0005;
  });

  return (
    <group scale={viewport.aspect}>
      <PerspectiveCamera
        makeDefault={vrSession ? false : true}
        position={[0, 0, 5]}
      />

      <OrbitControls
        minDistance={2}
        maxDistance={10}
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

      <group ref={earth} position={[0, -9, -8]} rotation={[0, 0, degToRad(90)]}>
        <EarthTank2k scale={1.8} />
      </group>

      <Stars />
    </group>
  );
};
