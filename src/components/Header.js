import { useMatch } from "react-router-dom";
// import WebFont from "webfontloader";
import "./header.css";
import { BtnNavMenu } from "./BtnNavMenu";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderTitle } from "./HeaderTitle";

export function Header({ navMenuOpen, setNavMenuOpen }) {
  const isSandyBdayPageActive = useMatch({
    path: "/happy-bday-sandy",
    end: true,
  });

  const isDadBdayPageActive = useMatch({
    path: "/happy-bday-dad",
    end: true,
  });

  const isAnimotoPageActive = useMatch({
    path: "/animoto",
    end: true,
  });

  return (
    <header
      className={
        isSandyBdayPageActive || isDadBdayPageActive || isAnimotoPageActive
          ? "main-site-header game-open"
          : "main-site-header"
      }
    >
      <HeaderLogo setNavMenuOpen={setNavMenuOpen} />

      <div className="header-trapezoid"></div>

      <HeaderTitle setNavMenuOpen={setNavMenuOpen} />

      <BtnNavMenu navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
    </header>
  );
}
