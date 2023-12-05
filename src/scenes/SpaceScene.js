import { SpaceX } from "./SpaceX";
import { ScrollControls } from "@react-three/drei";

export const SpaceScene = () => {
  return (
    <>
      <ScrollControls pages={5} damping={0.3}>
        <SpaceX />
      </ScrollControls>
    </>
  );
};
