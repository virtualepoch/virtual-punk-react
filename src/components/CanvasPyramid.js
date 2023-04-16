import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Model } from "./models/FtmLow";

const style = {
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: "2",
  border: "solid aqua",
  background: "linear-gradient(to right, rgb(0,50,50), black, rgb(0,50,50))",
};

// function Pyramid() {
//   const props = useTexture({ map: "images/pyramid-bg.png" });
//   const meshRef = useRef(null);

//   useFrame(() => {
//     if (!meshRef.current) {
//       return;
//     }
//     meshRef.current.rotation.y += 0.02;
//   });

//   return (
//     <mesh ref={meshRef} rotation={[0, 0, 0]} position={[0, 0, 0]}>
//       <coneGeometry args={[1, 1, 4]} />
//       <meshBasicMaterial color={"aqua"} wireframe={true} />
//     </mesh>
//   );
// }

export function CanvasPyramid() {
  return (
    <Canvas style={style} camera={{ position: [0, 2, 5] }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 15, 10]} angle={0.3} />
      <Model />
    </Canvas>
  );
}
