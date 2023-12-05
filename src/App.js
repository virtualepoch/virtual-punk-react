import { Route, Routes, useMatch } from "react-router-dom";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, OrbitControls } from "@react-three/drei";

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
import { MyCamControls } from "./components/three/CamControls.js";

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

  const [controls, setControls] = useState(false);

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

      <button
        className="btn-use-controls"
        onClick={() => setControls(!controls)}
      />
      <button
        className="btn-info"
      />

      {torus ? <OmniControls /> : <></>}

      <Canvas
        ref={canvas}
        className="canvas"
        camera={{
          position: [0, 10, 20],
          fov: 30,
        }}
      >
        {/* {torus ? <OrbitControls /> : <></>} */}

        {controls && <MyCamControls />}

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
