import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export function IdahomeNavMenu({ idahomeNavMenuOpen, setIdahomeNavMenuOpen,fpsMeter,setFpsMeter }) {
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
            setIdahomeNavMenuOpen(false);
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
        in={idahomeNavMenuOpen}
        unmountOnExit
        timeout={800}
        classNames="idahome-nav-menu"
      >
        <nav className="idahome-nav-menu">
          <ul>
            <CustomLink to={"/idahome"}>About</CustomLink>
            <CustomLink to={"/idahome"}>Testimonials</CustomLink>
            <CustomLink to={"/idahome"}>Images</CustomLink>
            <CustomLink to={"/idahome"}>Services</CustomLink>
            <CustomLink to={"/idahome"}>Schedule</CustomLink>
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
        in={idahomeNavMenuOpen}
        unmountOnExit
        timeout={800}
        classNames={"left"}
      >
        <div className="idahome-bg left"></div>
      </CSSTransition>

      <CSSTransition
        in={idahomeNavMenuOpen}
        unmountOnExit
        timeout={800}
        classNames={"right"}
      >
        <div className="idahome-bg right"></div>
      </CSSTransition>
    </>
  );
}
