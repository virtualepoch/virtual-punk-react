import { forwardRef, useImperativeHandle, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export const HomeCanvas = forwardRef((props, ref) => {
  var zPosition = 0.008;
  var yRotation = -0.002;

  function ExtendingWalls() {
    const rabbitHole = useRef(null);

    useFrame(() => {
      if (rabbitHole.current.position.z < 105) {
        rabbitHole.current.position.z += zPosition;
        rabbitHole.current.rotateY(yRotation);
      } else {
        rabbitHole.current.position.z -= 124;
      }
    });

    return (
      <mesh ref={rabbitHole} position={[0, 0, -20]} rotation={[Math.PI / -2, Math.PI / 4, 0]}>
        <cylinderGeometry args={[0, 5, 120, 8, 100]} />
        <meshBasicMaterial color={"aqua"} wireframe={true} />
      </mesh>
    );
  }

  const rabbitHole = useRef();

  useImperativeHandle(ref, () => ({
    fastForward() {
      zPosition = 0.4;
      yRotation = -0.008;
    },
  }));

  return (
    <Canvas className="canvas" camera={{ position: [0, 0, 45] }}>
      <group ref={rabbitHole}>
        <ExtendingWalls />
      </group>
    </Canvas>
  );
});
