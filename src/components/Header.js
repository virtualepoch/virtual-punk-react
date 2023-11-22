import { useEffect } from "react";
import { Link, useMatch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
// import WebFont from "webfontloader";
import "./header.css";

export function Header({ navMenuOpen, setNavMenuOpen }) {
  // SWIPE TO CLOSE NAVIGATION MENU //////////////////
  // useEffect(() => {
  //   var touchSurface = navMenu.current,
  //     startX,
  //     startY,
  //     dist,
  //     threshold = 50, //required min distance traveled to be considered swipe
  //     allowedTime = 250, // maximum time allowed to travel that distance
  //     elapsedTime,
  //     startTime;

  //   function handleSwipe(isUpSwipe) {
  //     if (isUpSwipe) {
  //       navMenu.current.classList.remove("open");
  //       buttonNavMenu.current.classList.remove("open");
  //     }
  //   }

  //   touchSurface.addEventListener(
  //     "touchstart",
  //     function (e) {
  //       // the 'touchObject' is your FINGER //
  //       var touchObject = e.changedTouches[0];
  //       dist = 0;
  //       startX = touchObject.pageX;
  //       startY = touchObject.pageY;
  //       startTime = new Date().getTime(); // record time when finger first makes contact with surface
  //       // e.preventDefault();
  //     },
  //     false
  //   );

  //   // touchSurface.addEventListener(
  //   //   "touchmove",
  //   //   function (e) {
  //   //     e.preventDefault(); // prevent scrolling when inside DIV
  //   //   },
  //   //   false
  //   // );

  //   touchSurface.addEventListener(
  //     "touchend",
  //     function (e) {
  //       var touchObject = e.changedTouches[0];
  //       dist = startY - touchObject.pageY; // get total dist traveled by finger while in contact with surface
  //       elapsedTime = new Date().getTime() - startTime; // get time elapsed
  //       // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
  //       var swipeUpBol = elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchObject.pageX - startX) <= 50 && Math.abs(startX - touchObject.pageX) <= 50;
  //       handleSwipe(swipeUpBol);
  //       // e.preventDefault();
  //     },
  //     false
  //   );
  // }); // end window.onload

  // var WebFont = require("webfontloader");

  // useEffect(() => {
  //   WebFont.load({
  //     custom: {
  //       families: ["Ailerons"],
  //     },
  //   });
  // }, [WebFont]);

  const isSandyBdayPageActive = useMatch({
    path: "/happy-bday-sandy",
    end: true,
  });

  const isDadBdayPageActive = useMatch({
    path: "/happy-bday-dad",
    end: true,
  });

  const isAnimotoPageActive = useMatch({
    path: "/animoto",
    end: true,
  });

  function SiteLogo() {
    return (
      <Link
        className="logo-container"
        to={"/"}
        aria-label="link to home page"
        onClick={() => {
          setNavMenuOpen(false);
        }}
      >
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
      </Link>
    );
  }

  function SiteTitle() {
    return (
      <Link
        className="site-title-container"
        to={"/"}
        onClick={() => {
          setNavMenuOpen(false);
        }}
      >
        <div className="title-side-border"></div>
        <h1 className="site-title">
          Virtual <span className="site-title-word">Punk</span>
        </h1>
        <div className="title-side-border"></div>
      </Link>
    );
  }

  function NavMenuButton(props) {
    return (
      <button
        className="button-nav-menu"
        aria-label="navigation menu"
        onClick={() => {
          setNavMenuOpen(!navMenuOpen);
        }}
      >
        {props.children}
      </button>
    );
  }

  return (
    <header
      className={
        isSandyBdayPageActive || isDadBdayPageActive || isAnimotoPageActive
          ? "main-site-header game-open"
          : "main-site-header"
      }
    >
      <SiteLogo />

      <div className="header-trapezoid"></div>

      <SiteTitle />

      <NavMenuButton>
        <CSSTransition
          in={navMenuOpen === false}
          unmountOnExit
          timeout={500}
          classNames="open-bars"
        >
          <div className="open-bars"></div>
        </CSSTransition>

        <CSSTransition
          in={navMenuOpen}
          unmountOnExit
          timeout={500}
          classNames="close-bars"
        >
          <div className="close-bars"></div>
        </CSSTransition>
      </NavMenuButton>
    </header>
  );
}
