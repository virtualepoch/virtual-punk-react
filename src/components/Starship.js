import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const style = {
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  border: "solid aqua",
  background: "linear-gradient(to right, rgb(0, 50, 50), black, rgb(0, 50, 50))",
};

function StarshipGroup() {
  // const meshRef1 = useRef(null);
  // const meshRef2 = useRef(null);
  // const meshRef3 = useRef(null);
  // const meshRef4 = useRef(null);

  // useFrame(() => {
  //   if (!meshRef1.current || !meshRef2.current || !meshRef3.current || !meshRef4.current) {
  //     return;
  //   }
  //   meshRef1.current.rotation.x += 0.02;
  //   meshRef2.current.rotation.x -= 0.02;
  //   meshRef3.current.rotation.y -= 0.02;
  //   meshRef4.current.rotation.y += 0.02;
  // });

  return (
    <>
      <mesh position={[0, 0, -2]} rotation={[-Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.5, 4, 3]} rotateX={Math.PI / 2} />
        <meshStandardMaterial color={"aqua"} wireframe={false} />
      </mesh>
      <mesh position={[0, 0.5, 1]} rotation={[Math.PI / 3, Math.PI / 3, 0]}>
        <coneGeometry args={[0.5, 2, 3]} rotateX={Math.PI / 2} />
        <meshStandardMaterial color={"blue"} wireframe={false} />
      </mesh>
      <mesh position={[-2, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <coneGeometry args={[0.5, 4, 3]} rotateX={Math.PI / 2} />
        <meshStandardMaterial color={"red"} wireframe={false} />
      </mesh>
      <mesh position={[2, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.5, 4, 3]} rotateX={Math.PI / 2} />
        <meshStandardMaterial color={"red"} wireframe={false} />
      </mesh>
    </>
  );
}

export function Starship() {
  return (
    <Canvas style={style} camera={{ position: [0, 0, 3] }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 15, 10]} angle={0.3} />
      <StarshipGroup />
    </Canvas>
  );
}
