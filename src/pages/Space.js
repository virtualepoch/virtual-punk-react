import { useState } from "react";
import { SpaceScene } from "./SpaceScene";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { PillLinks } from "../components/PillLinks";
import { CreditsModal } from "../components/CreditsModal";

export function Space() {
  const [modalOpen, setModalOpen] = useState(false);
  // CreditsModal info-
  const model = "space ship";
  const title = '"Space Ship"';
  const link = "https://skfb.ly/6WSsW";
  const credits = `by Pump is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
      `;
      const changes = "Note: Some parts were removed from the original model for this demonstration."
  return (
    <>
      <h1 className="page-title">Space</h1>
      <CreditsModal modalOpen={modalOpen} setModalOpen={setModalOpen} model={model} title={title} link={link} credits={credits} changes={changes}/>
      <Canvas className="canvas space">
        <ScrollControls pages={5} damping={0.3}>
          <SpaceScene />
        </ScrollControls>
      </Canvas>
      <PillLinks backTo="/torus" backName="torus" forwardTo="/time" forwardName="time" />
    </>
  );
}
