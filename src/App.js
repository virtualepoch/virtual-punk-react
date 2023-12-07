import { Route, Routes, useMatch } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";

// COMPONENTS
import { UI } from "./components/UI.js";
import { MyCamControls } from "./components/MyCamControls.js";


// SCENES
import { IntroScene } from "./scenes/_IntroScene.js";
import { TorusScene } from "./scenes/TorusScene.js";
import { SpaceScene } from "./scenes/SpaceScene.js";
import { ScrollScene } from "./scenes/ScrollScene.js";
import { MachScene } from "./scenes/MachScene.js";
import { StarPunkScene } from "./scenes/StarPunkScene.js";

// VIRTUAL B-DAY CARDS
import { SandyBday } from "./scenes/bday-cards/SandyBday";
import { DadBday } from "./scenes/bday-cards/DadBday";

// CSS
import "./App.css";
import "./buttons.css";
import "../src/scenes/_intro.css";
import "./_temp.css";
import { WaterScene } from "./scenes/WaterScene.js";


function App() {
  // useState hooks
  const [linkClicked, setLinkClicked] = useState(false);

  // State for Torus Controls
  const [bg, setBg] = useState(0);
  const [bgWrapX, setBgWrapX] = useState(3);
  const [bgWrapY, setBgWrapY] = useState(3);
  const [texture, setTexture] = useState(1);
  const [wrapX, setWrapX] = useState(3);
  const [wrapY, setWrapY] = useState(22);
  const [intensity, setIntensity] = useState(1);

  // useMatch hooks
  const intro = useMatch("/");
  const torus = useMatch("/torus");
  const space = useMatch("/space");
  const scroll = useMatch("/scroll");
  const mach = useMatch("/mach");
  const star = useMatch("/star-punk");

  // useRef hooks
  const canvas = useRef();

  // My functions
  useEffect(() => {
    setTimeout(() => {
      if (linkClicked) setLinkClicked(false);
    }, 1);
  }, [linkClicked]);

  return (
    <div className="App">
      <UI
        setLinkClicked={setLinkClicked}
        intro={intro}
        torus={torus}
        space={space}
        scroll={scroll}
        mach={mach}
        star={star}
      />
      <Canvas
        ref={canvas}
        className="canvas"
        camera={{
          position: [0, 0, 20],
          fov: 30,
        }}
      >
        {/* {torus ? <OrbitControls /> : <></>} */}

        <MyCamControls linkClicked={linkClicked} intro={intro} />

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
          <Route path="/water" element={<WaterScene />} />
          <Route path="/star-punk" element={<StarPunkScene />} />
        </Routes>
      </Canvas>
    </div>
  );
}

export default App;
