import { useRef } from "react";
import { useMatch } from "react-router-dom";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Torus } from "@react-three/drei";

// COMPONENTS
import { AppearanceEffectLightBeam } from "../models/AppearanceEffectLightBeam";
import texture256 from "../../assets/images/torus/future-machine-256.jpg";
import texture512 from "../../assets/images/torus/future-machine-512.jpg";

export const TorusGroup = ({
  position,
  rotation,
  scale,
  start,
  hubLinkClicked,
  downgradedPerformance,
}) => {
  const texture = useLoader(
    THREE.TextureLoader,
    downgradedPerformance ? texture256 : texture512
  );
  texture.repeat.set(8, 1);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const hub = useMatch("/hub");
  useFrame(() => {
    ref1.current.rotation.x = hubLinkClicked ? 0 : hub ? Math.PI * 0.25 : 0;
    ref1.current.rotation.y += hubLinkClicked ? -0.2 : hub ? 0 : -0.2;
    ref1.current.rotation.z += hubLinkClicked ? 0.2 : hub ? -0.001 : 0.2;

    ref2.current.rotation.x += 0;
    ref2.current.rotation.y += hubLinkClicked ? 0.1 : hub ? 0 : 0.1;
    ref2.current.rotation.z += hubLinkClicked ? 0.1 : hub ? 0.001 : 0.1;

    hubLinkClicked
      ? (ref3.current.rotation.x += 0.05)
      : hub
      ? (ref3.current.rotation.x = Math.PI * 0.75)
      : (ref3.current.rotation.x += 0.05);
    ref3.current.rotation.y += 0;
    ref3.current.rotation.z += hubLinkClicked ? 0.1 : hub ? 0.001 : 0.1;
  });

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <AppearanceEffectLightBeam
        start={start}
        hubLinkClicked={hubLinkClicked}
      />

      <Torus ref={ref1} args={[0.9, 0.1, 3, 28]}>
        <meshBasicMaterial map={texture} />
      </Torus>

      <Torus ref={ref2} args={[1.1, 0.1, 3, 28]}>
        <meshBasicMaterial map={texture} />
      </Torus>

      <Torus ref={ref3} args={[1.3, 0.1, 3, 28]}>
        <meshBasicMaterial map={texture} />
      </Torus>
    </group>
  );
};
