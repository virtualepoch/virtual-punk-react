export const LoadingPanel = (progress) => {
  return (
    <div className="loading-section" style={{ display: `${progress === 100 ? "none" : "flex"}` }}>
      <div className="loading-progress" style={{ width: `${progress}%` }}></div>
      <p className={`${progress === 100 ? "loadMessage" : "loadMessage loading-anim"}`}>{`${progress === 100 ? "Loading Finished" : `Loading ${Math.floor(progress)}%`}`}</p>
    </div>
  );
};
