import { CanvasTorus } from "../components/CanvasTorus";

export function TorusPage() {
  const style = {
    position: "absolute",
    top: "80px",
    left: 0,
    zIndex: 4,
    color: "white",
    padding: "10px",
    border: "solid aqua",
  };

  return (
    <>
      <h1 style={style}>React Three Fiber Torus Anim</h1>
      <CanvasTorus />
    </>
  );
}
