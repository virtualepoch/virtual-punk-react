export const BtnStart = ({ start, setStart }) => {
  return (
    <>
      <button
        className={start ? "btn-start opacity-0" : "btn-start"}
        onClick={() => setStart(!start)}
      >
        Start
      </button>
      <div
        className={start ? "btn-start-shadow opacity-0" : "btn-start-shadow"}
      />
    </>
  );
};
