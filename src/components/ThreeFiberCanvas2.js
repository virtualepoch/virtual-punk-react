import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const style = {
  threeJsCanvas: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    // zIndex: "-2",
    border: "solid red",
    background: "linear-gradient(to right, rgb(0,50,50), black, rgb(0,50,50))",
  },
};

function Cone() {
  const props = useTexture({ map: "images/pyramid-bg.png" });
  const meshRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    // meshRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]} position={[0, 0, 0]}>
      <coneGeometry args={[1, 1, 4]} />
      <meshBasicMaterial {...props} />
    </mesh>
  );
}

export function ThreeFiberCanvas2() {
  return (
    <Canvas style={style.threeJsCanvas} camera={{ position: [0, 0, -5] }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      {/* <directionalLight position={[10, 15, 10]} angle={0.3} /> */}
      <Cone />
    </Canvas>
  );
}
