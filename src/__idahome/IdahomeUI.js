import { useState } from "react";
import { BtnIdahomeMenu } from "./BtnIdahomeNavMenu";
import { IdahomeNavMenu } from "./IdahomeNavMenu";

export const IdahomeUI = () => {
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
      <IdahomeNavMenu idahomeNavMenuOpen={idahomeNavMenuOpen} />
    </>
  );
};
