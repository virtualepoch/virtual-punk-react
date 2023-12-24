import { Sphere, Text } from "@react-three/drei";
import * as THREE from "three";
import { Atom } from "./Atom";
import { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import gsap from "gsap";

import texture128 from "../../assets/images/textures/hex-128.jpg";
import texture256 from "../../assets/images/textures/hex-256.jpg";
import texture512 from "../../assets/images/textures/hex-512.jpg";
import { Interactive } from "@react-three/xr";

export const linkOrbInfo = [
  {
    text: "torus",
    number: 0,
    path: "/torus",
  },
  {
    text: "mach",
    number: 1,
    path: "/mach",
  },
  {
    text: "water",
    number: 2,
    path: "/water",
  },
];

export const HubLinkOrbs = ({ hubLink, setHubLink, performance }) => {
  const [hovered, setHovered] = useState();
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
      <Atom
        atomRef={atomRef}
        scale={1.5}
        orbitScale={0.07}
        performance={performance}
      />
      {linkOrbInfo.map((item, index) => (
        <Interactive
          onSelect={() => setHubLink(item.number)}
          onHover={() => setHovered(true)}
          onBlur={() => setHovered(false)}
        >
          <group
            key={index}
            position={[index * 4, 0, 0]}
            onClick={() => setHubLink(item.number)}
            onPointerMove={() => {
              setHovered(true);
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              setHovered(false);
              document.body.style.cursor = "default";
            }}
          >
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
              <meshStandardMaterial map={texture} receiveShadow />
            </Sphere>
          </group>
        </Interactive>
      ))}
    </group>
  );
};
