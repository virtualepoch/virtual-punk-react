import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "../components/models/Office";
import { CanvasScrollAnimOverlay } from "./ScrollAnimOverlay";
import { PillLinks } from "../components/PillLinks";

const style = {
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: "2",
  border: "solid aqua",
  backgroundColor: "#d9afd9",
  backgroundImage: "linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%)",
};

export function ScrollAnim() {
  return (
    <>
    <h1 className="page-title">scroll</h1>
      <Canvas style={style} camera={{ position: [2.3, 1.5, 2.3], fov: 64 }}>
        {/* <OrbitControls enableZoom={false} /> */}
        <ambientLight intensity={1} />
        <ScrollControls pages={3} damping={0.25}>
          <Office />
          <CanvasScrollAnimOverlay />
        </ScrollControls>
      </Canvas>
      <PillLinks backTo={"/shoe"} backName={"shoe"} forwardTo={"/moch"} forwardName={"moch"} />
    </>
  );
}
