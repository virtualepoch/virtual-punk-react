import { useMatch } from "react-router-dom";

export const SceneTitle = () => {
  const hub = useMatch("/hub");
  const torus = useMatch("/torus");
  const space = useMatch("/space");
  const mach = useMatch("/mach");
  const water = useMatch("/water");
  const star = useMatch("/star-punk");

  return (
    <h1 className="scene-title">
      {hub
        ? "Hub"
        : torus
        ? "Torus"
        : space
        ? "Space"
        : mach
        ? "Mach"
        : water
        ? "Water"
        : star
        ? "Star Punk"
        : "Virtual Punk"}
    </h1>
  );
};
