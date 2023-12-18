import { CSSTransition } from "react-transition-group";

export const SceneMessage = ({ active, message }) => {
  return (
    <CSSTransition
      in={active}
      classNames="scene-message"
      timeout={2000}
      unmountOnExit
    >
      <p className="scene-message">{message}</p>
    </CSSTransition>
  );
};
