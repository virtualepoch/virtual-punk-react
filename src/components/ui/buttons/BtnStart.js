export const BtnStart = ({ start, setStart, setModalInfoOpen }) => {
  return (
    <>
      <button
        className={start ? "btn-start opacity-0" : "btn-start"}
        onClick={() => {
          setStart(true);
          setModalInfoOpen(false);
        }}
      >
        Start
      </button>
      <div
        className={start ? "btn-start-shadow opacity-0" : "btn-start-shadow"}
      />
    </>
  );
};
