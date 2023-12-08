import { ScrollControls } from "@react-three/drei";
import { ScrollOverlay } from "../components/three/ScrollOverlay";
import { WawaOffice } from "../components/models/WawaOffice";

export function ScrollScene() {
  return (
    <>
      {/* <OrbitControls enableZoom={false} /> */}
      <ambientLight intensity={1} />
      <ScrollControls pages={3} damping={0.25}>
        <WawaOffice />
        <ScrollOverlay />
      </ScrollControls>
    </>
  );
}
