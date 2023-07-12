export const LoadingPanel = (progress) => {
  return (
    <div className="loading-panel">
      <div className="loading-progress-value" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
