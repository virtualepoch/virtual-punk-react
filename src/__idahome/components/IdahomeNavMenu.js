import { useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { ModalContact } from "./ModalContact";

export function IdahomeNavMenu({ idahomeNav, setIdahomeNav, titleHeight }) {
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
        <nav className="idahome-nav" style={{ paddingTop: titleHeight }}>
          <CSSTransition
            in={navOpen}
            unmountOnExit
            timeout={1000}
            classNames="btn-contact-links"
          >
            <ModalContact titleHeight={titleHeight} />
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
              linkName="Services"
            />
          </CSSTransition>

          <CSSTransition
            in={navOpen}
            unmountOnExit
            timeout={1000}
            classNames="link-testimonials"
          >
            <CustomLink
              className="link-testimonials"
              to={"/idahome"}
              linkName="Testimonials"
            />
          </CSSTransition>

          <CSSTransition
            in={navOpen}
            unmountOnExit
            timeout={1000}
            classNames="link-gallery"
          >
            <CustomLink
              className="link-gallery"
              to={"/idahome"}
              linkName="Gallery"
            />
          </CSSTransition>
        </nav>
      </CSSTransition>
    </>
  );
}
