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
  const [linkSchedule, setLinkSchedule] = useState();
  const [linkServices, setLinkServices] = useState();
  const [linkReviews, setLinkReviews] = useState();
  const [linkAbout, setLinkAbout] = useState();

  useEffect(() => {
    setTimeout(() => {
      setLinkSchedule(idahomeNav ? true : false);
      setLinkServices(idahomeNav ? true : false);
      setLinkReviews(idahomeNav ? true : false);
      setLinkAbout(idahomeNav ? true : false);
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
        timeout={200}
        classNames="idahome-nav"
      >
        <nav className="idahome-nav">
          <CSSTransition
            in={linkSchedule}
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
            in={linkServices}
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
            in={linkReviews}
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
            in={linkAbout}
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
