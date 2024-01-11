import { useLayoutEffect, useRef, useState } from "react";
import { BtnOpenIdahomeNav } from "./BtnOpenIdahomeNav";
import { IdahomeNavMenu } from "./IdahomeNavMenu";
import { FpsMeter } from "../../components/ui/FpsMeter";
import "../idahome-test.css";
import { OmniIdahome } from "./OmniIdahome";
import { ModalGetQuote } from "./ModalGetQuote";

export const IdahomeUI = ({
  fpsMeter,
  setFpsMeter,
  performanceLevel,
  bgRes,
  setBgRes,
}) => {
  const [idahomeNav, setIdahomeNav] = useState(false);
  const [titleHeight, setTitleHeight] = useState();
  const [pressed, setPressed] = useState();
  const [modalGetQuote, setModalGetQuote] = useState();

  const titleWrapper = useRef();

  useLayoutEffect(() => {
    setTitleHeight(titleWrapper.current.clientHeight);
  }, [setTitleHeight]);

  return (
    <>
      <header className="header-idahome">
        <div className="logo-idahome" />
        <div className="title-idahome-wrapper" ref={titleWrapper}>
          <h1 className="title-idahome">IdahomeServ LLC</h1>
          <h2 className="subtitle-idahome">Pool and Spa</h2>
        </div>
        <BtnOpenIdahomeNav
          idahomeNav={idahomeNav}
          setIdahomeNav={setIdahomeNav}
        />
      </header>

      <button
        className="btn-get-quote"
        onClick={() => setModalGetQuote(true)}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
        style={{
          boxShadow: pressed
            ? "inset 2px 2px 3px 1px rgba(255, 255, 255, 0.7), inset -2px -2px 3px 1px rgba(0, 0, 0, 0.7)"
            : "inset 2px 2px 3px 1px rgba(255, 255, 255, 0.7), inset -2px -2px 3px 1px rgba(0, 0, 0, 0.7), 0 2px 5px 1px rgba(0, 0, 0, 0.8)",
        }}
      >
        Get Quote
      </button>

      <ModalGetQuote
        modalGetQuote={modalGetQuote}
        setModalGetQuote={setModalGetQuote}
        titleHeight={titleHeight}
      />

      <IdahomeNavMenu
        idahomeNav={idahomeNav}
        setIdahomeNav={setIdahomeNav}
        titleHeight={titleHeight}
      />

      <OmniIdahome
        bgRes={bgRes}
        setBgRes={setBgRes}
        fpsMeter={fpsMeter}
        setFpsMeter={setFpsMeter}
      />

      <FpsMeter
        fpsMeter={fpsMeter}
        setFpsMeter={setFpsMeter}
        performanceLevel={performanceLevel}
      />
    </>
  );
};
