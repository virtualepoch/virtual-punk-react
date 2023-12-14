import { extend, useFrame } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";
import ThreeMeshUI, { Text } from "three-mesh-ui";
import { MeshUIButton } from "./MeshUIButton";

extend(ThreeMeshUI);

export const MeshUIPanel = () => {
  const Title = ({ accentColor }) => {
    return (
      <block
        args={[
          {
            width: 1,
            height: 0.25,
            backgroundOpacity: 0,
            justifyContent: "center",
          },
        ]}
      >
        <text content={"Hello "} />
        <text content={"World "} args={[{ fontColor: accentColor }]} />
      </block>
    );
  };

  const [accentColor] = useState(() => new THREE.Color("red"));
  useFrame(() => {
    ThreeMeshUI.update();
  });
  return (
    <block
      args={[
        {
          width: 1,
          height: 0.5,
          fontSize: 0.1,
          backgroundOpacity: 1,
          fontFamily: "../../../public/fonts/Roboto-msdf.json",
          fontTexture: "../../../public/fonts/Roboto-msdf.png",
        },
      ]}
    >
      <Title accentColor={accentColor} />
      <MeshUIButton onClick={() => accentColor.offsetHSL(1 / 3, 0, 0)} />
    </block>
  );
};
