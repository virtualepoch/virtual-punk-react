import { Center, Sphere, Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useState } from "react";

export const linkOrbInfo = [
  {
    text: "torus",
    number: 0,
  },
  {
    text: "mach",
    number: 1,
  },
  {
    text: "water",
    number: 2,
  },
];

export const HubLinkOrbs = ({ hubLink, position, scale, rotationX }) => {
  return (
    <group
      position={position}
      scale={scale}
      rotation={[rotationX, 0, 0]}
      onClick={() => {}}
      receiveShadow
      castShadow
    >
      {linkOrbInfo.map((item, index) => (
        <group key={index} position={[index * 3, 0, 0]}>
          <Text
            font="fonts/ARCADE.TTF"
            fontSize={1}
            position={[0, 0, 1]}
            anchorY={"center"}
            color={item.number === hubLink ? "red" : "cyan"}
          >
            {item.text}
          </Text>

          <Sphere args={[1, 8, 8]}>
            <meshBasicMaterial
              color={item.number === hubLink ? "cyan" : "red"}
            />
          </Sphere>
        </group>
      ))}
    </group>
  );
};
