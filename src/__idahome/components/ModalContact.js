import { useState } from "react";

export const ModalContact = ({ titleHeight }) => {
  const [modalContactOpen, setModalContactOpen] = useState(false);
  const [pressed, setPressed] = useState();

  return (
    <button
      className={
        modalContactOpen ? "btn-contact-links open" : "btn-contact-links"
      }
      style={{
        position: `${modalContactOpen ? "fixed" : "static"}`,
        left: `${modalContactOpen ? "0" : "calc(50% - 30px)"}`,
        top: modalContactOpen ? titleHeight + 10 : "calc(50% - 165px)",
      }}
      onClick={() => setModalContactOpen(!modalContactOpen)}
    >
      <h2 className="header flex-center">Contact</h2>
      {modalContactOpen && (
        <div className="contact-links-wrapper">
          <a className="link-call" href="tel:+1208-761-5818">
            call
          </a>
          <a className="link-text" href="sms:+1208-761-5818">
            text
          </a>
          <a className="link-email" href="mailto:someone@example.com">
            email
          </a>
          <button
            className="btn-close-contact-links"
            onClick={() => setModalContactOpen(!modalContactOpen)}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onTouchStart={() => setPressed(true)}
            onTouchEnd={() => setPressed(false)}
            style={{
              boxShadow: pressed
                ? "inset 1px 2px 3px 1px rgba(255, 255, 255, 0.5), inset -1px -2px 3px 1px rgba(0, 0, 0, 0.5)"
                : "inset 1px 2px 3px 1px rgba(255, 255, 255, 0.5), inset -1px -2px 3px 1px rgba(0, 0, 0, 0.5), 0 1px 5px 1px rgba(0, 0, 0, 0.8)",
            }}
          />
        </div>
      )}
    </button>
  );
};
