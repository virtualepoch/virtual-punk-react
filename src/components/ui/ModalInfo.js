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

        <div className="text-container">
          <h2 className="credits-header">Scene Asset Credits</h2>

          <div className="credit-wrapper">
            <hr className="credits-hr" />
            <p className="credits-info">{props.info.title}</p>
            <a href={props.info.link} target="_blank" rel="noreferrer">
              <p className="credits-info link">{props.info.link}</p>
            </a>
            <p className="credits-info">Created by {props.info.credits}</p>
            <p className="credits-info">{props.info.changes}</p>
          </div>

          <div className="credit-wrapper">
            <hr className="credits-hr" />
            <p className="credits-info">{props.info.title2}</p>
            <a href={props.info.link2}target="_blank" rel="noreferrer">
              <p className="credits-info link">{props.info.link2}</p>
            </a>
            <p className="credits-info">{props.info.credits2}</p>
            <p className="credits-info">{props.info.changes2}</p>
          </div>

          <div className="credit-wrapper">
            <hr className="credits-hr" />
            <p className="credits-info">{props.info.title3}</p>
            <a href={props.info.link3}target="_blank" rel="noreferrer">
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
