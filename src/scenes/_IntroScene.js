import { forwardRef, useImperativeHandle, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { CameraControls, OrbitControls } from "@react-three/drei";

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

  return (
    <>
      {/* <CameraControls /> */}
      <group ref={rabbitHole}>
        <ExtendingWalls />
      </group>
    </>
  );
});
