import * as THREE from "three";
import { Shape, useTexture } from "@react-three/drei";
import { DissolveMaterial } from "./DissolveMaterial";
import { useState } from "react";

export const HubLink = ({ scale, image, visible, onFadeOut }) => {
  const map = useTexture(image);
  const dissolveMaterial = new THREE.MeshStandardMaterial({ map: map });

  const [red, setRed] = useState(false);
  const dissolveMaterial2 = new THREE.MeshStandardMaterial({
    color: red ? "red" : "#0b1735",
  });

  return (
    <mesh
      scale={scale}
      onClick={() => (red ? setRed(false) : setRed(true))}
    >
      <Shape>
        <DissolveMaterial
          baseMaterial={dissolveMaterial}
          visible={visible}
          onFadeOut={onFadeOut}
          color="#0082b2"
        />
      </Shape>
      <Shape scale={[1.1, 1.1, 1]} position={[0, 0, -0.01]}>
        <DissolveMaterial
          baseMaterial={dissolveMaterial2}
          visible={visible}
          onFadeOut={onFadeOut}
          color="#005555"
        />
      </Shape>
    </mesh>
  );
};
