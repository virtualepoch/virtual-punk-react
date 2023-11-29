import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./nav-menu.css";
import { useState } from "react";

export function NavMenu({
  navMenuOpen,
  setNavMenuOpen,
  fpsOpen,
  setFpsOpen,
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
          }}
          style={{
            boxShadow: test ? "none" : "",
          }}
        >
          {children}
        </Link>
      </li>
    );
  }

  const [test, setTest] = useState(false);
  return (
    <>
      <button
        className="test-btn"
        onClick={() => {
          setTest(!test);
        }}
      >
        TESTING
      </button>
      <CSSTransition
        in={navMenuOpen}
        unmountOnExit
        timeout={700}
        classNames="nav-menu"
      >
        <nav className="nav-menu">
          <ul>
            <CustomLink to={"/"}>Home</CustomLink>
            <CustomLink to={"/torus"}>Torus</CustomLink>
            <CustomLink to={"/space"}>Space</CustomLink>
            {/* <CustomLink to={"/time"}>Time</CustomLink> */}
            <CustomLink to={"/scroll"}>Scroll</CustomLink>
            {/* <CustomLink to={"/shoe"}>Shoe</CustomLink> */}
            <CustomLink to={"/mach"}>Mach</CustomLink>
            <CustomLink to={"/portal"}>Portal</CustomLink>
            <CustomLink to={"/dragon"}>Dragon</CustomLink>
            <CustomLink to={"/star-punk"}>Star Punk</CustomLink>
            <CustomLink to={"/dissolve"}>Dissolve</CustomLink>
          </ul>
          <button
            className="btn-fps"
            onClick={() => {
              setFpsOpen(!fpsOpen);
            }}
          >
            FPS METER
          </button>
        </nav>
      </CSSTransition>
      <CSSTransition
        in={navMenuOpen}
        unmountOnExit
        timeout={700}
        classNames={"left"}
      >
        <div
          className="bg left"
          style={{
            boxShadow: test ? "none" : "",
          }}
        ></div>
      </CSSTransition>
      <CSSTransition
        in={navMenuOpen}
        unmountOnExit
        timeout={700}
        classNames={"right"}
      >
        <div
          className="bg right"
          style={{
            boxShadow: test ? "none" : "",
          }}
        ></div>
      </CSSTransition>
    </>
  );
}
