import * as THREE from "three";
import { Center, Shape, Text, Text3D, useTexture } from "@react-three/drei";
import { DissolveMaterial } from "./DissolveMaterial";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export const HubLink = ({
  scale,
  image,
  visible,
  onFadeOut,
  fontSize = 0.1,
  linkTitle = "hello",
  hubBtnClicked,
}) => {
  const map = useTexture(image);
  const dissolveMaterial = new THREE.MeshStandardMaterial({ map: map });

  const [clicked, setClicked] = useState(false);

  const text3DMaterial = useRef();
  const shapeMaterial = useRef();
  const clock = new THREE.Clock();

  useFrame(() => {
    const a = clock.getElapsedTime();
    const timeFactor = 0.4;
    const timeFactor2 = 0.7;

    if (hubBtnClicked) {
      if (a < timeFactor) {
        text3DMaterial.current.opacity = 1 - a / timeFactor;
        shapeMaterial.current.opacity = 1 - a / timeFactor;
      }
      if (a > timeFactor) {
        text3DMaterial.current.opacity = 0;
        shapeMaterial.current.opacity = 0;
      }
    } else if (visible) {
      if (a < timeFactor2) {
        text3DMaterial.current.opacity = a / timeFactor2;
        shapeMaterial.current.opacity = a / timeFactor2;
      }
      if (a > timeFactor2) {
        text3DMaterial.current.opacity = 1;
        shapeMaterial.current.opacity = 1;
      }
    }
  });

  console.log(hubBtnClicked);
  // useFrame(() => {
  //   if (visible) {
  //     if (text3DMaterial.current.scale.z < 1) text3DMaterial.current.scale.z += 0.1;
  //   } else if (text3DMaterial.current.scale.z > 0) text3DMaterial.current.scale.z -= 0.1;
  // });

  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      scale={scale}
      onClick={() => (clicked ? setClicked(false) : setClicked(true))}
      // onPointerMove={() => setHovered(true)}
      // onPointerOut={() => setHovered(false)}
    >
      <mesh scale-z={1}>
        <Center bottom>
          <Text3D
            font="fonts/Arcade.json"
            size={fontSize}
            position={[0, -0.53, 0]}
          >
            <meshBasicMaterial
              ref={text3DMaterial}
              color={"red"}
              transparent
              opacity={0}
            />
            {linkTitle}
          </Text3D>
        </Center>
      </mesh>

      <Shape>
        <DissolveMaterial
          baseMaterial={dissolveMaterial}
          visible={visible}
          onFadeOut={onFadeOut}
          color="#0082b2"
        />
      </Shape>
      <Shape scale={[1.1, 1.1, 1]} position={[0, 0, -0.01]}>
        {/* <DissolveMaterial
          baseMaterial={dissolveMaterial2}
          visible={visible}
          onFadeOut={onFadeOut}
          color="#005555"
        /> */}
        <meshBasicMaterial
          ref={shapeMaterial}
          color={clicked ? "cyan" : "#0b1735"}
          transparent
          opacity={0}
        />
      </Shape>
    </mesh>
  );
};
