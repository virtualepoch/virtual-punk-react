import { SpaceScene } from "../components/SpaceScene";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

export function PyramidPage() {
  const style = {
    threeJsTestSection: {
      width: "100vw",
      height: "calc(100vh - 80px)",
      border: "4px solid white",
      position: "absolute",
      left: 0,
    },
    h1: {
      color: "white",
      padding: "10px",
    },
    canvas: {
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: "2",
      border: "solid aqua",
      // background: "linear-gradient(to right, rgb(0,50,50), black, rgb(0,50,50))",
    },
  };
  return (
    <div style={style.threeJsTestSection}>
      <h1 style={style.h1}>React Three Fiber Pyramid</h1>
      {/* <div className="test"></div> */}
      <Canvas style={style.canvas}>
        <ScrollControls pages={5} damping={0.3}>
          <SpaceScene />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
