import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";

const style = {
  threeJsCanvas: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    zIndex: "-2",
    border: "solid red",
    background: "linear-gradient(to right, rgb(0,100,100), black, rgb(0,100,100))",
      pointerEvents: "none",
  },
};

function Sphere() {
  const props = useTexture({ map: "images/red-cyber.jpg" });
  const meshRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={meshRef} rotation={[0, -1.6, 0]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial {...props} />
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
    meshRef2.current.rotation.x += 0.005;
    meshRef2.current.rotation.y -= 0.005;
    meshRef3.current.rotation.x -= 0.005;
    meshRef4.current.rotation.x -= 0.005;
    meshRef4.current.rotation.y += 0.005;
  });

  return (
    <>
      {" "}
      <mesh ref={meshRef1}>
        <torusGeometry args={[1.1, 0.1, 3, 32]} />
        <meshStandardMaterial color={"aqua"} />
      </mesh>
      <mesh ref={meshRef2}>
        <torusGeometry args={[1.3, 0.1, 3, 32]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh ref={meshRef3}>
        <torusGeometry args={[1.5, 0.1, 3, 32]} />
        <meshStandardMaterial color={"aqua"} />
      </mesh>
      <mesh ref={meshRef4}>
        <torusGeometry args={[1.7, 0.1, 3, 32]} />
        <meshStandardMaterial color={"red"} />
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
    starsRef.current.rotation.y += 0.0005;
  });
  return <Stars ref={starsRef} />;
}

export function ThreeFiberCanvas() {
  return (
    <Canvas style={style.threeJsCanvas} camera={{ position: [0, 0, 5] }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 15, 10]} angle={0.3} />
      <Sphere />
      <TorusGroup />
      <StarsAnim />
    </Canvas>
  );
}
