export const BtnStart = ({ hidden, setHidden }) => {
  return (
    <>
      <button
        className={hidden ? "btn-start opacity-0" : "btn-start"}
        onClick={() => setHidden(!hidden)}
      >
        Start
      </button>
      <div
        className={hidden ? "btn-start-shadow opacity-0" : "btn-start-shadow"}
      />
    </>
  );
};
