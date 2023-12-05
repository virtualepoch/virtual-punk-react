import { ScrollControls } from "@react-three/drei";
import { Office } from "../components/models/Office";
import { ScrollOverlay } from "../components/three/ScrollOverlay";

export function ScrollScene() {
  return (
    <>
      {/* <OrbitControls enableZoom={false} /> */}
      <ambientLight intensity={1} />
      <ScrollControls pages={3} damping={0.25}>
        <Office />
        <ScrollOverlay />
      </ScrollControls>
    </>
  );
}
