export const LoadingPanel = (progress) => {
  return (
    <div className="loadingScreen">
      <div className="loadingScreen__progress" >
        <div className="loadingScreen__progress__value" style={{ width: `${progress}%` }}></div>
        <p className="loadMessage">LOADING {`${progress}%`}</p>
      </div>
    </div>
  );
};
