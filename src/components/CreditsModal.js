import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./credits-modal.css";
import { useProgress } from "@react-three/drei";
import { LoadingPanel } from "./LoadingPanel";

export function CreditsModal({ modalOpen, setModalOpen, ...props }) {
  const { progress } = useProgress();

  useEffect(() => {
    setModalOpen(true);
  }, [setModalOpen]);

  return (
    <>
      <CSSTransition in={modalOpen} unmountOnExit timeout={700} classNames={"credits-modal"}>
        <div className="credits-modal">
          <div className="loadingScreen">
            <div className="loadingScreen__progress">
              <div className="loadingScreen__progress__value" style={{ width: `${progress}%` }}></div>
              <p className={`${progress === 100 ? "loadMessage" : "loadMessage loading-anim"}`}>{`${progress === 100 ? "Loading Finished" : `Loading ${progress}%`}`}</p>
            </div>
          </div>
          <div className="text-container">
            <h2 className="credits-header">PAGE CREDITS</h2>
            <p className="credits-info">{props.info.title}</p>
            <a href={props.info.link}>
              <p className="credits-info link">{props.info.link}</p>
            </a>
            <p className="credits-info">{props.info.credits}</p>
            <p className="credits-info">{props.info.changes}</p>
            <hr className="credits-hr-sm" />
            <hr className="credits-hr" />
            <hr className="credits-hr-sm" />
            <p className="credits-info">{props.info.title2}</p>
            <a href={props.info.link2}>
              <p className="credits-info link">{props.info.link2}</p>
            </a>
            <p className="credits-info">{props.info.credits2}</p>
            <p className="credits-info">{props.info.changes2}</p>
            <hr className="credits-hr-sm" />
            <hr className="credits-hr" />
            <hr className="credits-hr-sm" />
            <p className="credits-info">{props.info.title3}</p>
            <a href={props.info.link3}>
              <p className="credits-info link">{props.info.link3}</p>
            </a>
            <p className="credits-info">{props.info.credits3}</p>
            <p className="credits-info">{props.info.changes3}</p>
          </div>
          <button
            className="btn-close-modal"
            onClick={() => {
              setModalOpen(false);
            }}
            disabled={progress < 100}
          >
            CLOSE
          </button>
        </div>
      </CSSTransition>
      <button
        className="btn-open-modal"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        credits
      </button>
    </>
  );
}
