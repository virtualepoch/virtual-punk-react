import * as THREE from "three";
import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { CameraControls, ContactShadows } from "@react-three/drei";

import bg from "../../assets/images/dreamlike_sunset.jpg";

import { DragonRunning } from "./DragonRunning";
import { PineTree } from "./PineTree";
import { Cloud } from "./Cloud";

const BackDrop = () => {
  const map = useLoader(THREE.TextureLoader, bg);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0003;
  });

  return (
    <mesh position={[0, 0, 0]} rotation={[0, 1.6, 0]} ref={ref}>
      <sphereGeometry args={[27, 20, 4]} />
      <meshStandardMaterial map={map} side={THREE.BackSide} />
    </mesh>
  );
};

function Ground() {
  return (
    <>
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[55, 55]} />
        <meshBasicMaterial color="#dbecfb" />
      </mesh>
    </>
  );
}

const OFFSET_X = 20;
const TREES_NB = 10;
const CLOUDS_NB = 20;

const MovingItem = (props) => {
  const ref = useRef();

  useFrame((_state, delta) => {
    ref.current.position.x -= delta * 5;

    if (ref.current.position.x <= -OFFSET_X) {
      ref.current.position.x = OFFSET_X;
    }
  });

  return <group ref={ref}>{props.children}</group>;
};

const Background = () => {
  const ref = useRef();

  return (
    <group position={[0, 0, -5]} ref={ref}>
      {[...Array(TREES_NB)].map((_v, index) => (
        <MovingItem key={index} position={[index + 10, -1, -1.5]}>
          <PineTree scale={[1, 0.5, 1]} />
        </MovingItem>
      ))}
      {[...Array(CLOUDS_NB)].map((_v, index) => (
        <MovingItem key={index} position={[1, 2, -4]}>
          <Cloud scale={[0.005, 0.005, 0.001]} />
        </MovingItem>
      ))}
    </group>
  );
};

export function DragonScene() {
  const controlsRef = useRef();

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight intensity={1} />
      <BackDrop />
      <Ground />
      <CameraControls ref={controlsRef} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />

      <Background />
      <DragonRunning position={[0, -1.5, 0]} rotation={[0, 1.5, 0]} />
      <ContactShadows scale={[16, 16]} opacity={0.5} />
    </>
  );
}
