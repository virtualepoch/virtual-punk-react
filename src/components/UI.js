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

export const UI = ({
  setLinkClicked,
  intro,
  torus,
  space,
  scroll,
  mach,
  star,
}) => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [fpsMeter, setFpsMeter] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [hideLeva, setHideLeva] = useState(true);

  const [hideStart, setHideStart] = useState(false);

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
      {intro && (
        <>
          <MainOverlay />
          <HeroSection />
        </>
      )}
      <Header
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
        setLinkClicked={setLinkClicked}
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
        setLinkClicked={setLinkClicked}
        hideLeva={hideLeva}
        setHideLeva={setHideLeva}
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

      <button
        className={hideStart ? "btn-start opacity-0" : "btn-start"}
        onClick={() => setHideStart(!hideStart)}
      >
        Start
      </button>
      <div
        className={
          hideStart ? "btn-start-shadow opacity-0" : "btn-start-shadow"
        }
      />

      {creditsInfo.map((item) => (
        <CreditsModal
          infoModalOpen={infoModalOpen}
          setInfoModalOpen={setInfoModalOpen}
          key={item.id}
          info={item}
        />
      ))}
      <Leva hidden={hideLeva ? true : false} />
      {torus ? <OmniControls /> : <></>}
    </>
  );
};
