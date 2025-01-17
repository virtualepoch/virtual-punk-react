import { useState } from "react";
import { useMatch } from "react-router-dom";

// UI COMPONENTS //
import { MainOverlay } from "./ui/MainOverlay";
import { BtnFullScreen } from "./ui/buttons/BtnFullScreen";
import { Header } from "./ui/Header";
import { NavMenu } from "./ui/NavMenu";
import { FpsMeter } from "./ui/FpsMeter";
// import { Leva } from "leva";
import { ModalInfo } from "./ui/modals/ModalInfo";
import { ModalVR } from "./ui/modals/ModalVR";
import { BtnStart } from "./ui/buttons/BtnStart";
import { HeroSection } from "./ui/HeroSection";
import { BtnsHub } from "./ui/buttons/BtnsHub";

export const UI = ({
  start,
  setStart,
  setHub,
  foveation,
  setFoveation,
  setLinkClicked,
  hubLink,
  setHubLink,
  hubBtnClicked,
  setHubBtnClicked,
  thirdPerson,
  setThirdPerson,
  performanceLevel,
  modalInfoOpen,
  setModalInfoOpen,
  modalVROpen,
  setModalVROpen,
  fpsMeter,
  setFpsMeter,
}) => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const intro = useMatch("/");
  const hub = useMatch("/hub");
  const torus = useMatch("/torus");
  const mach = useMatch("/mach");
  const panic = useMatch("/panic");
  const punk = useMatch("/punk");

  return (
    <>
      {/* INTRO SCENE STUFF /////////////////////// */}
      {intro && (
        <>
          <MainOverlay />
          <HeroSection start={start} />
          <BtnStart
            start={start}
            setStart={setStart}
            setModalInfoOpen={setModalInfoOpen}
          />
        </>
      )}

      <BtnFullScreen />

      <Header
        setStart={setStart}
        setHub={setHub}
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
        setLinkClicked={setLinkClicked}
        setModalInfoOpen={setModalInfoOpen}
        setModalVROpen={setModalVROpen}
      />

      <NavMenu
        setStart={setStart}
        setHub={setHub}
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
        setLinkClicked={setLinkClicked}
        fpsMeter={fpsMeter}
        setFpsMeter={setFpsMeter}
        setModalInfoOpen={setModalInfoOpen}
        setModalVROpen={setModalVROpen}
      />

      <FpsMeter
        fpsMeter={fpsMeter}
        setFpsMeter={setFpsMeter}
        performanceLevel={performanceLevel}
      />

      {/* INFO STUFF /////////////////////// */}
      <button
        className="btn-info"
        onClick={() => setModalInfoOpen(!modalInfoOpen)}
      >
        <div className="info-icon"></div>
      </button>

      {/* VR STUFF //////////////////////// */}
      <button
        className={modalVROpen ? "btn-vr-modal open" : "btn-vr-modal"}
        onClick={() => setModalVROpen(!modalVROpen)}
      >
        VR
      </button>

      <BtnsHub
        hubLink={hubLink}
        setHubLink={setHubLink}
        setHubBtnClicked={setHubBtnClicked}
      />

      <ModalInfo
        intro={intro}
        hub={hub}
        torus={torus}
        mach={mach}
        panic={panic}
        punk={punk}
        modalInfoOpen={modalInfoOpen}
        setModalInfoOpen={setModalInfoOpen}
      />

      <ModalVR
        modalVROpen={modalVROpen}
        setModalVROpen={setModalVROpen}
        foveation={foveation}
        setFoveation={setFoveation}
      />

      {torus && (
        <>
          <button
            className="btn-torus-scene-third-person"
            onClick={() => {
              setThirdPerson(!thirdPerson);
            }}
          />
        </>
      )}
    </>
  );
};
