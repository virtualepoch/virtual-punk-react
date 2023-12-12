import { CSSTransition } from "react-transition-group";
import { StyledBorder } from "./StyledBorder";
import "./modal-info.css";

export const ModalInfo = ({ modalInfoOpen, setModalInfoOpen, ...props }) => {
  // useEffect(() => {
  //   setModalInfoOpen(true);
  // }, [setModalInfoOpen]);

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

        <div className="credits-container flex-col">
          <h2 className="credits-header">Scene Asset Credits</h2>

          <hr className="credits-hr" />

          <div className="credit-wrapper flex-col">
            <p className="credit-info">Asset for— {props.info.assetFor}</p>
            <p className="credit-info">Title— {props.info.title}</p>
            <a
              className="credit-link"
              href={props.info.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="credit-img"
                src={props.info.linkImg}
                alt="future machine bg for triangular cylinder"
              />
            </a>
            <p className="credit-info">Created by— {props.info.credits}</p>
            <p className="credit-info">Changes— {props.info.changes}</p>
          </div>

          <hr className="credits-hr" />

          <div className="credit-wrapper">
            <p className="credits-info">{props.info.title2}</p>
            <a href={props.info.link2} target="_blank" rel="noreferrer">
              <p className="credits-info link">{props.info.link2}</p>
            </a>
            <p className="credits-info">{props.info.credits2}</p>
            <p className="credits-info">{props.info.changes2}</p>
          </div>

          <hr className="credits-hr" />

          <div className="credit-wrapper">
            <p className="credits-info">{props.info.title3}</p>
            <a href={props.info.link3} target="_blank" rel="noreferrer">
              <p className="credits-info link">{props.info.link3}</p>
            </a>
            <p className="credits-info">{props.info.credits3}</p>
            <p className="credits-info">{props.info.changes3}</p>
          </div>
        </div>

        <StyledBorder modalInfoOpen={modalInfoOpen} />
      </div>
    </CSSTransition>
  );
};
