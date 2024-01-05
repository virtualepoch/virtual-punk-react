import { CSSTransition } from "react-transition-group";

export const SceneMessage = ({ sceneMessage, message }) => {
  return (
    <CSSTransition
      in={sceneMessage}
      classNames="scene-message"
      timeout={3000}
      unmountOnExit
    >
      <p className="scene-message">{message}</p>
    </CSSTransition>
  );
};
