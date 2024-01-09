import { useState } from "react";
import { BtnOpenIdahomeNav } from "./BtnOpenIdahomeNav";
import { IdahomeNavMenu } from "./IdahomeNavMenu";
import { FpsMeter } from "../../components/ui/FpsMeter";

export const IdahomeUI = ({
  fpsMeter,
  setFpsMeter,
  performanceLevel,
  bgRes,
  setBgRes,
}) => {
  const [idahomeNav, setIdahomeNav] = useState(false);

  return (
    <>
      <header className="header-idahome">
        <div className="logo-idahome" />
        <h1 className="title-idahome">IdahomeServ</h1>
        <BtnOpenIdahomeNav
          idahomeNav={idahomeNav}
          setIdahomeNav={setIdahomeNav}
        />
      </header>

      <IdahomeNavMenu
        idahomeNav={idahomeNav}
        setIdahomeNav={setIdahomeNav}
        fpsMeter={fpsMeter}
        setFpsMeter={setFpsMeter}
        performanceLevel={performanceLevel}
        bgRes={bgRes}
        setBgRes={setBgRes}
      />

      <FpsMeter
        fpsMeter={fpsMeter}
        setFpsMeter={setFpsMeter}
        performanceLevel={performanceLevel}
      />
    </>
  );
};
