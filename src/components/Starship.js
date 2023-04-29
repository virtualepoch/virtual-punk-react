import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float } from "@react-three/drei";

export const Starship = () => {
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
        {/* NOSE */}
        <mesh position={[0, 0, -2]} rotation={[-Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.5, 4, 3]} />
          <meshStandardMaterial color={"aqua"} wireframe={false} />
        </mesh>

        {/* TAIL */}
        <mesh position={[0, 0.5, 1]} rotation={[Math.PI / 3, Math.PI / 3, 0]}>
          <coneGeometry args={[0.5, 2, 3]} />
          <meshStandardMaterial color={"blue"} wireframe={false} />
        </mesh>
        <mesh position={[0, 0, 1.2]} rotation={[Math.PI / 2, Math.PI / 3, 0]}>
          <coneGeometry args={[0.5, 2, 3]} />
          <meshStandardMaterial color={"purple"} wireframe={false} />
        </mesh>

        {/* WINGS */}
        <mesh position={[-2, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
          <coneGeometry args={[0.5, 4, 3]} />
          <meshStandardMaterial color={"red"} wireframe={false} />
        </mesh>
        <mesh position={[2, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
          <coneGeometry args={[0.5, 4, 3]} />
          <meshStandardMaterial color={"red"} wireframe={false} />
        </mesh>

        {/* THRUSTERS */}
        <mesh position={[-0.6, 0, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.3, 1]} />
          <meshStandardMaterial color={"green"} wireframe={false} />
        </mesh>
        <mesh position={[0.6, 0, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.3, 1]} />
          <meshStandardMaterial color={"green"} wireframe={false} />
        </mesh>
      </>
    );
  }

  const cameraGroup = useRef();

  useFrame(() => {
    cameraGroup.current.position.z -= 0.2;
  });

  return (
    <>
      <OrbitControls />
      <group ref={cameraGroup}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 15, 10]} angle={0.3} />
        <PerspectiveCamera position={[0, 0, 15]} fov={40} makeDefault />
        <Float floatIntensity={2} speed={2}>
          <StarshipGroup />
        </Float>
      </group>
    </>
  );
};
