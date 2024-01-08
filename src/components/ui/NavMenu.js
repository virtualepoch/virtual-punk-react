import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./nav-menu.css";

export function NavMenu({
  setStart,
  setHub,
  navMenuOpen,
  setNavMenuOpen,
  setLinkClicked,
  fpsMeter,
  setFpsMeter,
  setModalInfoOpen,
  setModalVROpen,
}) {
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <li className="link-li">
        <Link
          to={to}
          {...props}
          className={isActive ? "active link" : "link"}
          onClick={() => {
            setNavMenuOpen(false);
            setLinkClicked(true);
            setModalInfoOpen(false);
            setModalVROpen(false);
            if (to === "/") {
              setStart(false);
              setHub(false);
            }
          }}
        >
          {children}
        </Link>
      </li>
    );
  }

  return (
    <>
      <CSSTransition
        in={navMenuOpen}
        unmountOnExit
        timeout={800}
        classNames="nav-menu"
      >
        <nav className="nav-menu">
          <ul>
            <CustomLink to={"/"}>Intro</CustomLink>
            <CustomLink to={"/hub"}>Hub</CustomLink>
            <CustomLink to={"/torus"}>Torus</CustomLink>
            <CustomLink to={"/mach"}>Mach</CustomLink>
            <CustomLink to={"/panic"}>Panic</CustomLink>
            <CustomLink to={"/punk"}>Punk</CustomLink>
            <CustomLink to={"/test"}>Test</CustomLink>
          </ul>

          <button
            className={fpsMeter ? "btn-fps meter-open" : "btn-fps"}
            onClick={() => {
              setFpsMeter(!fpsMeter);
            }}
          >
            FPS
          </button>
        </nav>
      </CSSTransition>

      <CSSTransition
        in={navMenuOpen}
        unmountOnExit
        timeout={800}
        classNames={"left"}
      >
        <div className="bg left"></div>
      </CSSTransition>

      <CSSTransition
        in={navMenuOpen}
        unmountOnExit
        timeout={800}
        classNames={"right"}
      >
        <div className="bg right"></div>
      </CSSTransition>
    </>
  );
}
