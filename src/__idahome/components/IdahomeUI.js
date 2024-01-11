import { useLayoutEffect, useRef, useState } from "react";
import { BtnOpenIdahomeNav } from "./BtnOpenIdahomeNav";
import { IdahomeNavMenu } from "./IdahomeNavMenu";
import { FpsMeter } from "../../components/ui/FpsMeter";
import "../idahome-test.css";
import { OmniIdahome } from "./OmniIdahome";

export const IdahomeUI = ({
  fpsMeter,
  setFpsMeter,
  performanceLevel,
  bgRes,
  setBgRes,
}) => {
  const [idahomeNav, setIdahomeNav] = useState(false);

  const [titleHeight, setTitleHeight] = useState();
  const titleWrapper = useRef();

  useLayoutEffect(() => {
    setTitleHeight(titleWrapper.current.clientHeight);
  }, [setTitleHeight]);

  return (
    <>
      <header className="header-idahome">
        <div className="logo-idahome" />
        <div className="title-idahome-wrapper" ref={titleWrapper}>
          <h1 className="title-idahome">IdahomeServ LLC</h1>
          <h2 className="subtitle-idahome">Pool and Spa</h2>
        </div>
        <BtnOpenIdahomeNav
          idahomeNav={idahomeNav}
          setIdahomeNav={setIdahomeNav}
        />
      </header>

      <IdahomeNavMenu
        idahomeNav={idahomeNav}
        setIdahomeNav={setIdahomeNav}
        titleHeight={titleHeight}
      />

      <OmniIdahome
        bgRes={bgRes}
        setBgRes={setBgRes}
        fpsMeter={fpsMeter}
        setFpsMeter={setFpsMeter}
      />

      <FpsMeter
        fpsMeter={fpsMeter}
        setFpsMeter={setFpsMeter}
        performanceLevel={performanceLevel}
      />
    </>
  );
};
