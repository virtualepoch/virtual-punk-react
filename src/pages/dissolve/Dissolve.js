import { Suspense, useState } from "react";
import { CreditsModal } from "../../components/CreditsModal";
import { Canvas } from "@react-three/fiber";
import { DissolveScene } from "./DissolveScene";
import { PillLinks } from "../../components/PillLinks";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export function Dissolve() {
  const [modalOpen, setModalOpen] = useState(false);

  // CreditsModal info-
  const creditsInfo = [
    {
      id: "00",
      title: "High detailed Dragon Animation running",
      link: "https://skfb.ly/oGzXx",
      credits: `by Al-Deezel is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
      title2: "CLOUD",
      link2: "https://skfb.ly/orUHI",
      credits2: `by asimchitrakar is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
      title3: "Pine Tree - PS1 Low Poly",
      link3: "https://skfb.ly/oFnRn",
      credits3: `by Wersaus33 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
    },
  ];

  return (
    <>
      <h1 className="page-title">Dissolve</h1>
      {/* {creditsInfo.map((item) => (
        <CreditsModal modalOpen={modalOpen} setModalOpen={setModalOpen} key={item.id} info={item} />
      ))} */}
      <Canvas shadows camera={{ position: [-5, 3, 5], rotation: [0, 0, 0], fov: 50 }}>
        <Suspense fallback={null}>
          <DissolveScene />
        </Suspense>
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={1.25} mipmapBlur/>
        </EffectComposer>
      </Canvas>
      <PillLinks backTo="/dragon" backName="dragon" forwardTo="/star-punk" forwardName="star-punk" />
    </>
  );
}
