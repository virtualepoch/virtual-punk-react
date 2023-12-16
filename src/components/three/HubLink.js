import * as THREE from "three";
import { Shape, useTexture } from "@react-three/drei";
import { DissolveMaterial } from "./DissolveMaterial";

export const HubLink = ({ size, image, visible, onFadeOut }) => {
  const map = useTexture(image);
  const dissolveMaterial = new THREE.MeshStandardMaterial({ map: map });
  const dissolveMaterial2 = new THREE.MeshStandardMaterial({
    color: "#0b1735",
  });

  return (
    <mesh scale={[size, size, size]}>
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
          color="#0082b2"
        />
      </Shape>
    </mesh>
  );
};
