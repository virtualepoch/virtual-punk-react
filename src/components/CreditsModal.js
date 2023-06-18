import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./credits-modal.css";

export function CreditsModal({ model, title, link, credits }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  return (
    <>
      <CSSTransition in={modalOpen} unmountOnExit timeout={700} classNames={"credits-modal"}>
        <div className="credits-modal">
          <h2 className="credits-header">PAGE CREDITS</h2>
          <p className="credits-info">Credits for the {model} model go to:</p>
          <p className="credits-info">{title}</p>
          <a href={link}>
            <p className="credits-info link">{link}</p>
          </a>
          <p className="credits-info">{credits}</p>
          <button
            className="btn-close-modal"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            CLOSE
          </button>
        </div>
      </CSSTransition>
      <button
        className="btn-open-credits"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        credits
      </button>
    </>
  );
}
