import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PillLinks } from "../../components/PillLinks";

export function Torus() {
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
      meshRef1.current.rotation.x += torusRotSpeed;
      meshRef2.current.rotation.x -= torusRotSpeed;
      meshRef3.current.rotation.y -= torusRotSpeed;
      meshRef4.current.rotation.y += torusRotSpeed;
    });

    return (
      <>
        <mesh ref={meshRef1} position={[0, 0, 0]}>
          <torusGeometry args={[0.9, 0.1, 4, 33]} />
          <meshStandardMaterial color="red" wireframe={true} />
        </mesh>
        <mesh ref={meshRef2} position={[0, 0, 0]}>
          <torusGeometry args={[1.1, 0.1, 4, 33]} />
          <meshStandardMaterial color="aqua" wireframe={true} />
        </mesh>
        <mesh ref={meshRef3} position={[0, 0, 0]}>
          <torusGeometry args={[1.3, 0.1, 4, 33]} />
          <meshStandardMaterial color="red" wireframe={true} />
        </mesh>
        <mesh ref={meshRef4} position={[0, 0, 0]}>
          <torusGeometry args={[1.5, 0.1, 4, 33]} />
          <meshStandardMaterial color="aqua" wireframe={true} />
        </mesh>
      </>
    );
  }

  function Sphere() {
    const sphere = useRef(null);

    useFrame(() => {
      sphere.current.rotation.y += 0.5;
    });
    return (
      <mesh ref={sphere}>
        <sphereGeometry args={[0.2, 4, 2]} />
        <meshBasicMaterial color="red" wireframe={true} />
      </mesh>
    );
  }

  return (
    <>
      <h1 className="page-title">Torus</h1>
      <Canvas className="canvas torus" camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <TorusGroup />
        <Sphere />
      </Canvas>
      <PillLinks
        backTo="/"
        backName="home"
        forwardTo="/space"
        forwardName="space"
      />
    </>
  );
}
