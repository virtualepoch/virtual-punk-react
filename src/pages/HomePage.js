import { MainOverlay } from "../components/MainOverlay";
import { CanvasHome } from "../components/CanvasHome";
import "./home.css";

export function HomePage() {
  return (
    <>
      <MainOverlay />
      <CanvasHome />
      <header className="hero-section">
        <p className="hero-text">Welcome!</p>
        <p className="hero-text">
          My name is Craig <span className="word-pop">Kaufman</span>
        </p>
        <p className="hero-text">
          This is my portfolio of<br></br>
          <span className="three-d-text">3D</span>
        </p>
        <p className="hero-text">Hope you enjoy!</p>
      </header>
    </>
  );
}
