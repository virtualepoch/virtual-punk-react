import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import {
  GradientTexture,
  Hud,
  OrthographicCamera,
  Torus,
  useHelper,
} from "@react-three/drei";
import { DEG2RAD, degToRad } from "three/src/math/MathUtils";
import { TorusSceneGroup } from "../components/three/TorusSceneGroup";

export const TorusScene = () => {
  const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");
  // const pointLight = useRef();
  // useHelper(pointLight, THREE.PointLightHelper, 1, "blue");

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

  const torusGroup = useRef();
  const clock = new THREE.Clock();
  useFrame(() => {
    const a = clock.getElapsedTime();
    torusGroup.current.position.z -= torusGroup.current.position.z > -6 ? 0.02 : 0;
  });

  return (
    <group>
      <ambientLight intensity={1} />
      <directionalLight ref={directionalLight} position={[4, 15, 10]} />
      {/* <pointLight ref={pointLight} position={[-4, 15, 10]} intensity={1}/> */}
      <group ref={torusGroup} position={[0, 0, 0]}>
        <TorusSceneGroup />
      </group>
    </group>
  );
};
