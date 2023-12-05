import { Suspense, useState } from "react";
import { CreditsModal } from "../../components/ui/CreditsModal";
import { Canvas } from "@react-three/fiber";
import { DragonScene } from "./DragonScene";

export function Dragon() {
  const [modalOpen, setModalOpen] = useState(false);

  

  return (
    <>
      <h1 className="page-title">Dragon</h1>
      {creditsInfo.map((item) => (
        <CreditsModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          key={item.id}
          info={item}
        />
      ))}
      <Canvas
        shadows
        camera={{ position: [-5, 3, 5], rotation: [0, 0, 0], fov: 50 }}
      >
        <fog attach="fog" args={["gray", 1, 50]} />
        <Suspense fallback={null}>
          <DragonScene />
        </Suspense>
      </Canvas>
    </>
  );
}
