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

  return (
    <div className="footer-link-container">
      <Link className="footer-link back" to={backTo}>
      {backName}
      </Link>
      <Link className="footer-link forward" to={forwardTo}>
        {forwardName}
      </Link>
    </div>
  );
}
