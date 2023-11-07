import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Cake } from "./Cake";

export function SandyBday() {
  var torusRotSpeed = 0.01;

  function TorusGroup() {
    const meshRef1 = useRef(null);
    const meshRef2 = useRef(null);
    const meshRef3 = useRef(null);
    const meshRef4 = useRef(null);

    useFrame(() => {
      if (
        !meshRef1.current ||
        !meshRef2.current ||
        !meshRef3.current ||
        !meshRef4.current
      ) {
        return;
      }
      meshRef1.current.rotation.z += torusRotSpeed;
      meshRef2.current.rotation.z -= torusRotSpeed;
      meshRef3.current.rotation.z += torusRotSpeed;
      meshRef4.current.rotation.z -= torusRotSpeed;
    });

    return (
      <mesh position-z={-1}>
        <mesh ref={meshRef1} position={[0, 0, 0]}>
          <torusGeometry args={[0.9, 0.1, 4, 33]} />
          <meshStandardMaterial color="crimson" wireframe={true} />
        </mesh>
        <mesh ref={meshRef2} position={[0, 0, 0]}>
          <torusGeometry args={[1.1, 0.1, 4, 33]} />
          <meshStandardMaterial color="aqua" wireframe={true} />
        </mesh>
        <mesh ref={meshRef3} position={[0, 0, 0]}>
          <torusGeometry args={[1.3, 0.1, 4, 33]} />
          <meshStandardMaterial color="crimson" wireframe={true} />
        </mesh>
        <mesh ref={meshRef4} position={[0, 0, 0]}>
          <torusGeometry args={[1.5, 0.1, 4, 33]} />
          <meshStandardMaterial color="aqua" wireframe={true} />
        </mesh>
      </mesh>
    );
  }

  function CakeSpin() {
    const cake = useRef(null);

    useFrame(() => {
      cake.current.rotation.y += 0.005;
    });
    return (
      <mesh ref={cake} position={[0, -1.5, 0]}>
        <Cake />
      </mesh>
    );
  }

  return (
    <>
      <h1 className="page-title">Happy Birthday Sandy!</h1>
      <Canvas className="canvas torus" camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <TorusGroup />
        <CakeSpin />
      </Canvas>
    </>
  );
}
