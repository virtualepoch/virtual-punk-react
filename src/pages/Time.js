import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PillLinks } from "../components/PillLinks";

const style = {
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  background: "linear-gradient(to right, rgb(0, 50, 50), black, rgb(0, 50, 50))",
};

function CubeGroup() {
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
    meshRef3.current.rotation.x -= 0.01;
    meshRef4.current.rotation.x += 0.01;
  });

  return (
    <>
      <mesh ref={meshRef1} position={[-2, 0, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="aqua" wireframe={false} />
      </mesh>
      <mesh ref={meshRef2} position={[-1, 0, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="aqua" wireframe={false} />
      </mesh>
      <mesh ref={meshRef3} position={[1, 0, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="aqua" wireframe={false} />
      </mesh>
      <mesh ref={meshRef4} position={[2, 0, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="aqua" wireframe={false} />
      </mesh>
    </>
  );
}

export function Time() {
  return (
    <>
      <h1 className="page-title">Time</h1>
      <Canvas style={style} camera={{ position: [0, 0, 5] }}>
        {/* <OrbitControls /> */}
        {/* <ambientLight intensity={0.5} /> */}
        <directionalLight position={[0, 15, 10]} angle={0.3} />
        <group position={[0, -2, 0]}>
          <CubeGroup />
        </group>
        <group position={[0, -1, 0]}>
          <CubeGroup />
        </group>
        <CubeGroup />
        <group position={[0, 1, 0]}>
          <CubeGroup />
        </group>
        <group position={[0, 2, 0]}>
          <CubeGroup />
        </group>
        <group position={[0, 3, 0]}>
          <CubeGroup />
        </group>
        <group position={[0, 4, 0]}>
          <CubeGroup />
        </group>
        <group position={[0, -3, 0]}>
          <CubeGroup />
        </group>
      </Canvas>
      <PillLinks backTo="/space" backName="space" forwardTo="/scroll" forwardName="scroll" />
    </>
  );
}
