import React, { useRef, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./header.css";

export function Header() {
  const navMenu = useRef(null);
  const buttonNavMenu = useRef(null);

  function openCloseNavMenu() {
    navMenu.current.classList.toggle("open");
    buttonNavMenu.current.classList.toggle("open");
  }

  // MUST HAVE: When 'SITE-LOGO' or 'SITE-TITLE' are clicked this CLOSES the 'NAV-MENU' (if open) and prevents it from opening (if closed).
  function closeNavMenu() {
    if (navMenu.current.classList.contains("open")) {
      navMenu.current.classList.remove("open");
      buttonNavMenu.current.classList.remove("open");
    }
  }

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

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props} className="link">
          {children}
        </Link>
      </li>
    );
  }

  return (
    <header className="header">
      <div className="top-header">
        <div className="side">
          <Link className="logo-container" to={"/"} onClick={closeNavMenu}>
            <div className="logo"></div>
            <div className="logo"></div>
            <div className="logo"></div>
            <div className="logo"></div>
            <div className="logo"></div>
          </Link>
        </div>
        <Link className="site-title-container" to={"/"} onClick={closeNavMenu}>
          <div className="title-border"></div>
          <h1 className="site-title">
            Virtual <span className="site-title-word">Punk</span>
          </h1>
          <div className="title-border"></div>
        </Link>
        <div className="side">
          <button className="button-nav-menu" ref={buttonNavMenu} onClick={openCloseNavMenu}>
            <div className="open-bars"></div>
            <div className="close-bars"></div>
          </button>
        </div>
      </div>
      <nav className="nav-menu" ref={navMenu}>
        <ul className="nav-link-container">
          <CustomLink className="link" onClick={openCloseNavMenu} to={"/"}>
            Home - Rabbit Hole
          </CustomLink>
          <CustomLink className="link" onClick={openCloseNavMenu} to={"/three-fiber-pyramid"}>
            Space Journey
          </CustomLink>
          <CustomLink className="link" onClick={openCloseNavMenu} to={"/three-fiber-scroll-anim"}>
            Scroll Animation
          </CustomLink>
          <CustomLink className="link" onClick={openCloseNavMenu} to={"/three-fiber-torus-anim"}>
            Torus Animation
          </CustomLink>
        </ul>
      </nav>
    </header>
  );
}
