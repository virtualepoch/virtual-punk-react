import { useRef } from "react";
import { useMatch } from "react-router-dom";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Torus, useHelper, useTexture } from "@react-three/drei";

// COMPONENTS
import { AppearanceEffectLightBeam } from "../models/AppearanceEffectLightBeam";

export const TorusGroup = ({
  position,
  rotation,
  scale,
  start,
  hubLinkClicked,
  performance,
}) => {
  const textures = useTexture({
    map: `${
      performance < 2
        ? "/textures/red-scifi-metal/albedo-512.png"
        : "/textures/red-scifi-metal/albedo.png"
    }`,
    displacementMap: `${
      performance < 2
        ? "/textures/red-scifi-metal/height-512.png"
        : "/textures/red-scifi-metal/height.png"
    }`,
    roughnessMap: `${
      performance < 2
        ? "/textures/red-scifi-metal/roughness-512.png"
        : "/textures/red-scifi-metal/roughness.png"
    }`,
    metalnessMap: `${
      performance < 2
        ? "/textures/red-scifi-metal/metallic-512.png"
        : "/textures/red-scifi-metal/metallic.png"
    }`,
    normalMap: `${
      performance < 2
        ? "/textures/red-scifi-metal/normal-512.png"
        : "/textures/red-scifi-metal/normal.png"
    }`,
    aoMap: `${
      performance < 2
        ? "/textures/red-scifi-metal/ao-512.png"
        : "/textures/red-scifi-metal/ao.png"
    }`,
  });

  const repeatX = 30;
  const repeatY = 3;

  textures.map.repeat.set(repeatX, repeatY);
  textures.map.wrapS = textures.map.wrapT = THREE.RepeatWrapping;

  textures.displacementMap.repeat.set(repeatX, repeatY);
  textures.displacementMap.wrapS = textures.displacementMap.wrapT =
    THREE.RepeatWrapping;

  textures.roughnessMap.repeat.set(repeatX, repeatY);
  textures.roughnessMap.wrapS = textures.roughnessMap.wrapT =
    THREE.RepeatWrapping;

  textures.metalnessMap.repeat.set(repeatX, repeatY);
  textures.metalnessMap.wrapS = textures.metalnessMap.wrapT =
    THREE.RepeatWrapping;

  textures.normalMap.repeat.set(repeatX, repeatY);
  textures.normalMap.wrapS = textures.normalMap.wrapT = THREE.RepeatWrapping;

  textures.aoMap.repeat.set(repeatX, repeatY);
  textures.aoMap.wrapS = textures.aoMap.wrapT = THREE.RepeatWrapping;

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

  // const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <directionalLight
        // ref={directionalLight}
        intensity={2}
        position={[-1, 1, 4]}
      />

      <AppearanceEffectLightBeam
        start={start}
        hubLinkClicked={hubLinkClicked}
      />

      <Torus ref={ref1} args={[0.9, 0.1, 8, 32]}>
        <meshStandardMaterial {...textures} displacementScale={0.01} />
      </Torus>

      <Torus ref={ref2} args={[1.1, 0.1, 8, 32]}>
        <meshStandardMaterial {...textures} displacementScale={0.01} />
      </Torus>

      <Torus ref={ref3} args={[1.3, 0.1, 8, 32]}>
        <meshStandardMaterial {...textures} displacementScale={0.01} />
      </Torus>
    </group>
  );
};
