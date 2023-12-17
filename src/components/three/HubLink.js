import * as THREE from "three";
import { Center, Shape, Text, Text3D, useTexture } from "@react-three/drei";
import { DissolveMaterial } from "./DissolveMaterial";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export const HubLink = ({
  portrait,
  scale,
  image,
  visible = false,
  onFadeOut,
  fontSize = 0.1,
  linkTitle = "hello",
  hubBtnClicked,
  onClick,
  hubLinkClicked,
  setHubLinkClicked,
}) => {
  const map = useTexture(image);
  const dissolveMaterial = new THREE.MeshStandardMaterial({ map: map });

  const text3DMaterial = useRef();
  const text3DMesh = useRef();
  const dissolveMesh = useRef();
  const backdropMesh = useRef();
  const backdropMaterial = useRef();

  const clock = new THREE.Clock();

  useFrame(() => {
    const a = clock.getElapsedTime();
    const timeFactor = 0.4;
    const timeFactor2 = 0.7;
    const timeFactor3 = 2;

    if (hubBtnClicked) {
      text3DMaterial.current.opacity = a < timeFactor ? 1 - a / timeFactor : 0;
    } else if (visible) {
      text3DMaterial.current.opacity = a < timeFactor2 ? a / timeFactor2 : 1;
    }

    if (hubLinkClicked) {
      text3DMesh.current.position.z =
        a < timeFactor3 ? (portrait ? a * scale * 4 : a * scale) : 8;
      dissolveMesh.current.position.z = a < timeFactor3 ? -a : 0;
      backdropMaterial.current.opacity = a < timeFactor3 ? 1 - a : 0;
    }
  });

  const [hovered, setHovered] = useState(false);

  return (
    <group
      scale={scale}
      onClick={() => {
        setHubLinkClicked(true);
        onClick();
      }}
      onPointerMove={() => setHovered(true)}
      onPointerOut={() => setHovered(hubLinkClicked ? true : false)}
    >
      <mesh ref={text3DMesh} scale-z={0.5}>
        <Center bottom>
          <Text3D
            font="fonts/Arcade.json"
            size={fontSize}
            position={[0, portrait ? -0.9 : -0.6, 0]}
          >
            <meshBasicMaterial
              ref={text3DMaterial}
              color={hovered ? "cyan" : "red"}
              transparent
            />
            {linkTitle}
          </Text3D>
        </Center>
      </mesh>

      <Shape ref={dissolveMesh}>
        <DissolveMaterial
          baseMaterial={dissolveMaterial}
          visible={visible}
          onFadeOut={onFadeOut}
          color="#0082b2"
        />
      </Shape>
      <Shape ref={backdropMesh} scale={[1.1, 1.1, 1]} position={[0, 0, -0.01]}>
        <meshBasicMaterial ref={backdropMaterial} color="#0b1735" transparent />
      </Shape>
    </group>
  );
};
