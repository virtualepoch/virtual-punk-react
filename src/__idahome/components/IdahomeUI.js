import { useState } from "react";
import { BtnIdahomeMenu } from "./BtnIdahomeNavMenu";
import { IdahomeNavMenu } from "./IdahomeNavMenu";
import { FpsMeter } from "../../components/ui/FpsMeter";

export const IdahomeUI = ({ fpsMeter, setFpsMeter }) => {
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
        fpsMeter={fpsMeter}
        setFpsMeter={setFpsMeter}
      />

      <FpsMeter fpsMeter={fpsMeter} setFpsMeter={setFpsMeter} />
    </>
  );
};
