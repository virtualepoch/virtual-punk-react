import { Suspense, useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Loader,
  OrbitControls,
  PerformanceMonitor,
  PerspectiveCamera,
  Sphere,
} from "@react-three/drei";
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
import { TestingStage } from "./_testing/_TestingStage.js";
import { TestingBlank } from "./_testing/_TestingBlank.js";
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

function App() {
  // useState hooks
  const [start, setStart] = useState(false); // Where:(UI(BtnStart) & IntroScene), For:(to activate the scene animation)
  const [hub, setHub] = useState(false); // (IntroScene) cancels the IntroScene animation / navigates to the Hub
  const [linkClicked, setLinkClicked] = useState(false); // (UI(NavMenu) & MyCamControls) resets cam posistion when a Link is clicked (Scene changes)
  const [performance, setPerformance] = useState(1); // ("0-2") (App(PerformanceMonitor) & IntroScene & TorusScene) lowers asset quality based on fps
  const [hubLink, setHubLink] = useState(0); // (UI(BtnsHub) & Hub) changes the currently displayed hub link
  const [hubBtnClicked, setHubBtnClicked] = useState(false); // (UI(BtnsHub) & Hub(HubLink)) switch to cycle the opacity of the HubLink title and triangle backdrop
  // VR hooks
  const [vrSession, setVrSession] = useState(false);
  const [foveation, setFoveation] = useState(0);
  const [vrFrameRate, setVrFrameRate] = useState(null);
  // useRef hooks
  const camControls = useRef();
  const player = useRef();

  // My functions
  useEffect(() => {
    setTimeout(() => {
      if (linkClicked) setLinkClicked(false);
    }, 1);

    setTimeout(() => {
      if (hubBtnClicked) setHubBtnClicked(false);
    }, 1000);
  }, [linkClicked, hubBtnClicked]);

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
          fov: 30,
          position: [0, 0, 1],
        }}
      >
        <PerformanceMonitor
          bounds={(fps) => (fps > 90 ? [50, 90] : [40, 60])}
          onDecline={(fps) => {
            setPerformance(0);
          }}
          onIncline={(fps) => {
            setPerformance(2);
          }}
        />

        <Suspense>
          <MyCamControls
            camControls={camControls}
            player={player}
            linkClicked={linkClicked}
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

            <Sphere ref={player} args={[0.1, 4, 3]} position={[0, 0, 100]}>
              <meshBasicMaterial
                color={"white"}
                wireframe
                transparent
                opacity={0}
              />
            </Sphere>

            <Routes>
              <Route
                index
                element={
                  <IntroScene
                    player={player}
                    camControls={camControls}
                    start={start}
                    setStart={setStart}
                    hub={hub}
                    setHub={setHub}
                    performance={performance}
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
                element={<TorusScene performance={performance} />}
              />
              <Route path="/space" element={<SpaceScene />} />
              <Route
                path="/mach"
                element={
                  <MachScene
                    // camera={camera}
                    performance={performance}
                  />
                }
              />
              <Route path="/water" element={<WaterScene />} />
              <Route path="/star-punk" element={<StarPunkScene />} />
              <Route
                path="/test-stage"
                element={
                  <TestingStage
                  // camera={camera}
                  // camControls={camControls}
                  />
                }
              />
              <Route path="/test-blank" element={<TestingBlank />} />
            </Routes>
          </XR>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
