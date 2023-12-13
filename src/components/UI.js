import { useState } from "react";

// UI COMPONENTS //
import { MainOverlay } from "./ui/MainOverlay";
import { BtnFullScreen } from "./ui/BtnFullScreen";
import { Header } from "./ui/Header";
import { NavMenu } from "./ui/NavMenu";
import { FpsMeter } from "./ui/FpsMeter";
import { Leva } from "leva";
import { OmniControls } from "./ui/OmniControls";
import { ModalInfo } from "./ui/ModalInfo";
import { ModalVR } from "./ui/ModalVR";
import { BtnStart } from "./ui/BtnStart";
import { HeroSection } from "./ui/HeroSection";

// CREDITS FOR INFO MODAL //
import { introCredits } from "./credits/introCredits";
import { torusCredits } from "./credits/torusCredits";

export const UI = ({
  start,
  setStart,
  hub,
  setHub,
  foveation,
  setFoveation,
  setLinkClicked,
  intro,
  torus,
  space,
  scroll,
  mach,
  water,
  star,
}) => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [modalInfoOpen, setModalInfoOpen] = useState(false);
  const [modalVROpen, setModalVROpen] = useState(false);
  const [hideLeva, setHideLeva] = useState(true);
  const [fpsMeter, setFpsMeter] = useState(false);

  return (
    <>
      {(intro ? introCredits : torusCredits).map((item) => (
        <ModalInfo
          modalInfoOpen={modalInfoOpen}
          setModalInfoOpen={setModalInfoOpen}
          key={item.id}
          info={item}
        />
      ))}

      {/* INTRO SCENE STUFF /////////////////////// */}
      {intro && (
        <>
          <MainOverlay />
          <HeroSection start={start} />
          <BtnStart start={start} setStart={setStart} />
        </>
      )}

      <BtnFullScreen />

      <Header
        setStart={setStart}
        setHub={setHub}
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
        setLinkClicked={setLinkClicked}
        intro={intro}
        torus={torus}
        space={space}
        scroll={scroll}
        mach={mach}
        water={water}
        star={star}
      />

      <NavMenu
        setStart={setStart}
        setHub={setHub}
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
        setLinkClicked={setLinkClicked}
        hideLeva={hideLeva}
        setHideLeva={setHideLeva}
        fpsMeter={fpsMeter}
        setFpsMeter={setFpsMeter}
      />

      <FpsMeter fpsMeter={fpsMeter} setFpsMeter={setFpsMeter} />

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

      <ModalVR
        modalVROpen={modalVROpen}
        setModalVROpen={setModalVROpen}
        foveation={foveation}
        setFoveation={setFoveation}
      />

      {/* CONTROLS /////// */}
      <Leva hidden={hideLeva ? true : false} />
      {torus && <OmniControls />}
    </>
  );
};
