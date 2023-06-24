import { Link } from "react-router-dom";

export function PillLinks({ backTo, backName, forwardTo, forwardName }) {
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

  return (
    <div className="pill-container">
      <Link className="pill blue" to={backTo}>
        {backName}
      </Link>
      <Link className="pill red" to={forwardTo}>
        {forwardName}
      </Link>
    </div>
  );
}
