import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { DragonScene } from "./DragonScene";
import { CreditsModal } from "../../components/CreditsModal";
import { PillLinks } from "../../components/PillLinks";
import { Loader } from "@react-three/drei";

export function Dragon() {
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
      <h1 className="page-title">Dragon</h1>
      {creditsInfo.map((item) => (
        <CreditsModal modalOpen={modalOpen} setModalOpen={setModalOpen} key={item.id} info={item} />
      ))}
      <Canvas shadows camera={{ position: [-5, 3, 5], rotation: [0, 0, 0], fov: 50 }}>
        <fog attach="fog" args={["gray", 1, 50]} />
        <Suspense fallback={null}>
          <DragonScene />
        </Suspense>
      </Canvas>
      <Loader />
      <PillLinks backTo="/portal" backName="portal" forwardTo="/star-punk" forwardName="star-punk" />
    </>
  );
}
