import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";

import { TorusGroup } from "../components/three/TorusGroup";

export const TorusScene = () => {
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

  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  return (
    <group>
      <directionalLight
        ref={directionalLight}
        position={[4, 15, 10]}
        angle={0.3}
      />
      <TorusGroup />

      <Sphere />
    </group>
  );
};
