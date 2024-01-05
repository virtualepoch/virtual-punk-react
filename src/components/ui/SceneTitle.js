import { useMatch } from "react-router-dom";

export const SceneTitle = () => {
  const hub = useMatch("/hub");
  const torus = useMatch("/torus");
  const mach = useMatch("/mach");
  const panic = useMatch("/panic");
  const punk = useMatch("/punk");

  return (
    <h1 className="scene-title">
      {hub
        ? "Hub"
        : torus
        ? "Torus"
        : mach
        ? "Mach"
        : panic
        ? "Panic"
        : punk
        ? "Punk"
        : "Virtual Punk"}
    </h1>
  );
};
