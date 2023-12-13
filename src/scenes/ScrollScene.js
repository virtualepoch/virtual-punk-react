import {
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
} from "@react-three/drei";
import { ScrollOverlay } from "../components/three/ScrollOverlay";
import { WawaOffice } from "../components/models/WawaOffice";

export const ScrollScene = ({ scroll }) => {
  return (
    <>
      <PerspectiveCamera
        makeDefault={scroll ? true : false}
        position={[2.3, 1.5, 10]}
        fov={64}
      />
      {/* <OrbitControls enableZoom={false} /> */}
      <ambientLight intensity={1} />
      <ScrollControls pages={3} damping={0.25}>
        <WawaOffice />
        <ScrollOverlay />
      </ScrollControls>
    </>
  );
};
