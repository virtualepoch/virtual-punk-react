import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { FooterLinks } from "../../components/FooterLinks";

function CubeGroup() {
  const meshRef1 = useRef(null);
  const meshRef2 = useRef(null);
  const meshRef3 = useRef(null);
  const meshRef4 = useRef(null);
  const meshRef5 = useRef(null);

  useFrame(() => {
    const rotateSpeed = 0.015;
    if (
      !meshRef1.current ||
      !meshRef2.current ||
      !meshRef3.current ||
      !meshRef4.current ||
      !meshRef4.current
    ) {
      return;
    }

    meshRef1.current.rotation.x += rotateSpeed;
    meshRef2.current.rotation.x -= rotateSpeed;
    meshRef3.current.rotation.x += rotateSpeed;
    meshRef4.current.rotation.x -= rotateSpeed;
    meshRef5.current.rotation.x += rotateSpeed;
  }, []);

  return (
    <>
      <mesh ref={meshRef1} position={[-2, 0, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="cyan" wireframe={false} />
      </mesh>
      <mesh ref={meshRef2} position={[-1, 0, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="cyan" wireframe={false} />
      </mesh>
      <mesh ref={meshRef3} position={[0, 0, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="cyan" wireframe={false} />
      </mesh>
      <mesh ref={meshRef4} position={[1, 0, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="cyan" wireframe={false} />
      </mesh>
      <mesh ref={meshRef5} position={[2, 0, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="cyan" wireframe={false} />
      </mesh>
    </>
  );
}

export function Time() {
  return (
    <>
      <h1 className="page-title">Time</h1>
      <Canvas className="canvas" camera={{ position: [0, 0, 5] }}>
        <directionalLight position={[0, 15, 10]} angle={0.3} />
        <group position={[0, -3, 0]}>
          <CubeGroup />
        </group>
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
      </Canvas>
      <FooterLinks
        backTo="/space"
        backName="space"
        forwardTo="/scroll"
        forwardName="scroll"
      />
    </>
  );
}
