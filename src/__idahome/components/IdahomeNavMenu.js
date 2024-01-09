import { useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export function IdahomeNavMenu({
  idahomeNav,
  setIdahomeNav,
  fpsMeter,
  setFpsMeter,
  bgRes,
  setBgRes,
}) {
  const [linkOpen, setLinkOpen] = useState();

  useEffect(() => {
    setTimeout(() => {
      setLinkOpen(idahomeNav);
    }, 1);
  }, [linkOpen, idahomeNav]);

  function CustomLink({ to, className, linkName, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <Link
        className={isActive ? `active ${className}` : className}
        onClick={() => {
          setIdahomeNav(false);
        }}
        to={to}
        {...props}
      >
        {linkName}
      </Link>
    );
  }

  return (
    <>
      <CSSTransition
        in={idahomeNav}
        unmountOnExit
        timeout={300}
        classNames="idahome-nav"
      >
        <nav className="idahome-nav">
          <CSSTransition
            in={linkOpen}
            unmountOnExit
            timeout={1000}
            classNames="link-schedule"
          >
            <CustomLink
              className="link-schedule"
              to={"/idahome/schedule"}
              linkName="schedule"
            />
          </CSSTransition>

          <CSSTransition
            in={linkOpen}
            unmountOnExit
            timeout={1000}
            classNames="link-services"
          >
            <CustomLink
              className="link-services"
              to={"/idahome/services"}
              linkName="services"
            />
          </CSSTransition>

          <CSSTransition
            in={linkOpen}
            unmountOnExit
            timeout={1000}
            classNames="link-reviews"
          >
            <CustomLink
              className="link-reviews"
              to={"/idahome/reviews"}
              linkName="reviews"
            />
          </CSSTransition>

          <CSSTransition
            in={linkOpen}
            unmountOnExit
            timeout={1000}
            classNames="link-about"
          >
            <CustomLink
              className="link-about"
              to={"/idahome/about"}
              linkName="about"
            />
          </CSSTransition>
        </nav>
      </CSSTransition>

      <CSSTransition
        in={idahomeNav}
        unmountOnExit
        timeout={800}
        classNames="footer-menu"
      >
        <div className="footer-menu">
          <p>Bg:</p>
          <button
            className={bgRes === "low" ? "btn-bg-res active" : "btn-bg-res"}
            onClick={() => {
              setIdahomeNav(false);
              setBgRes("low");
            }}
          >
            3k
          </button>
          <button
            className={bgRes === "mid" ? "btn-bg-res active" : "btn-bg-res"}
            onClick={() => {
              setIdahomeNav(false);
              setBgRes("mid");
            }}
          >
            4k
          </button>
          <button
            className={bgRes === "high" ? "btn-bg-res active" : "btn-bg-res"}
            onClick={() => {
              setIdahomeNav(false);
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
    </>
  );
}
