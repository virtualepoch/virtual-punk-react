import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "../../components/models/Office";
import { ScrollOverlay } from "./ScrollOverlay";
import { FooterLinks } from "../../components/FooterLinks";

export function Scroll() {
  return (
    <>
      <h1 className="page-title">scroll</h1>
      <Canvas
        className="canvas"
        camera={{ position: [2.3, 1.5, 2.3], fov: 64 }}
      >
        {/* <OrbitControls enableZoom={false} /> */}
        <ambientLight intensity={1} />
        <ScrollControls pages={3} damping={0.25}>
          <Office />
          <ScrollOverlay />
        </ScrollControls>
      </Canvas>
      <FooterLinks
        backTo="/space"
        backName="space"
        forwardTo="/mach"
        forwardName="mach"
      />
    </>
  );
}
