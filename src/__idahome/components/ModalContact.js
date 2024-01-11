import { useState } from "react";

export const ModalContact = () => {
  const [modalContactOpen, setModalContactOpen] = useState(false);

  console.log(modalContactOpen);
  return (
    <button
      className={
        modalContactOpen ? "btn-contact-links open" : "btn-contact-links"
      }
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
