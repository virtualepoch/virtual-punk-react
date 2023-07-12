import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { CameraControls, ContactShadows } from "@react-three/drei";

import bg from "../../assets/images/dreamlike_sunset.jpg";

import { DragonRunning } from "./DragonRunning";
import { PineTree } from "./PineTree";
import { Cloud } from "./Cloud";
import { randFloatSpread } from "three/src/math/MathUtils";

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
const SM_TREES_NB = 20;
const CLOUDS_NB = 10;
const RANDOMIZER_STRENGTH_SCALE = 0.42;
const RANDOMIZER_STRENGTH_POSITION = 1;

const MovingItem = (props) => {
  const ref = useRef();

  useFrame((_state, delta) => {
    ref.current.position.x -= delta * 5;

    if (ref.current.position.x <= -OFFSET_X) {
      ref.current.position.x = OFFSET_X;
    }
  });

  useEffect(() => {
    if (props.randomizePosition) {
      ref.current.position.x += randFloatSpread(RANDOMIZER_STRENGTH_POSITION);
      ref.current.position.z += randFloatSpread(RANDOMIZER_STRENGTH_POSITION);
    }
    if (props.randomizeScale) {
      ref.current.scale.x += randFloatSpread(RANDOMIZER_STRENGTH_SCALE);
      ref.current.scale.y += randFloatSpread(RANDOMIZER_STRENGTH_SCALE);
      ref.current.scale.z += randFloatSpread(RANDOMIZER_STRENGTH_SCALE);
    }
  });

  return (
    <group ref={ref} position={props.position}>
      {props.children}
    </group>
  );
};

const Background = () => {
  const ref = useRef();
  const lgTreeSize = 0.8;
  const mdTreeSize = 0.5;
  const smTree = 0.3;

  return (
    <group position={[0, 0, -5]} ref={ref}>
      {[...Array(TREES_NB)].map((_v, index) => (
        <MovingItem key={index} position={[-OFFSET_X + (index / TREES_NB) * OFFSET_X * 2, -1.6, -3]} randomizePosition randomizeScale>
          <PineTree scale={[lgTreeSize, lgTreeSize, lgTreeSize]} />
        </MovingItem>
      ))}
      {[...Array(TREES_NB)].map((_v, index) => (
        <MovingItem key={index} position={[-OFFSET_X + (index / TREES_NB) * OFFSET_X * 2, -1.6, -1.5]} randomizePosition randomizeScale>
          <PineTree scale={[mdTreeSize, mdTreeSize, mdTreeSize]} />
        </MovingItem>
      ))}
      {[...Array(TREES_NB)].map((_v, index) => (
        <MovingItem key={index} position={[-OFFSET_X + (index / SM_TREES_NB) * OFFSET_X * 2, -1.6, 0.5]} randomizePosition randomizeScale>
          <PineTree scale={[smTree, smTree, smTree]} position={[0.9, 0, 0]} />
        </MovingItem>
      ))}
      {[...Array(CLOUDS_NB)].map((_v, index) => (
        <MovingItem key={index} position={[-OFFSET_X + (index / TREES_NB) * OFFSET_X * 2, 3, -7]}
        randomizePosition
        randomizeScale>
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
