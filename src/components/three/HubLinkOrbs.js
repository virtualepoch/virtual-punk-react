import { Sphere, Text } from "@react-three/drei";
import * as THREE from "three";
import { Atom } from "./Atom";
import { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import gsap from "gsap";

import texture128 from "../../assets/images/textures/hex-128.jpg";
import texture256 from "../../assets/images/textures/hex-256.jpg";
import texture512 from "../../assets/images/textures/hex-512.jpg";

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

export const HubLinkOrbs = ({ hubLink }) => {
  const texture = useLoader(
    THREE.TextureLoader,
    performance === 0 ? texture128 : performance === 2 ? texture512 : texture256
  );
  texture.repeat.set(2, 1);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  const atomRef = useRef();
  useEffect(() => {
    if (!atomRef.current) return;
    gsap.to(atomRef.current.position, {
      x: hubLink === 0 ? 0 : hubLink === 1 ? 4 : 8,
      ease: "power1.inout",
      duration: 1,
    });
  });

  return (
    <group
      position={[linkOrbInfo.length * -0.2, -1.2, 1.3]}
      scale={0.15}
      rotation={[-0.4, 0, 0]}
      onClick={() => {}}
      receiveShadow
      castShadow
    >
      <ambientLight />
      <Atom atomRef={atomRef} scale={1.5} orbitScale={0.07} />
      {linkOrbInfo.map((item, index) => (
        <group key={index} position={[index * 4, 0, 0]}>
          <Text
            font="fonts/ARCADE.TTF"
            fontSize={1}
            position={[0, 0, 1]}
            anchorY={"center"}
            color={item.number === hubLink ? "red" : "cyan"}
          >
            {item.text}
          </Text>

          <Sphere args={[1, 16, 16]}>
            <meshStandardMaterial
              map={texture}
              receiveShadow
            />
          </Sphere>
        </group>
      ))}
    </group>
  );
};
