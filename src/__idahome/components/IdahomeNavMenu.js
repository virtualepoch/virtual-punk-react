import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export function IdahomeNavMenu({
  idahomeNavMenuOpen,
  setIdahomeNavMenuOpen,
  fpsMeter,
  setFpsMeter,
  bgRes,
  setBgRes,
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
          <div className="btns-bg-res">
            <p>Background Res:</p>
            <div className="btns-bg-res-wrap">
              <button
                className={bgRes === "low" ? "low active" : "low"}
                onClick={() => {
                  setIdahomeNavMenuOpen(false);
                  setBgRes("low");
                }}
              >
                2k
              </button>
              <button
                className={bgRes === "mid" ? "mid active" : "mid"}
                onClick={() => {
                  setIdahomeNavMenuOpen(false);
                  setBgRes("mid");
                }}
              >
                4k
              </button>
              <button
                className={bgRes === "high" ? "high active" : "high"}
                onClick={() => {
                  setIdahomeNavMenuOpen(false);
                  setBgRes("high");
                }}
              >
                6k
              </button>
            </div>
          </div>
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
