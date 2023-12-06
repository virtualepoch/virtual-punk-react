import { forwardRef, useImperativeHandle, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import * as THREE from "three";
import { RabbitHole } from "../components/three/RabbitHole";
import { MyCylinder } from "../components/three/MyCylinder";

export const IntroScene = () => {
  // var zPosition = 0.008;

  // const rabbitHole = useRef();

  // useFrame(() => {
  //   if (rabbitHole.current.position.z < 105) {
  //     rabbitHole.current.position.z += zPosition;
  //   } else {
  //     rabbitHole.current.position.z -= 124;
  //   }
  // });

  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  return (
    <>
      <ambientLight intensity={1} position={[0, 0, 0]} />
      <directionalLight
        ref={directionalLight}
        position={[1, 1, 1]}
        angle={0.3}
      />
      <RabbitHole />
      {/* <MyCylinder /> */}
    </>
  );
};

// var zPosition = 0.008;

// function ExtendingWalls() {
//   const rabbitHole = useRef(null);

//   useFrame(() => {
//     if (rabbitHole.current.position.z < 105) {
//       rabbitHole.current.position.z += zPosition;
//     } else {
//       rabbitHole.current.position.z -= 124;
//     }
//   });

// }

// const rabbitHole = useRef();

// useImperativeHandle(ref, () => ({
//   fastForward() {
//     zPosition = 0.3;
//     // yRotation = -0.008;
//   },
// }));
