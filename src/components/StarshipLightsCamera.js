import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export function StarshipLightsCamera() {
  const cameraGroup = useRef();

  useFrame(() => {
    cameraGroup.current.position.z -= 0.4;
  });

  const starship = useRef();

  function Starship() {
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

  document.onkeydown = function (e) {
    if (e.key === "ArrowLeft") {
      starship.current.position.x -= 1;
    }
    if (e.key === "ArrowRight") {
      starship.current.position.x += 1;
    }
    if (e.key === "ArrowUp") {
      starship.current.position.y += 1;
    }
    if (e.key === "ArrowDown") {
      starship.current.position.y -= 1;
    } 
  };

  return (
    <>
      <group ref={cameraGroup}>
        {/* <OrbitControls target={[0, 10, 10]} /> */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 10]} angle={0.3} />

        <PerspectiveCamera position={[0, 10, 25]} rotation={[-0.1, 0, 0]} fov={50} makeDefault />

        <group ref={starship}>
          <Starship />
        </group>
      </group>
    </>
  );
}
