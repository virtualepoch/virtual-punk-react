import { SpaceScene } from "./SpaceScene";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { PillLinks } from "../components/PillLinks";

export function Space() {
  return (
    <>
      <h1 className="page-title">Space</h1>
      <Canvas className="canvas space">
        <ScrollControls pages={5} damping={0.3}>
          <SpaceScene />
        </ScrollControls>
      </Canvas>
      <PillLinks backTo={"/torus"} backName={"torus"} forwardTo={"/time"} forwardName={"time"} />
    </>
  );
}
