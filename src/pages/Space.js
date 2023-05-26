import { SpaceScene } from "./SpaceScene";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

export function Space() {
  return (
    <Canvas className="canvas">
      <ScrollControls pages={5} damping={0.3}>
        <SpaceScene />
      </ScrollControls>
    </Canvas>
  );
}
