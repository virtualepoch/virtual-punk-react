import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { TorusMesh } from "./TorusMesh";

// import a1 from "../../assets/images/torus/Abstract_512x512-75.png";
import a1 from "../../assets/images/torus/15.png";
import { AppearanceEffectLightBeam } from "../models/AppearanceEffectLightBeam";
import { useMatch } from "react-router-dom";

export const TorusGroup = ({ position, rotation, scale, start, hubLinkClicked }) => {
  function textureChanger() {
    if (window.innerWidth < 700) {
      return a1;
    } else {
      return a1;
    }
  }

  const meshTexture = useLoader(THREE.TextureLoader, textureChanger());

  meshTexture.repeat.set(3, 4);
  meshTexture.wrapS = meshTexture.wrapT = THREE.RepeatWrapping;

  const meshRef1 = useRef(null);
  const meshRef2 = useRef(null);
  const meshRef3 = useRef(null);
  const hubScene = useMatch("/hub");

  useFrame(() => {
    if (meshRef1.current) {
      meshRef1.current.rotation.x += 0;
      meshRef1.current.rotation.y += hubScene ? -0.02 : -0.2;
      meshRef1.current.rotation.z += hubScene ? 0.02 : 0.2;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x += 0;
      meshRef2.current.rotation.y += hubScene ? 0.01 : 0.1;
      meshRef2.current.rotation.z += hubScene ? 0.01 : 0.1;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.x += hubScene ? 0.005 : 0.05;
      meshRef3.current.rotation.y += 0;
      meshRef3.current.rotation.z += hubScene ? 0.01 : 0.1;
    }
  });

  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <AppearanceEffectLightBeam start={start} hubLinkClicked={hubLinkClicked}/>
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
    </mesh>
  );
};
