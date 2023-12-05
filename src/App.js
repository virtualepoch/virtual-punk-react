import { Route, Routes, useMatch } from "react-router-dom";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// COMPONENTS
import { Header } from "./components/ui/Header.js";
import { NavMenu } from "./components/ui/NavMenu.js";
import { BtnFullScreen } from "./components/ui/BtnFullScreen.js";
import { FpsMeter } from "./components/ui/FpsMeter.js";
import { OmniControls } from "./components/OmniControls.js";

// SCENES
import { IntroScene } from "./scenes/_IntroScene.js";
import { TorusScene } from "./scenes/TorusScene.js";
import { SpaceScene } from "./scenes/SpaceScene.js";
import { ScrollScene } from "./scenes/ScrollScene.js";

import { SandyBday } from "./scenes/bday-cards/SandyBday";
import { DadBday } from "./scenes/bday-cards/DadBday";

// CSS
import "./App.css";
import { MachScene } from "./scenes/MachScene.js";
import { StarPunkScene } from "./scenes/StarPunkScene.js";

function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [fpsOpen, setFpsOpen] = useState(false);
  const canvas = useRef();

  // TORUS CONTROLS ///////
  const [bg, setBg] = useState(0);
  const [bgWrapX, setBgWrapX] = useState(3);
  const [bgWrapY, setBgWrapY] = useState(3);

  const [texture, setTexture] = useState(1);
  const [wrapX, setWrapX] = useState(3);
  const [wrapY, setWrapY] = useState(22);

  const [intensity, setIntensity] = useState(1);

  // useMatch hook constants
  const intro = useMatch("/");
  const torus = useMatch("/torus");
  const space = useMatch("/space");
  const scroll = useMatch("/scroll");
  const mach = useMatch("/mach");
  const star = useMatch("/star-punk");

  return (
    <div className="App">
      <Header
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
        intro={intro}
        torus={torus}
        space={space}
        scroll={scroll}
        mach={mach}
        star={star}
      />
      <NavMenu
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
        fpsOpen={fpsOpen}
        setFpsOpen={setFpsOpen}
      />

      <BtnFullScreen />
      <FpsMeter fpsOpen={fpsOpen} setFpsOpen={setFpsOpen} />

      {torus ? <OmniControls /> : <></>}

      <Canvas
        ref={canvas}
        className="canvas"
        camera={{
          position: torus
            ? [0, 0, 10]
            : scroll
            ? [2.3, 1.5, 2.3]
            : mach
            ? [0, 10, 12]
            : star
            ? [0, 8, 15]
            : [0, 0, 20],
          fov: scroll ? 64 : mach || star ? 50 : 20,
        }}
      >
        {torus ? <OrbitControls /> : <></>}

        <Routes>
          <Route index element={<IntroScene />} />
          <Route
            path="/torus"
            element={
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
                intensity={intensity}
              />
            }
          />
          <Route path="/space" element={<SpaceScene />} />
          <Route path="/scroll" element={<ScrollScene />} />
          <Route path="/mach" element={<MachScene />} />
          <Route path="/star-punk" element={<StarPunkScene />} />
        </Routes>
      </Canvas>
    </div>
  );
}

export default App;
