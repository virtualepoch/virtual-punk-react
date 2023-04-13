import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

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

function Sphere() {
  const meshRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.y += 0.1;
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]} position={[0, 0, 0]}>
      <sphereGeometry args={[0.5, 8, 2]} />
      <meshStandardMaterial color={"aqua"} wireframe={true} />
    </mesh>
  );
}

function TorusGroup() {
  const meshRef1 = useRef(null);
  const meshRef2 = useRef(null);
  const meshRef3 = useRef(null);
  const meshRef4 = useRef(null);

  useFrame(() => {
    if (!meshRef1.current || !meshRef2.current || !meshRef3.current || !meshRef4.current) {
      return;
    }
    meshRef1.current.rotation.x += 0.005;
    meshRef2.current.rotation.y -= 0.005;
    meshRef3.current.rotation.x -= 0.005;
    meshRef4.current.rotation.y += 0.005;
  });

  return (
    <>
      <mesh ref={meshRef1} position={[0, 0, 0]}>
        <torusGeometry args={[1.1, 0.05, 3, 4]} />
        <meshStandardMaterial color={"red"} wireframe={false} />
      </mesh>
      <mesh ref={meshRef2} position={[0, 0, 0]}>
        <torusGeometry args={[1.3, 0.05, 3, 4]} />
        <meshStandardMaterial color={"aqua"} wireframe={false} />
      </mesh>
      <mesh ref={meshRef3} position={[0, 0, 0]}>
        <torusGeometry args={[1.5, 0.05, 3, 4]} />
        <meshStandardMaterial color={"red"} wireframe={false} />
      </mesh>
      <mesh ref={meshRef4} position={[0, 0, 0]}>
        <torusGeometry args={[1.7, 0.05, 3, 4]} />
        <meshStandardMaterial color={"aqua"} wireframe={false} />
      </mesh>
    </>
  );
}

function StarsAnim() {
  const starsRef = useRef(null);
  useFrame(() => {
    if (!starsRef.current) {
      return;
    }
    starsRef.current.rotation.y += 0.0003;
  });
  return <Stars ref={starsRef} />;
}

export function CanvasHome() {
  return (
    <Canvas style={style} camera={{ position: [0, 0, 3] }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 15, 10]} angle={0.3} />
      <Sphere />
      <TorusGroup />
      <StarsAnim />
    </Canvas>
  );
}
