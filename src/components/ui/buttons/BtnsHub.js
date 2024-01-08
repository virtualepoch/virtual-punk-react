import { useState } from "react";
import { useMatch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export const BtnsHub = ({ hubLink, setHubLink, setHubBtnClicked }) => {
  const match = useMatch("/hub");
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <CSSTransition
        in={match && hubLink > 0}
        classNames="btn-hub-left"
        timeout={hubLink > 0 ? 1000 : 500}
        unmountOnExit
      >
        <button
          className="btn-hub btn-hub-left"
          onClick={() => {
            hubLink > 0 ? setHubLink(hubLink - 1) : setHubLink(0);
            setHubBtnClicked(true);
          }}
        />
      </CSSTransition>

      <CSSTransition
        in={match && hubLink < 2}
        classNames="btn-hub-right"
        timeout={hubLink < 2 ? 1000 : 500}
        unmountOnExit
      >
        <button
          className={
            clicked ? "clicked btn-hub btn-hub-right" : "btn-hub btn-hub-right"
          }
          onClick={() => {
            hubLink < 2 ? setHubLink(hubLink + 1) : setHubLink(hubLink);
            setHubBtnClicked(true);
            setClicked(true);
          }}
        />
      </CSSTransition>
    </>
  );
};
