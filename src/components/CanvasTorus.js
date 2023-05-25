import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const style = {
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  background: "linear-gradient(to right, black, aqua, black, aqua, black",
};

function TorusGroup() {
  const meshRef1 = useRef(null);
  const meshRef2 = useRef(null);
  const meshRef3 = useRef(null);
  const meshRef4 = useRef(null);

  useFrame(() => {
    if (!meshRef1.current || !meshRef2.current || !meshRef3.current || !meshRef4.current) {
      return;
    }
    meshRef1.current.rotation.x += 0.01;
    meshRef2.current.rotation.x -= 0.01;
    meshRef3.current.rotation.y -= 0.01;
    meshRef4.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh ref={meshRef1} position={[0, 0, 0]}>
        <torusGeometry args={[0.9, 0.1, 4, 33]} />
        <meshStandardMaterial color={"red"} wireframe={true} />
      </mesh>
      <mesh ref={meshRef2} position={[0, 0, 0]}>
        <torusGeometry args={[1.1, 0.1, 4, 33]} />
        <meshStandardMaterial color={"aqua"} wireframe={true} />
      </mesh>
      <mesh ref={meshRef3} position={[0, 0, 0]}>
        <torusGeometry args={[1.3, 0.1, 4, 33]} />
        <meshStandardMaterial color={"red"} wireframe={true} />
      </mesh>
      <mesh ref={meshRef4} position={[0, 0, 0]}>
        <torusGeometry args={[1.5, 0.1, 4, 33]} />
        <meshStandardMaterial color={"aqua"} wireframe={true} />
      </mesh>
    </>
  );
}

export function CanvasTorus() {
  return (
    <Canvas style={style} camera={{ position: [0, 0, 3] }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 15, 10]} angle={0.3} />
      <TorusGroup />
    </Canvas>
  );
}
