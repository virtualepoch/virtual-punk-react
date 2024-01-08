import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Loader, PerformanceMonitor } from "@react-three/drei";
import { Controllers, Hands, XR } from "@react-three/xr";

// COMPONENTS
import { UI } from "./components/UI.js";

// SCENES
import { IntroScene } from "./scenes/__IntroScene.js";
import { Hub } from "./scenes/_Hub.js";
import { TorusScene } from "./scenes/TorusScene.js";
import { MachScene } from "./scenes/MachScene.js";
import { PanicScene } from "./scenes/PanicScene.js";
import { PunkScene } from "./scenes/PunkScene.js";
import { TestScene } from "./scenes/ZtestScene.js";

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

// Idahome Stuff /////////////////////////////////////
import { IdahomeUI } from "./__idahome/components/IdahomeUI.js";
import { IdahomeScene } from "./scenes/___IdahomeScene.js";
import "./__idahome/idahome.css";

function App() {
  // useState hooks
  const [start, setStart] = useState(false); // Where:(UI(BtnStart) & IntroScene), For:(to activate the scene animation)
  const [hub, setHub] = useState(false); // (IntroScene) cancels the IntroScene animation / navigates to the Hub
  const [linkClicked, setLinkClicked] = useState(false); // (UI(NavMenu) & MyCamControls) resets cam position when a Link is clicked (Scene changes)
  const [performanceLevel, setPerformanceLevel] = useState(1); // ("0-2") (App(PerformanceMonitor) & all scenes) the lower the number the lower the devices performance. Lowers asset quality based on fps
  const [hubLink, setHubLink] = useState(0); // (UI(BtnsHub) & Hub) changes the currently displayed hub link
  const [hubBtnClicked, setHubBtnClicked] = useState(false); // (UI(BtnsHub) & Hub(HubLink)) switch to cycle the opacity of the HubLink title and triangle backdrop
  const [modalInfoOpen, setModalInfoOpen] = useState(false);
  const [modalVROpen, setModalVROpen] = useState(false);
  const [fpsMeter, setFpsMeter] = useState(false);

  // VR hooks
  const [vrSession, setVrSession] = useState(false);
  const [foveation, setFoveation] = useState(0);
  const [vrFrameRate, setVrFrameRate] = useState(null);

  // TorusScene hooks
  const [thirdPerson, setThirdPerson] = useState(false);

  // My functions
  useEffect(() => {
    setTimeout(() => {
      if (linkClicked) setLinkClicked(false);
    }, 1);

    setTimeout(() => {
      if (hubBtnClicked) setHubBtnClicked(false);
    }, 1000);
  }, [linkClicked, hubBtnClicked]);

  // IdahomeServ Stuff /////////////////
  const idahomeActive = useMatch("/idahome");

  return (
    <div className="App">
      <Loader />
      {idahomeActive ? (
        <IdahomeUI     fpsMeter={fpsMeter}
        setFpsMeter={setFpsMeter}/>
      ) : (
        <UI
          start={start}
          setStart={setStart}
          hub={hub}
          setHub={setHub}
          setLinkClicked={setLinkClicked}
          hubLink={hubLink}
          setHubLink={setHubLink}
          hubBtnClicked={hubBtnClicked}
          setHubBtnClicked={setHubBtnClicked}
          modalInfoOpen={modalInfoOpen}
          setModalInfoOpen={setModalInfoOpen}
          modalVROpen={modalVROpen}
          setModalVROpen={setModalVROpen}
          //VR hooks
          foveation={foveation}
          setFoveation={setFoveation}
          setVrFrameRate={setVrFrameRate}
          // TorusScene
          thirdPerson={thirdPerson}
          setThirdPerson={setThirdPerson}
          performanceLevel={performanceLevel}
          fpsMeter={fpsMeter}
          setFpsMeter={setFpsMeter}
        />
      )}

      <Canvas className="canvas" camera={{ fov: 30, position: [0, 0, 1] }}>
        <PerformanceMonitor
          bounds={(fps) => (fps > 90 ? [50, 90] : [40, 60])}
          onDecline={(fps) => {
            setPerformanceLevel(0);
          }}
          onIncline={(fps) => {
            setPerformanceLevel(2);
          }}
        />

        <Suspense>
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
                    performanceLevel={performanceLevel}
                  />
                }
              />

              <Route
                path="/hub"
                element={
                  <Hub
                    hubLink={hubLink}
                    setHubLink={setHubLink}
                    hubBtnClicked={hubBtnClicked}
                    performanceLevel={performanceLevel}
                    setModalInfoOpen={setModalInfoOpen}
                  />
                }
              />

              <Route
                path="/torus"
                element={
                  <TorusScene
                    performanceLevel={performanceLevel}
                    thirdPerson={thirdPerson}
                  />
                }
              />

              <Route
                path="/mach"
                element={
                  <MachScene
                    performanceLevel={performanceLevel}
                    vrSession={vrSession}
                  />
                }
              />

              <Route
                path="/panic"
                element={
                  <PanicScene
                    performanceLevel={performanceLevel}
                    vrSession={vrSession}
                  />
                }
              />

              <Route
                path="/punk"
                element={<PunkScene performanceLevel={performanceLevel} />}
              />

              <Route
                path="/test"
                element={<TestScene performanceLevel={performanceLevel} />}
              />

              <Route
                path="/idahome"
                element={<IdahomeScene performanceLevel={performanceLevel} />}
              />
            </Routes>
          </XR>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
