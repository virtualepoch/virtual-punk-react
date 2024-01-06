import { CSSTransition } from "react-transition-group";
import { StyledBorder } from "./StyledBorder";
import "./modal-info.css";

// Credit files
import { sceneInfo } from "../credits/_sceneInfo";
import { introCredits } from "../credits/introCredits";
import { hubCredits } from "../credits/hubCredits";
import { torusCredits } from "../credits/torusCredits";
import { emptyCredits } from "../credits/emptyCredits";

const Credit = ({ ...props }) => {
  return (
    <div className="info-wrapper flex-col">
      <hr className="info-hr" />
      <hr className="info-hr red" />
      <hr className="info-hr" />
      <p className="info-text">Asset: {props.info.asset}</p>
      <p className="info-text">Title: {props.info.title}</p>
      <a
        className="info-link"
        href={props.info.link}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="info-img"
          src={
            window.innerWidth <= 700
              ? props.info.imgSm
              : window.innerWidth > 700
              ? props.info.imgLg
              : props.info.img
          }
          alt={props.info.alt}
        />
      </a>
      <p className="info-text">Author: {props.info.author}</p>
      <p className="info-text">Changes: {props.info.changes}</p>
    </div>
  );
};

export const ModalInfo = ({
  intro,
  hub,
  torus,
  mach,
  panic,
  punk,
  modalInfoOpen,
  setModalInfoOpen,
  ...props
}) => {
  const credits = intro
    ? introCredits
    : hub
    ? hubCredits
    : torus
    ? torusCredits
    : emptyCredits;

  return (
    <CSSTransition
      in={modalInfoOpen}
      unmountOnExit
      timeout={700}
      classNames={"modal-info"}
    >
      <div className="modal-info">
        <button
          className="btn-close-modal"
          onClick={() => {
            setModalInfoOpen(false);
          }}
          // disabled={progress < 100}
        />

        <div className="info-container flex-col">
          <h2 className="info-header">Scene Info</h2>

          <hr className="info-hr" />

          <div className="info-wrapper flex-col">
            <p className="info-text">
              {intro
                ? sceneInfo.intro
                : hub
                ? sceneInfo.hub
                : torus
                ? sceneInfo.torus
                : mach
                ? sceneInfo.mach
                : panic
                ? sceneInfo.panic
                : punk
                ? sceneInfo.punk
                : sceneInfo.empty}
            </p>
          </div>

          <hr className="info-hr" />

          <h2 className="info-header">Scene Asset Credits</h2>

          {credits.map((item, index) => (
            <Credit key={index} info={item} />
          ))}
        </div>
        <StyledBorder modalInfoOpen={modalInfoOpen} />
      </div>
    </CSSTransition>
  );
};
