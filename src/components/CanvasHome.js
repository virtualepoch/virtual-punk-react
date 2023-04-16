import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const style = {
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: "-2",
  border: "solid aqua",
  background: "linear-gradient(to right, rgb(0, 50, 50), black, rgb(0, 50, 50))",
};

function ExtendingWalls() {
  const ref = useRef(null);

  useFrame(() => {
    if (ref.current.position.z < 104) {
      ref.current.position.z += 0.008;
    } else {
      ref.current.position.z -= 124;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -20]} rotation={[Math.PI / -2, Math.PI / 4, 0]}>
      <cylinderGeometry args={[0, 5, 120, 4, 100]} />
      <meshBasicMaterial color={"aqua"} wireframe={true} />
    </mesh>
  );
}

const cameraZ = 45;

export function CanvasHome() {
  return (
    <Canvas style={style} camera={{ position: [0, 0, cameraZ] }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 15, 10]} angle={0.3} />
      <ExtendingWalls />
    </Canvas>
  );
}
