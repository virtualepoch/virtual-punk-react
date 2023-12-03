import { useState } from "react";
import { Link } from "react-router-dom";

export function FooterLinks({ backTo, backName, forwardTo, forwardName }) {
  //   const navigate = useNavigate();

  //   function delayAndGoBack(e, path) {
  //     e.preventDefault();

  //     setTimeout(() => navigate(path), 3000);
  //   }

  //   function delayAndGo(e, path) {
  //     e.preventDefault();
  //     forwardAction
  //     setTimeout(() => navigate(path), 3000);
  //   }

  const [backPressed, setBackPressed] = useState(false);
  const [forwardPressed, setForwardPressed] = useState(false);

  return (
    <div className="footer-link-container">
      {/* BACK LINK ///////////////////////////////////// */}
      <Link
        className={
          backPressed ? "footer-link back pressed" : "footer-link back"
        }
        to={backTo}
        onMouseDown={() => setBackPressed(true)}
        onTouchStart={() => setBackPressed(true)}
      >
        {backName}
      </Link>

      {/* LINK EFFECTS ////////////////////////////// */}
      <div
        className={backPressed ? "effect back pressed" : "effect back"}
      ></div>
      <div className="effect-2 back"></div>
      <div className="effect-3 back"></div>
      <div
        className={backPressed ? "effect-4 back pressed" : "effect-4 back"}
      ></div>

      {/* LINK SHADOW /////////////////////////////////////////// */}
      <div
        className={backPressed ? "shadow back pressed" : "shadow back"}
      ></div>

      {/* CENTER ICON //////////////////////// */}
      <div className="center-icon"></div>

      {/* FORWARD LINK ////////////////////////////////////////// */}
      <Link
        className={
          forwardPressed ? "footer-link forward pressed" : "footer-link forward"
        }
        to={forwardTo}
        onMouseDown={() => setForwardPressed(true)}
        onTouchStart={() => setForwardPressed(true)}
      >
        {forwardName}
      </Link>

      {/* LINK SHADOW /////////////////////////////////////////// */}
      <div
        className={
          forwardPressed ? "shadow  forward pressed" : "shadow forward"
        }
      ></div>

      {/* LINK EFFECTS ////////////////////////////// */}
      <div
        className={forwardPressed ? "effect forward pressed" : "effect forward"}
      ></div>
      <div className="effect-2 forward"></div>
      <div className="effect-3 forward"></div>
      <div
        className={
          forwardPressed ? "effect-4 forward pressed" : "effect-4 forward"
        }
      ></div>
    </div>
  );
}
