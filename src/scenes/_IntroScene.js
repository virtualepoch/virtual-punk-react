import { forwardRef, useImperativeHandle, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { CameraControls, OrbitControls, useHelper } from "@react-three/drei";
import { WarpTunnel } from "../components/models/WarpTunnel";
import * as THREE from "three";

export const IntroScene = forwardRef((props, ref) => {
  var zPosition = 0.008;
  // var yRotation = -0.002;

  function ExtendingWalls() {
    const rabbitHole = useRef(null);

    useFrame(() => {
      if (rabbitHole.current.position.z < 105) {
        rabbitHole.current.position.z += zPosition;
        // rabbitHole.current.rotateY(yRotation);
      } else {
        rabbitHole.current.position.z -= 124;
      }
    });

    return (
      <mesh
        ref={rabbitHole}
        position={[0, 0, -20]}
        rotation={[Math.PI / -2, Math.PI / 4, 0]}
      >
        <cylinderGeometry args={[0, 5, 120, 4, 100]} />
        <meshBasicMaterial color={"aqua"} wireframe={true} />
      </mesh>
    );
  }

  const rabbitHole = useRef();

  useImperativeHandle(ref, () => ({
    fastForward() {
      zPosition = 0.3;
      // yRotation = -0.008;
    },
  }));

  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  return (
    <>
      {/* <CameraControls /> */}
      <OrbitControls />
      <ambientLight intensity={1} position={[0, 0, 0]} />
      <directionalLight
        ref={directionalLight}
        position={[1, 1, 1]}
        angle={0.3}
      />
      <group ref={rabbitHole}>
        <ExtendingWalls />
        {/* <WarpTunnel /> */}
      </group>
    </>
  );
});
