import { Suspense, useEffect, useRef, useState } from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Loader, PerformanceMonitor } from "@react-three/drei";
import { Controllers, Hands, XR } from "@react-three/xr";

// COMPONENTS
import { UI } from "./components/UI.js";
import { MyCamControls } from "./components/MyCamControls.js";

// SCENES
import { IntroScene } from "./scenes/__IntroScene.js";
import { Hub } from "./scenes/_Hub.js";
import { TorusScene } from "./scenes/TorusScene.js";
import { SpaceScene } from "./scenes/SpaceScene.js";
import { MachScene } from "./scenes/MachScene.js";
import { StarPunkScene } from "./scenes/StarPunkScene.js";
import { WaterScene } from "./scenes/WaterScene.js";
import { Testing } from "./_testing/_Testing.js";

// VIRTUAL B-DAY CARDS
// import { SandyBday } from "./scenes/bday-cards/SandyBday";
// import { DadBday } from "./scenes/bday-cards/DadBday";

// CSS
import "./css/_intro.css";
import "./css/App.css";
import "./css/buttons.css";
// import "./bday.css";

function App() {
  // useState hooks
  const [start, setStart] = useState(false);
  const [hub, setHub] = useState(false);
  const [foveation, setFoveation] = useState(0);
  const [vrFrameRate, setVrFrameRate] = useState(null);
  // linkClicked is used to reset the CameraControls when a Link is clicked (Scene changes)
  const [linkClicked, setLinkClicked] = useState(false);
  // const [downgradedPerformance, setDowngradedPerformance] = useState(false);
  const [rabbitHoleTexture, setRabbitHoleTexture] = useState("lg");
  const [hubLink, setHubLink] = useState(0);
  const [hubLinkClicked, setHubLinkClicked] = useState(false);

  // State for Torus Controls
  const [bg, setBg] = useState(0);
  const [bgWrapX, setBgWrapX] = useState(3);
  const [bgWrapY, setBgWrapY] = useState(3);
  const [texture, setTexture] = useState(1);
  const [wrapX, setWrapX] = useState(3);
  const [wrapY, setWrapY] = useState(22);
  const [intensity, setIntensity] = useState(1);

  // My functions
  useEffect(() => {
    setTimeout(() => {
      if (linkClicked) setLinkClicked(false);
    }, 1);
  }, [linkClicked]);

  // const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");
  return (
    <div className="App">
      <Loader />
      <UI
        start={start}
        setStart={setStart}
        hub={hub}
        setHub={setHub}
        foveation={foveation}
        setFoveation={setFoveation}
        setVrFrameRate={setVrFrameRate}
        setLinkClicked={setLinkClicked}
        hubLink={hubLink}
        setHubLink={setHubLink}
        hubLinkClicked={hubLinkClicked}
        setHubLinkClicked={setHubLinkClicked}
      />

      <Canvas
        className="canvas"
        camera={{
          position: [0, 0, 1],
          fov: 30,
        }}
      >
        <PerformanceMonitor
          onDecline={(fps) => {
            // setDowngradedPerformance(true);
            setRabbitHoleTexture("med");
          }}
        />

        <Suspense>
          <ambientLight intensity={1} />
          <directionalLight
            // ref={directionalLight}
            position={[1, 1, 1]}
            angle={0.3}
          />
          <XR
            foveation={foveation}
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
            {/* <Hands /> */}

            <MyCamControls linkClicked={linkClicked} />

            <Routes>
              <Route
                index
                element={
                  <IntroScene
                    start={start}
                    setStart={setStart}
                    hub={hub}
                    setHub={setHub}
                    rabbitHoleTexture={rabbitHoleTexture}
                  />
                }
              />
              <Route
                path="/hub"
                element={
                  <Hub hubLink={hubLink} hubLinkClicked={hubLinkClicked} />
                }
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
