import { CSSTransition } from "react-transition-group";

export const HeroSection = ({ start }) => {
  return (
    <CSSTransition
      in={start === false}
      timeout={500}
      unmountOnExit
      classNames="hero-section"
    >
      <section className="hero-section">
        <p className="hero-text">Welcome!</p>

        <p className="hero-text">My name is Craig Kaufman</p>

        <p className="hero-text">
          This is my portfolio of<br></br>
          <span className="three-d-text">3D</span>
        </p>

        <p className="hero-text">
          Press <span className="start-text">start</span>
          <br /> to begin
        </p>
      </section>
    </CSSTransition>
  );
};
