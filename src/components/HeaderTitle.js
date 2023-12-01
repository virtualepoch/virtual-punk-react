import { Link } from "react-router-dom";

export const HeaderTitle = ({ setNavMenuOpen }) => {
  return (
    <Link
      className="site-title-container"
      to={"/"}
      onClick={() => {
        setNavMenuOpen(false);
      }}
    >
      <div className="title-side-border"></div>
      <h1 className="site-title">
        Virtual <span className="site-title-word">Punk</span>
      </h1>
      <div className="title-side-border"></div>
    </Link>
  );
};
