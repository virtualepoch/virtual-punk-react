import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PillLinks } from "../../components/PillLinks";
import { TorusScene } from "./TorusScene";
import { OmniControls } from "../../components/OmniControls";

export function Torus() {
  const [texture, setTexture] = useState(0);
  const [wrapX, setWrapX] = useState(3);
  const [wrapY, setWrapY] = useState(22);

  return (
    <>
      <OmniControls
        texture={texture}
        setTexture={setTexture}
        wrapX={wrapX}
        setWrapX={setWrapX}
        wrapY={wrapY}
        setWrapY={setWrapY}
      />

      <h1 className="page-title">Torus</h1>

      <Canvas className="canvas torus" camera={{ position: [0, 0, 3] }}>
        <TorusScene
          texture={texture}
          setTexture={setTexture}
          wrapX={wrapX}
          setWrapX={setWrapX}
          wrapY={wrapY}
          setWrapY={setWrapY}
        />
      </Canvas>

      <PillLinks
        backTo="/"
        backName="home"
        forwardTo="/space"
        forwardName="space"
      />
    </>
  );
}
