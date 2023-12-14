import {
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
} from "@react-three/drei";
import { ScrollOverlay } from "../components/three/ScrollOverlay";
import { WawaOffice } from "../components/models/WawaOffice";
import { useMatch } from "react-router-dom";

export const ScrollScene = () => {
  const match = useMatch("/scroll")
  return (
    <>
      <PerspectiveCamera
        makeDefault={match ? true : false}
        position={[2.3, 1.5, 4]}
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
