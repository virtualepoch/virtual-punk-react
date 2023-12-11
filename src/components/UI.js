import { useState } from "react";
import { BtnFullScreen } from "./ui/BtnFullScreen";
import { Header } from "./ui/Header";
import { NavMenu } from "./ui/NavMenu";
import { FpsMeter } from "./ui/FpsMeter";
import { CreditsModal } from "./ui/CreditsModal";
import { Leva } from "leva";
import { OmniControls } from "./ui/OmniControls";
import { MainOverlay } from "./ui/MainOverlay";
import { HeroSection } from "./ui/HeroSection";
import { BtnStart } from "./ui/BtnStart";
import { VRModal } from "./ui/VRModal";

export const UI = ({
  start,
  setStart,
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
  const [vrModalOpen, setVRModalOpen] = useState(true);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [hideLeva, setHideLeva] = useState(true);
  const [fpsMeter, setFpsMeter] = useState(false);

  // CreditsModal info-
  const creditsInfo = [
    {
      id: "00",
      title: "title",
      link: "link",
      credits: `credits`,
      changes: `changes`,

      title2: "title2",
      link2: "link2",
      credits2: `credits2`,
      changes2: `changes2`,

      title3: "title3",
      link3: "link3",
      credits3: `credits3`,
      changes3: `changes3`,
    },
  ];

  return (
    <>
      <BtnFullScreen />

      <Header
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
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
        setLinkClicked={setLinkClicked}
        hideLeva={hideLeva}
        setHideLeva={setHideLeva}
        fpsMeter={fpsMeter}
        setFpsMeter={setFpsMeter}
      />

      <FpsMeter fpsMeter={fpsMeter} setFpsMeter={setFpsMeter} />

      {/* VR STUFF //////////////////////// */}
      <button
        className={vrModalOpen ? "btn-vr-modal open" : "btn-vr-modal"}
        onClick={() => setVRModalOpen(!vrModalOpen)}
      >
        VR
      </button>
      <VRModal
        vrModalOpen={vrModalOpen}
        setVRModalOpen={setVRModalOpen}
        foveation={foveation}
        setFoveation={setFoveation}
      />

      {/* INFO STUFF /////////////////////// */}
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

      {/* CONTROLS /////// */}
      <Leva hidden={hideLeva ? true : false} />
      {torus ? <OmniControls /> : <></>}

      {/* INTRO SCENE STUFF /////////////////////// */}
      {intro && (
        <>
          <MainOverlay />
          <HeroSection start={start} />
          <BtnStart start={start} setStart={setStart} />
        </>
      )}
    </>
  );
};
