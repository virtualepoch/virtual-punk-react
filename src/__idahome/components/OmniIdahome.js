import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export const OmniIdahome = ({ bgRes, setBgRes, fpsMeter, setFpsMeter }) => {
  const [omniIdahome, setOmniIdahome] = useState();
  return (
    <>
      <button
        className={omniIdahome ? "btn-omni-idahome open" : "btn-omni-idahome"}
        onClick={() => {
          setOmniIdahome(!omniIdahome);
        }}
      />
      <CSSTransition
        in={omniIdahome}
        unmountOnExit
        timeout={400}
        classNames="omni-idahome"
      >
        <div className="omni-idahome">
          <p>Bg:</p>
          <button
            className={bgRes === "low" ? "btn-bg-res active" : "btn-bg-res"}
            onClick={() => {
              setBgRes("low");
            }}
          >
            3k
          </button>
          <button
            className={bgRes === "mid" ? "btn-bg-res active" : "btn-bg-res"}
            onClick={() => {
              setBgRes("mid");
            }}
          >
            4k
          </button>
          <button
            className={bgRes === "high" ? "btn-bg-res active" : "btn-bg-res"}
            onClick={() => {
              setBgRes("high");
            }}
          >
            5k
          </button>

          <button
            className={fpsMeter ? "btn-fps meter-open" : "btn-fps"}
            onClick={() => {
              setFpsMeter(!fpsMeter);
            }}
          >
            FPS
          </button>
        </div>
      </CSSTransition>
    </>
  );
};
