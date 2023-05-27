import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import star from "../assets/images/red-star.png";
import { PillLinks } from "../components/PillLinks";

export function Torus() {
  var torusRotSpeed = 0.01;

  function TorusGroup() {
    const meshRef1 = useRef(null);
    const meshRef2 = useRef(null);
    const meshRef3 = useRef(null);
    const meshRef4 = useRef(null);

    useFrame(() => {
      if (!meshRef1.current || !meshRef2.current || !meshRef3.current || !meshRef4.current) {
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

  function Image() {
    const texture = useLoader(THREE.TextureLoader, star);
    return (
      <mesh>
        <planeBufferGeometry attach="geometry" args={[1, 1]} />
        <meshPhongMaterial attach="material" map={texture} transparent />
      </mesh>
    );
  }

  return (
    <>
      <h1 className="page-title">Torus</h1>
      <Canvas className="canvas torus" camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <TorusGroup />
        <Image />
      </Canvas>
      <PillLinks backTo={"/"} backName={"home"} forwardTo={"/space"} forwardName={"space"} />
    </>
  );
}
