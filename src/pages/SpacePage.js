import { SpaceScene } from "../components/SpaceScene";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

export function SpacePage() {
  const style = {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: "2",
    background: "linear-gradient(to right, black, aqua, black",
  };
  return (
    <Canvas style={style}>
      <ScrollControls pages={5} damping={0.3}>
        <SpaceScene />
      </ScrollControls>
    </Canvas>
  );
}
