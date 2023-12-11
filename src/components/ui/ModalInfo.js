import { CSSTransition } from "react-transition-group";
import { useProgress } from "@react-three/drei";
// import { LoadingPanel } from "./LoadingPanel";
import { StyledBorder } from "./StyledBorder";
import "./modal-info.css";

export const ModalInfo = ({ modalInfoOpen, setModalInfoOpen, ...props }) => {
  const { progress } = useProgress();

  // useEffect(() => {
  //   setModalInfoOpen(true);
  // }, [setModalInfoOpen]);

  return (
    <CSSTransition
      in={modalInfoOpen}
      unmountOnExit
      timeout={700}
      classNames={"credits-modal"}
    >
      <div className="credits-modal">
        <button
          className="btn-close-modal"
          onClick={() => {
            setModalInfoOpen(false);
          }}
          // disabled={progress < 100}
        />

        <StyledBorder modalInfoOpen={modalInfoOpen} />

        <div
          className="loading-section"
          style={{ display: `${progress === 100 ? "none" : "flex"}` }}
        >
          <div
            className="loading-progress"
            style={{ width: `${progress}%` }}
          ></div>
          <p
            className={`${
              progress === 100 ? "loadMessage" : "loadMessage loading-anim"
            }`}
          >{`${
            progress === 100
              ? "Loading Finished"
              : `Loading ${Math.floor(progress)}%`
          }`}</p>
        </div>
        <div className="text-container">
          <h2 className="credits-header">Credits</h2>

          <div className="credit-wrapper">
            <hr className="credits-hr" />
            <p className="credits-info">{props.info.title}</p>
            <a href={props.info.link}>
              <p className="credits-info link">{props.info.link}</p>
            </a>
            <p className="credits-info">{props.info.credits}</p>
            <p className="credits-info">{props.info.changes}</p>
          </div>

          <div className="credit-wrapper">
            <hr className="credits-hr" />
            <p className="credits-info">{props.info.title2}</p>
            <a href={props.info.link2}>
              <p className="credits-info link">{props.info.link2}</p>
            </a>
            <p className="credits-info">{props.info.credits2}</p>
            <p className="credits-info">{props.info.changes2}</p>
          </div>

          <div className="credit-wrapper">
            <hr className="credits-hr" />
            <p className="credits-info">{props.info.title3}</p>
            <a href={props.info.link3}>
              <p className="credits-info link">{props.info.link3}</p>
            </a>
            <p className="credits-info">{props.info.credits3}</p>
            <p className="credits-info">{props.info.changes3}</p>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
