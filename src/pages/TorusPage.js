import { CanvasTorus } from "../components/CanvasTorus";

export function TorusPage() {
  const style = {
    width: "100%",
    position: "absolute",
    top: "80px",
    left: 0,
    textAlign: "center",
    zIndex: 4,
    padding: "10px",
    color: "aqua",
    filter: "drop-shadow(0 0 5px red)",
  };

  return (
    <>
      <h1 style={style}>Torus</h1>
      <CanvasTorus />
    </>
  );
}
