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
        className="footer-link back"
        to={backTo}
        onMouseDown={() => setBackPressed(true)}
        onTouchStart={() => setBackPressed(true)}
      >
        {backName}
      </Link>

      {/* LINK EFFECT ////////////////////////////// */}
      <div className="effect back"></div>

      {/* LINK SHADOW /////////////////////////////////////////// */}
      <div
        className={backPressed ? "shadow  back pressed" : "shadow back"}
      ></div>

      {/* FORWARD LINK ////////////////////////////////////////// */}
      <Link
        className="footer-link forward"
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

      {/* LINK EFFECT ////////////////////////////// */}
      <div className="effect forward"></div>
    </div>
  );
}
