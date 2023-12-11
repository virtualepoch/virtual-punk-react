import { Suspense, useEffect, useRef, useState } from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Controllers, Hands, VRButton, XR } from "@react-three/xr";

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
import { WaterScene } from "./scenes/WaterScene.js";
import { Testing } from "./_testing/Testing.js";

// VIRTUAL B-DAY CARDS
// import { SandyBday } from "./scenes/bday-cards/SandyBday";
// import { DadBday } from "./scenes/bday-cards/DadBday";

// CSS
import "./_intro.css";
import "./App.css";
import "./buttons.css";
// import "./bday.css";

function App() {
  // useState hooks
  const [start, setStart] = useState(false);
  const [foveation, setFoveation] = useState(0);
  const [vrFrameRate, setVrFrameRate] = useState(null);
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
  const water = useMatch("/water");
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
      <Loader />
      <UI
        start={start}
        setStart={setStart}
        foveation={foveation}
        setFoveation={setFoveation}
        setVrFrameRate={setVrFrameRate}
        setLinkClicked={setLinkClicked}
        intro={intro}
        torus={torus}
        space={space}
        scroll={scroll}
        mach={mach}
        water={water}
        star={star}
      />

      <Canvas
        ref={canvas}
        className="canvas"
        camera={{
          position: [0, 0, 1],
          fov: 30,
        }}
      >
        <Suspense>
          <XR
            /**
             * Enables foveated rendering. Default is `0`
             * 0 = no foveation, full resolution
             * 1 = maximum foveation, the edges render at lower resolution
             */
            foveation={foveation}
            /**
             * The target framerate for the XRSystem. Smaller rates give more CPU headroom at the cost of responsiveness.
             * Recommended range is `72`-`120`. Default is unset and left to the device.
             * @note If your experience cannot effectively reach the target framerate, it will be subject to frame reprojection
             * which will halve the effective framerate. Choose a conservative estimate that balances responsiveness and
             * headroom based on your experience.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Rendering#refresh_rate_and_frame_rate
             */
            frameRate={
              vrFrameRate === 72
                ? 72
                : vrFrameRate === 90
                ? 90
                : vrFrameRate === 120
                ? 120
                : null
            }
          >
            <Controllers />
            <Hands />
            <MyCamControls linkClicked={linkClicked} intro={intro} />

            <Routes>
              <Route
                index
                element={<IntroScene start={start} setStart={setStart} />}
              />
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
              <Route path="/test" element={<Testing />} />
            </Routes>
          </XR>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
