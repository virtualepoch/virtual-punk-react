import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PortalScene } from "./PortalScene";
import { CreditsModal } from "../../components/ui/CreditsModal";

export function Portal() {
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
      <h1 className="page-title">Portal</h1>
      {creditsInfo.map((item) => (
        <CreditsModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          key={item.id}
          info={item}
        />
      ))}
      <Canvas camera={{ position: [0, 0, 10], rotation: [0, 0, 0], fov: 70 }}>
        <Suspense fallback={null}>
          <PortalScene />
        </Suspense>
      </Canvas>
    </>
  );
}
