import * as THREE from "three";
import { Suspense, useState } from "react";
import { CreditsModal } from "../../components/ui/CreditsModal";
import { Canvas } from "@react-three/fiber";
import { DissolveScene } from "./DissolveScene";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Controllers, Hands, VRButton, XR } from "@react-three/xr";

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
      <mesh>
        <DissolveScene />
      </mesh>

      <primitive object={new THREE.AxesHelper(2)} />
      <primitive object={new THREE.GridHelper(20, 20)} />
    </>
  );
}
