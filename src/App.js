import { Route, Routes, useMatch } from "react-router-dom";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";

// COMPONENTS
import { Header } from "./components/ui/Header.js";
import { NavMenu } from "./components/ui/NavMenu.js";
import { BtnFullScreen } from "./components/ui/BtnFullScreen.js";
import { FpsMeter } from "./components/ui/FpsMeter.js";
import { OmniControls } from "./components/OmniControls.js";
import { MyCamControls } from "./components/three/MyCamControls.js";

// SCENES
import { IntroScene } from "./scenes/_IntroScene.js";
import { TorusScene } from "./scenes/TorusScene.js";
import { SpaceScene } from "./scenes/SpaceScene.js";
import { ScrollScene } from "./scenes/ScrollScene.js";
import { MachScene } from "./scenes/MachScene.js";
import { StarPunkScene } from "./scenes/StarPunkScene.js";

import { SandyBday } from "./scenes/bday-cards/SandyBday";
import { DadBday } from "./scenes/bday-cards/DadBday";

// CSS
import "./App.css";
import "./buttons.css";
import { CreditsModal } from "./components/ui/CreditsModal.js";

function App() {
  // useState hooks
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [fpsMeter, setFpsMeter] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  // State for Torus Controls
  const [bg, setBg] = useState(0);
  const [bgWrapX, setBgWrapX] = useState(3);
  const [bgWrapY, setBgWrapY] = useState(3);
  const [texture, setTexture] = useState(1);
  const [wrapX, setWrapX] = useState(3);
  const [wrapY, setWrapY] = useState(22);
  const [intensity, setIntensity] = useState(1);

  const [myCamControls, setMyCamControls] = useState(false);

  // useMatch hooks
  const intro = useMatch("/");
  const torus = useMatch("/torus");
  const space = useMatch("/space");
  const scroll = useMatch("/scroll");
  const mach = useMatch("/mach");
  const star = useMatch("/star-punk");

  // useRef hooks
  const canvas = useRef();

  // CreditsModal info-
  const creditsInfo = [
    {
      id: "00",
      title: "title",
      link: "link",
      credits: `credits`,
      title2: "title2",
      link2: "link2",
      credits2: `credits2`,
      title3: "title3",
      link3: "link3",
      credits3: `credits3`,
    },
  ];

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
        myCamControls={myCamControls}
        setMyCamControls={setMyCamControls}
        fpsMeter={fpsMeter}
        setFpsMeter={setFpsMeter}
      />

      <BtnFullScreen />
      <FpsMeter fpsMeter={fpsMeter} setFpsMeter={setFpsMeter} />

      <button
        className="btn-info"
        onClick={() => setInfoModalOpen(!infoModalOpen)}
      >
        <div className="info-icon"></div>
      </button>

      {creditsInfo.map((item) => (
        <CreditsModal
          infoModalOpen={infoModalOpen}
          setInfoModalOpen={setInfoModalOpen}
          key={item.id}
          info={item}
        />
      ))}

      {torus ? <OmniControls /> : <></>}

      <Canvas
        ref={canvas}
        className="canvas"
        camera={{
          position: [0, 0, 20],
          fov: 30,
        }}
      >
        {/* {torus ? <OrbitControls /> : <></>} */}

        {myCamControls && <MyCamControls />}

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
