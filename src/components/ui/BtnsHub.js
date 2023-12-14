import { useMatch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export const BtnsHub = ({
  hubLink,
  setHubLink,
  hubLinkClicked,
  setHubLinkClicked,
}) => {
  const match = useMatch("/hub");

  console.log(hubLink);
  return (
    <>
      <CSSTransition
        in={match}
        classNames="btn-hub-left"
        timeout={1000}
        unmountOnExit
      >
        <button
          className="btn-hub btn-hub-left"
          onClick={() => {
            hubLink > 0 ? setHubLink(hubLink - 1) : setHubLink(0);
            setHubLinkClicked(true);
          }}
        />
      </CSSTransition>
      <CSSTransition
        in={match}
        classNames="btn-hub-right"
        timeout={1000}
        unmountOnExit
      >
        <button
          className="btn-hub btn-hub-right"
          onClick={() => {
            hubLink < 1 ? setHubLink(hubLink + 1) : setHubLink(hubLink);
            setHubLinkClicked(false);
          }}
        />
      </CSSTransition>
    </>
  );
};
