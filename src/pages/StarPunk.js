import { Starship } from "../components/Starship";
import { Canvas } from "@react-three/fiber";

export function StarPunk() {
  const style = {
    h1: {
      position: "absolute",
      top: "80px",
      left: 0,
      zIndex: 4,
      color: "white",
      padding: "10px",
      border: "solid aqua",
    },
    canvas: {
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      border: "solid aqua",
      background: "linear-gradient(to right, rgb(0, 50, 50), black, rgb(0, 50, 50))",
    },
  };

  function ExtendingWalls() {
    const ref = useRef(null);

    // useFrame(() => {
    //   if (ref.current.position.z < 104) {
    //     ref.current.position.z += 0.008;
    //   } else {
    //     ref.current.position.z -= 124;
    //   }
    // });

    return (
      <mesh ref={ref} position={[0, 0, -20]} rotation={[Math.PI / -2, Math.PI / 4, 0]}>
        <cylinderGeometry args={[55, 55, 1120, 4, 500]} />
        <meshBasicMaterial color={"aqua"} wireframe={true} />
      </mesh>
    );
  }

  return (
    <>
      <h1 style={style.h1}>Star Punk</h1>
      <Canvas style={style.canvas}>
        <OrbitControls />
        <ExtendingWalls />
        <Starship />
      </Canvas>
    </>
  );
}
