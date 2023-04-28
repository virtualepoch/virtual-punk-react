import { Starship } from "../components/Starship";

export function StarPunk() {
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
      <h1 style={style}>Star Punk</h1>
      <Starship />
    </>
  );
}
