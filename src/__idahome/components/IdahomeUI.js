import { useState } from "react";
import { BtnIdahomeMenu } from "./BtnIdahomeNavMenu";
import { IdahomeNavMenu } from "./IdahomeNavMenu";
import { FpsMeter } from "../../components/ui/FpsMeter";

export const IdahomeUI = ({
  fpsMeter,
  setFpsMeter,
  performanceLevel,
  bgRes,
  setBgRes,
}) => {
  const [idahomeNavMenuOpen, setIdahomeNavMenuOpen] = useState(false);

  return (
    <>
      <header className="header-idahome">
        <div className="logo-idahome" />
        <h1 className="title-idahome">IdahomeServ</h1>
        <BtnIdahomeMenu
          idahomeNavMenuOpen={idahomeNavMenuOpen}
          setIdahomeNavMenuOpen={setIdahomeNavMenuOpen}
        />
      </header>

      <IdahomeNavMenu
        idahomeNavMenuOpen={idahomeNavMenuOpen}
        setIdahomeNavMenuOpen={setIdahomeNavMenuOpen}
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
