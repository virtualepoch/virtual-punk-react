import { useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { ModalContact } from "./ModalContact";

export function IdahomeNavMenu({
  idahomeNav,
  setIdahomeNav,
  fpsMeter,
  setFpsMeter,
  bgRes,
  setBgRes,
}) {
  const [navOpen, setNavOpen] = useState();

  useEffect(() => {
    setTimeout(() => {
      setNavOpen(idahomeNav ? true : false);
    }, 1);
  }, [idahomeNav]);

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
        timeout={1000}
        classNames="idahome-nav"
      >
        <nav className="idahome-nav">
          <CSSTransition
            in={navOpen}
            unmountOnExit
            timeout={1000}
            classNames="btn-contact-links"
          >
            <ModalContact />
          </CSSTransition>

          <CSSTransition
            in={navOpen}
            unmountOnExit
            timeout={1000}
            classNames="link-services"
          >
            <CustomLink
              className="link-services"
              to={"/idahome"}
              linkName="services"
            />
          </CSSTransition>

          <CSSTransition
            in={navOpen}
            unmountOnExit
            timeout={1000}
            classNames="link-reviews"
          >
            <CustomLink
              className="link-reviews"
              to={"/idahome"}
              linkName="reviews"
            />
          </CSSTransition>

          <CSSTransition
            in={navOpen}
            unmountOnExit
            timeout={1000}
            classNames="link-about"
          >
            <CustomLink
              className="link-about"
              to={"/idahome"}
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
