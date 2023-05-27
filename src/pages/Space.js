import { SpaceScene } from "./SpaceScene";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { PillLinks } from "../components/PillLinks";

export function Space() {
  return (
    <>
      <Canvas className="canvas">
        <ScrollControls pages={5} damping={0.3}>
          <SpaceScene />
        </ScrollControls>
      </Canvas>
      <PillLinks backTo="/torus" forwardTo="/time" />
    </>
  );
}
