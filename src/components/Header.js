import { Link, useMatch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
// import WebFont from "webfontloader";
import "./header.css";

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

  function SiteLogo() {
    return (
      <Link
        className="logo-container"
        to={"/"}
        aria-label="link to home page"
        onClick={() => {
          setNavMenuOpen(false);
        }}
      >
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
      </Link>
    );
  }

  function SiteTitle() {
    return (
      <Link
        className="site-title-container"
        to={"/"}
        onClick={() => {
          setNavMenuOpen(false);
        }}
      >
        <div className="title-side-border"></div>
        <h1 className="site-title">
          Virtual <span className="site-title-word">Punk</span>
        </h1>
        <div className="title-side-border"></div>
      </Link>
    );
  }

  function NavMenuButton(props) {
    return (
      <button
        className="button-nav-menu"
        aria-label="navigation menu button"
        onClick={() => {
          setNavMenuOpen(!navMenuOpen);
        }}
      >
        {props.children}
      </button>
    );
  }

  return (
    <header
      className={
        isSandyBdayPageActive || isDadBdayPageActive || isAnimotoPageActive
          ? "main-site-header game-open"
          : "main-site-header"
      }
    >
      <SiteLogo />

      <div className="header-trapezoid"></div>

      <SiteTitle />

      <NavMenuButton>
        <CSSTransition
          in={navMenuOpen === false}
          unmountOnExit
          timeout={500}
          classNames="open-bars"
        >
          <div className="open-bars"></div>
        </CSSTransition>

        <CSSTransition
          in={navMenuOpen}
          unmountOnExit
          timeout={500}
          classNames="close-bars"
        >
          <div className="close-bars"></div>
        </CSSTransition>
      </NavMenuButton>
    </header>
  );
}
