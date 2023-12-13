import { useMatch } from "react-router-dom";

import { HeaderLogo } from "./HeaderLogo";
import { SceneTitle } from "./SceneTitle";
import { BtnNavMenu } from "./BtnNavMenu";

import "./header.css";

export const Header = ({
  setStart,
  setHub,
  navMenuOpen,
  setNavMenuOpen,
  setLinkClicked,
}) => {
  const isSandyBdayPageActive = useMatch({
    path: "/happy-bday-sandy",
    end: true,
  });

  const isDadBdayPageActive = useMatch({
    path: "/happy-bday-dad",
    end: true,
  });

  return (
    <header
      className={
        isSandyBdayPageActive || isDadBdayPageActive
          ? "main-site-header display-none"
          : "main-site-header"
      }
    >
      <HeaderLogo
        setStart={setStart}
        setHub={setHub}
        setNavMenuOpen={setNavMenuOpen}
        setLinkClicked={setLinkClicked}
      />

      <SceneTitle />

      <BtnNavMenu navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
    </header>
  );
};
