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
  function CustomLink({
    timeout = 500,
    classNames,
    className,
    to,
    children,
    ...props
  }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <CSSTransition
        in={idahomeNavMenuOpen}
        unmountOnExit
        timeout={500}
        classNames="li"
      >
        <li className={className}>
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
      </CSSTransition>
    );
  }

  return (
    <>
      <nav className="idahome-nav-menu">
        <ul>
          <CustomLink className="li schedule" to={"/idahome"}>
            Schedule
          </CustomLink>
          <CustomLink className="li services" to={"/idahome"}>
            Services
          </CustomLink>
          <CustomLink className="li reviews" to={"/idahome"}>
            Reviews
          </CustomLink>
          <CustomLink className="li about" to={"/idahome"}>
            About
          </CustomLink>
        </ul>
      </nav>

      <CSSTransition
        in={idahomeNavMenuOpen}
        unmountOnExit
        timeout={800}
        classNames="footer-menu"
      >
        <div className="footer-menu">
          <p>Bg:</p>
          <button
            className={bgRes === "low" ? "btn-bg-res active" : "btn-bg-res"}
            onClick={() => {
              setIdahomeNavMenuOpen(false);
              setBgRes("low");
            }}
          >
            3k
          </button>
          <button
            className={bgRes === "mid" ? "btn-bg-res active" : "btn-bg-res"}
            onClick={() => {
              setIdahomeNavMenuOpen(false);
              setBgRes("mid");
            }}
          >
            4k
          </button>
          <button
            className={bgRes === "high" ? "btn-bg-res active" : "btn-bg-res"}
            onClick={() => {
              setIdahomeNavMenuOpen(false);
              setBgRes("high");
            }}
          >
            5k
          </button>

          <button
            className={fpsMeter ? "btn-fps meter-open" : "btn-fps"}
            onClick={() => {
              setFpsMeter(!fpsMeter);
            }}
          >
            FPS
          </button>
        </div>
      </CSSTransition>

      <CSSTransition
        in={idahomeNavMenuOpen}
        unmountOnExit
        timeout={400}
        classNames="nav-bg"
      >
        <div className="nav-bg" />
      </CSSTransition>
    </>
  );
}
