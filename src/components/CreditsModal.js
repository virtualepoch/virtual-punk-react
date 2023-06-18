import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./credits-modal.css";

export function CreditsModal({creditsInfo}) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  return (
    <CSSTransition in={modalOpen} unmountOnExit timeout={700} classNames={"credits-modal"}>
      <div className="credits-modal">
        <h2 className="credits-header">PAGE CREDITS</h2>
        <p className="credits-info">{creditsInfo}</p>
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
  );
}
