import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { DragonScene } from "./DragonScene";
import { CreditsModal } from "../../components/CreditsModal";
import { PillLinks } from "../../components/PillLinks";

export function Dragon() {
  const [modalOpen, setModalOpen] = useState(false);

  // CreditsModal info-
  const creditsInfo = [
    {
      id: "00",
      title: "PBR Velociraptor (Animated)",
      link: "https://skfb.ly/oHoUE",
      credits: `by Ferocious Industries is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
      title2: "High detailed rex animation",
      link2: "https://skfb.ly/oGBPT",
      credits2: `by Al-Deezel is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
      title3: "Otodus Megalodon",
      link3: "https://skfb.ly/ooByU",
      credits3: `by CanYuTsai is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
    },
  ];

  return (
    <>
      <h1 className="page-title">Dragon</h1>
      {creditsInfo.map((item) => (
        <CreditsModal modalOpen={modalOpen} setModalOpen={setModalOpen} key={item.id} info={item} />
      ))}
      <Canvas shadows camera={{ position: [-5, 3, 5], rotation: [0, 0, 0], fov: 50 }}>
        <fog attach="fog" args={["gray", 1, 40]}/>
        <DragonScene />
      </Canvas>
      <PillLinks backTo="/portal" backName="portal" forwardTo="/star-punk" forwardName="star-punk" />
    </>
  );
}
