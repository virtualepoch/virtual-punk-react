import { useProgress } from "@react-three/drei";

export const ModalLoadProgress = () => {
  const { progress } = useProgress();

  return (
    <div
      className="loading-section"
      style={{ display: `${progress === 100 ? "none" : "flex"}` }}
    >
      <button
        className="btn-close-progress"
        onClick={() => {
          // setModalLoadProgressOpen(false);
        }}
        // disabled={progress < 100}
      />
      <div className="loading-progress" style={{ width: `${progress}%` }}></div>
      <p
        className={`${
          progress === 100 ? "loadMessage" : "loadMessage loading-anim"
        }`}
      >{`${
        progress === 100
          ? "Loading Finished"
          : `Loading ${Math.floor(progress)}%`
      }`}</p>
    </div>
  );
};
