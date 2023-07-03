import * as THREE from "three";
import { useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, Float, MeshPortalMaterial, RoundedBox, useTexture } from "@react-three/drei";
import scenicWater from "../../assets/images/scenic_underwater.jpg";
import realisticJungle from "../../assets/images/realistic_jungle.jpg";
import scenicJungle from "../../assets/images/scenic_jungle.jpg";
import dreamlike from "../../assets/images/dreamlike_cyber_punk.jpg";
import realistic from "../../assets/images/realistic_cyber_punk.jpg";
import sky from "../../assets/images/sky_cyber_punk.jpg";
import tech from "../../assets/images/tech_noir__cyberpunk_cyber_punk.jpg";

import { Raptor } from "./Raptor";
import { Trex } from "./Trex";
import { Megalodon } from "./Megalodon";

export function PortalScene() {
  return (
    <>
      <ambientLight intensity={1} />

      <OrbitControls />
      <CreatureCard width={2} height={3} texture={scenicJungle} position-x={-2.5} rotation-y={Math.PI / 8}>
        <Raptor position={[0, -1, 0]} />
      </CreatureCard>
      <CreatureCard width={3} height={6} texture={realisticJungle}>
        <Trex position-y={-3} scale={3} />
      </CreatureCard>
      <CreatureCard width={2} height={3} texture={scenicWater} position-x={2.5} rotation-y={Math.PI / -8}>
        <Megalodon position={[0, -0.5, 0]} />
      </CreatureCard>
      <Stars />
    </>
  );
}

const CreatureCard = ({ width, height, children, texture, ...props }) => {
  const map = useLoader(THREE.TextureLoader, texture);
  return (
    <group {...props}>
      <RoundedBox args={[width, height, 0.1]}>
        <MeshPortalMaterial>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 15, 10]} angle={0.3} />
          {children}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[5, 10, 10]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};
