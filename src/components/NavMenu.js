import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./nav-menu.css";

export function NavMenu({ setNavMenuOpen, navMenuOpen }) {
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <li>
        <Link
          to={to}
          {...props}
          className={isActive ? "active link" : "link"}
          onClick={() => {
            setNavMenuOpen(false);
          }}
        >
          {children}
        </Link>
      </li>
    );
  }

  return (
    <>
      <CSSTransition in={navMenuOpen} unmountOnExit timeout={700} classNames="nav-menu">
        <nav className="nav-menu">
          <ul>
            <CustomLink to={"/"}>Home</CustomLink>
            <CustomLink to={"/torus"}>Torus</CustomLink>
            <CustomLink to={"/space"}>Space</CustomLink>
            <CustomLink to={"/time"}>Time</CustomLink>
            <CustomLink to={"/scroll"}>Scroll</CustomLink>
            <CustomLink to={"/shoe"}>Shoe</CustomLink>
            <CustomLink to={"/mach"}>Mach</CustomLink>
            <CustomLink to={"/star-punk"}>Star Punk</CustomLink>
            <CustomLink to={"/vr"}>VR</CustomLink>
            <CustomLink to={"/testing"}>Testing</CustomLink>
            <CustomLink to={"/moto-game"}>Moto Game</CustomLink>
            <CustomLink to={"/letter-game"}>Letter Game</CustomLink>
          </ul>
        </nav>
      </CSSTransition>
      <CSSTransition in={navMenuOpen} unmountOnExit timeout={500} classNames={"nav-menu-bg-left"}>
        <div className="nav-menu-bg-left">
          <hr className="hr top"/>
          <hr className="hr middle"/>
          <hr className="hr bottom"/>
        </div>
      </CSSTransition>
      <CSSTransition in={navMenuOpen} unmountOnExit timeout={500} classNames={"nav-menu-bg-right"}>
        <div className="nav-menu-bg-right">
          <hr className="hr top"/>
          <hr className="hr middle"/>
          <hr className="hr bottom"/>
        </div>
      </CSSTransition>
    </>
  );
}
