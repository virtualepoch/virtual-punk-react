import * as THREE from "three";
import { Center, Shape, Text, Text3D, useTexture } from "@react-three/drei";
import { DissolveMaterial } from "./DissolveMaterial";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export const HubLink = ({
  scale,
  image,
  visible = false,
  onFadeOut,
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

    if (hubLinkClicked && a < timeFactor3) {
      // Need to refactor the following with some type of constant
      text3DMesh.current.position.z = a * 2;
      if (scale < 1) text3DMesh.current.position.z = a * 3;
      if (scale < 0.76) text3DMesh.current.position.z = a * 4;
      ///////////////////////////////////////////////////////////
      dissolveMesh.current.position.z = -a;
      backdropMaterial.current.opacity = 1 - a;
    }
  });

  const [hovered, setHovered] = useState(false);

  return (
    <group
      position-z={0.5}
      scale={2}
      onClick={() => {
        setHubLinkClicked(true);
        onClick();
      }}
      onPointerMove={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(hubLinkClicked ? true : false);
        document.body.style.cursor = "default";
      }}
    >
      <mesh ref={text3DMesh} scale-z={0.5}>
        <Center center disableY>
          <Text3D
            font="fonts/Arcade.json"
            size={0.1}
            position={[0, scale < 0.76 ? -0.11 : -0.1, 0]}
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
