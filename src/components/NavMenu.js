import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./nav-menu.css";

export function NavMenu({ navMenuOpen, setNavMenuOpen }) {
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
            {/* <CustomLink to={"/time"}>Time</CustomLink> */}
            <CustomLink to={"/scroll"}>Scroll</CustomLink>
            {/* <CustomLink to={"/shoe"}>Shoe</CustomLink> */}
            <CustomLink to={"/mach"}>Mach</CustomLink>
            <CustomLink to={"/portal"}>Portal</CustomLink>
            <CustomLink to={"/dragon"}>Dragon</CustomLink>
            <CustomLink to={"/star-punk"}>Star Punk</CustomLink>
            <CustomLink to={"/dissolve"}>Dissolve</CustomLink>
          </ul>
        </nav>
      </CSSTransition>
      <CSSTransition in={navMenuOpen} unmountOnExit timeout={500} classNames={"nav-menu-bg-left"}>
        <div className="nav-menu-bg-left"></div>
      </CSSTransition>
      <CSSTransition in={navMenuOpen} unmountOnExit timeout={500} classNames={"nav-menu-bg-right"}>
        <div className="nav-menu-bg-right"></div>
      </CSSTransition>
    </>
  );
}
