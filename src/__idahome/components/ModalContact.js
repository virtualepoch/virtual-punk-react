import { useState } from "react";

export const ModalContact = ({ titleHeight }) => {
  const [modalContactOpen, setModalContactOpen] = useState(false);

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
      <h2 className="header">Contact</h2>
      {modalContactOpen && (
        <>
          <a className="link-call" href="tel:+1208-761-5818">
            Call
          </a>
          <a className="link-text" href="sms:+1208-761-5818">
            Text
          </a>
          <a className="link-email" href="mailto:someone@example.com">
            Email
          </a>
          <button
            className="btn-close-contact-links"
            onClick={() => setModalContactOpen(!modalContactOpen)}
          />
        </>
      )}
    </button>
  );
};
