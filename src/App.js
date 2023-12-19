import { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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

// VR COMPONENTS ////////////////
import { MyVRButton } from "./components/vr/MyVRButton.js";

// CSS
import "./css/_intro.css";
import "./css/App.css";
import "./css/buttons.css";
// import "./bday.css";

import { PortalScene } from "./_testing/PortalScene.js";

function App() {
  // useState hooks
  const [start, setStart] = useState(false); // Where:(UI(BtnStart) & IntroScene), For:(to activate the scene animation)
  const [hub, setHub] = useState(false); // (IntroScene) cancels the IntroScene animation / navigates to the Hub
  const [linkClicked, setLinkClicked] = useState(false); // (UI(NavMenu) & MyCamControls) resets cam posistion when a Link is clicked (Scene changes)
  const [downgradedPerformance, setDowngradedPerformance] = useState(false); // (App(PerformanceMonitor) & IntroScene & TorusScene) lowers asset quality based on fps
  const [hubLink, setHubLink] = useState(0); // (UI(BtnsHub) & Hub) changes the currently displayed hub link
  const [hubBtnClicked, setHubBtnClicked] = useState(false); // (UI(BtnsHub) & Hub(HubLink)) switch to cycle the opacity of the HubLink title and triangle backdrop
  // VR hooks
  const [vrSession, setVrSession] = useState(false);
  const [foveation, setFoveation] = useState(0);
  const [vrFrameRate, setVrFrameRate] = useState(null);

  // My functions
  useEffect(() => {
    setTimeout(() => {
      if (linkClicked) setLinkClicked(false);
    }, 1);

    setTimeout(() => {
      if (hubBtnClicked) setHubBtnClicked(false);
    }, 1000);
  }, [linkClicked, hubBtnClicked]);

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
        hubBtnClicked={hubBtnClicked}
        setHubBtnClicked={setHubBtnClicked}
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
            setDowngradedPerformance(true);
          }}
        />

        <Suspense>
          <MyCamControls linkClicked={linkClicked} />

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
            onSessionStart={() => setVrSession(true)}
            onSessionEnd={() => setVrSession(false)}
          >
            <Controllers />
            {/* <Hands /> */}

            {vrSession && (
              <MyVRButton start={start} setStart={setStart}>
                Start
              </MyVRButton>
            )}

            <Routes>
              <Route
                index
                element={
                  <IntroScene
                    start={start}
                    setStart={setStart}
                    hub={hub}
                    setHub={setHub}
                    downgradedPerformance={downgradedPerformance}
                  />
                }
              />
              <Route
                path="/hub"
                element={
                  <Hub hubLink={hubLink} hubBtnClicked={hubBtnClicked} />
                }
              />
              <Route
                path="/torus"
                element={
                  <TorusScene downgradedPerformance={downgradedPerformance} />
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
