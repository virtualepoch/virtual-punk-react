import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { TorusMesh } from "./TorusMesh";

import a1 from "../../assets/images/torus/Abstract_512x512-75.png";

export const TorusGroup = ({ position }) => {
  function textureChanger() {
    if (window.innerWidth < 700) {
      return a1;
    } else {
      return a1;
    }
  }

  const meshTexture = useLoader(THREE.TextureLoader, textureChanger());

  meshTexture.repeat.set(20, 3);
  meshTexture.wrapS = meshTexture.wrapT = THREE.RepeatWrapping;

  const meshRef1 = useRef(null);
  const meshRef2 = useRef(null);
  const meshRef3 = useRef(null);
  const meshRef4 = useRef(null);

  useFrame(() => {
    if (meshRef1.current) {
      meshRef1.current.rotation.x += 0.05;
      meshRef1.current.rotation.y += 0.05;
      meshRef1.current.rotation.z += 0.1;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x += 0;
      meshRef2.current.rotation.y += 0.1;
      meshRef2.current.rotation.z += 0;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.x += 0.05;
      meshRef3.current.rotation.y += 0;
      meshRef3.current.rotation.z += 0;
    }
    if (meshRef4.current) {
      meshRef4.current.rotation.x += 0;
      meshRef4.current.rotation.y -= 0.05;
      meshRef4.current.rotation.z += 0;
    }
  });

  return (
    <mesh position={position}>
      <TorusMesh
        args={[0.9, 0.1, 6, 32]}
        map={meshTexture}
        torusMeshRef={meshRef1}
      />
      <TorusMesh
        args={[1.1, 0.1, 6, 32]}
        map={meshTexture}
        torusMeshRef={meshRef2}
      />
      <TorusMesh
        args={[1.3, 0.1, 6, 32]}
        map={meshTexture}
        torusMeshRef={meshRef3}
      />
      <TorusMesh
        args={[1.5, 0.1, 6, 32]}
        map={meshTexture}
        torusMeshRef={meshRef4}
      />
    </mesh>
  );
};
