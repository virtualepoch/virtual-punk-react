export const BtnOpenIdahomeNav = ({ idahomeNav, setIdahomeNav }) => {
  return (
    <>
      <button
        className="btn-open-idahome-nav flex-center"
        aria-label="Button to open the navigation menu"
        onClick={() => setIdahomeNav(!idahomeNav)}
      >
        <div className={idahomeNav ? "bar open scale-x" : "bar open"}></div>
        <div className={idahomeNav ? "bar open scale-x" : "bar open"}></div>

        <div
          className={idahomeNav ? "bar close" : "bar close scale-x"}
        ></div>
        <div
          className={idahomeNav ? "bar close" : "bar close scale-x"}
        ></div>
      </button>
    </>
  );
};
