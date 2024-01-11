import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export const ModalGetQuote = ({ modalGetQuote, setModalGetQuote,titleHeight }) => {
  const [pressed, setPressed] = useState();
  return (
    <CSSTransition
      in={modalGetQuote}
      timeout={500}
      classNames="modal-get-quote"
      unmountOnExit
    >
      <div className="modal-get-quote"
      style={{
        paddingTop: titleHeight,
      }}
      >
        <h2>Get Quote</h2>
        <button
          className="btn-close-get-quote"
          onClick={() => setModalGetQuote(false)}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onTouchStart={() => setPressed(true)}
          onTouchEnd={() => setPressed(false)}
          style={{
           
            boxShadow: pressed
              ? "inset 2px 2px 3px 1px rgba(255, 255, 255, 0.7), inset -2px -2px 3px 1px rgba(0, 0, 0, 0.7)"
              : "inset 2px 2px 3px 1px rgba(255, 255, 255, 0.7), inset -2px -2px 3px 1px rgba(0, 0, 0, 0.7), 0 2px 5px 1px rgba(0, 0, 0, 0.8)",
          }}
        />
      </div>
    </CSSTransition>
  );
};
