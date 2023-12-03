import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { FooterLinks } from "../../components/FooterLinks";
import { TorusScene } from "./TorusScene";
import { OmniControls } from "../../components/OmniControls";

export function Torus() {
  const [bg, setBg] = useState(1);
  const [bgWrapX, setBgWrapX] = useState(3);
  const [bgWrapY, setBgWrapY] = useState(3);

  const [texture, setTexture] = useState(0);
  const [wrapX, setWrapX] = useState(3);
  const [wrapY, setWrapY] = useState(22);

  return (
    <>
      <OmniControls
        bg={bg}
        setBg={setBg}
        bgWrapX={bgWrapX}
        setBgWrapX={setBgWrapX}
        bgWrapY={bgWrapY}
        setBgWrapY={setBgWrapY}
        texture={texture}
        setTexture={setTexture}
        wrapX={wrapX}
        setWrapX={setWrapX}
        wrapY={wrapY}
        setWrapY={setWrapY}
      />

      <h1 className="page-title">Torus</h1>

      {/* <div className="test"></div> */}

      <Canvas className="canvas torus" camera={{ position: [0, 0, 3] }}>
        <TorusScene
          bg={bg}
          setBg={setBg}
          bgWrapX={bgWrapX}
          setBgWrapX={setBgWrapX}
          bgWrapY={bgWrapY}
          setBgWrapY={setBgWrapY}
          texture={texture}
          setTexture={setTexture}
          wrapX={wrapX}
          setWrapX={setWrapX}
          wrapY={wrapY}
          setWrapY={setWrapY}
        />
      </Canvas>

      <FooterLinks
        backTo="/"
        backName="home"
        forwardTo="/space"
        forwardName="space"
      />
    </>
  );
}
