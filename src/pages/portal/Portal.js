import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PortalScene } from "./PortalScene";
import { CreditsModal } from "../../components/CreditsModal";
import { PillLinks } from "../../components/PillLinks";

export function Portal() {
  const [modalOpen, setModalOpen] = useState(false);

  // CreditsModal info-
  const creditsInfo = [
    {
      id: "00",
      title: "Great White Shark",
      link: "https://skfb.ly/6ADoX",
      credits: `by BlueMesh is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
      title2: "Otodus Megalodon",
      link2: "https://skfb.ly/ooByU",
      credits2: `by CanYuTsai is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
      title3: "Head",
      link3: "https://skfb.ly/oI8BX",
      credits3: `by Shedmon is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
    },
  ];

  return (
    <>
      <h1 className="page-title">Portal</h1>
      {creditsInfo.map((item) => (
        <CreditsModal modalOpen={modalOpen} setModalOpen={setModalOpen} key={item.id} info={item} />
      ))}
      <Canvas camera={{ position: [0, 0, 10], rotation: [0, 0, 0], fov: 70 }}>
        <PortalScene />
      </Canvas>
      <PillLinks backTo="/mach" backName="mach" forwardTo="/star-punk" forwardName="star-punk" />
    </>
  );
}
