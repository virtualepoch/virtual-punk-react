export const OmniControls = ({
  texture,
  setTexture,
  wrapX,
  setWrapX,
  wrapY,
  setWrapY,
}) => {
  return (
    <>
      <div className="torus-btn-wrap wrap-x">
        <button className="btn" onClick={() => setWrapX(wrapX + 1)}></button>
        <p>
          wrapX:
          <br />
          {wrapX}
        </p>
        <button
          className="btn down"
          onClick={() => {
            setWrapX(wrapX > 0 ? wrapX - 1 : 0);
          }}
        ></button>
      </div>
      <div className="torus-btn-wrap wrap-y">
        <button className="btn" onClick={() => setWrapY(wrapY + 1)}></button>
        <p>
          wrapY:
          <br />
          {wrapY}
        </p>
        <button
          className="btn down"
          onClick={() => {
            setWrapY(wrapY > 0 ? wrapY - 1 : 0);
          }}
        ></button>
      </div>
      <div className="torus-btn-wrap">
        <button
          className="btn"
          onClick={() => setTexture(texture + 1)}
        ></button>
        <p>
          texture:
          <br />
          {texture}
        </p>
        <button
          className="btn down"
          onClick={() => {
            setTexture(texture > 0 ? texture - 1 : 0);
          }}
        ></button>
      </div>
    </>
  );
};
