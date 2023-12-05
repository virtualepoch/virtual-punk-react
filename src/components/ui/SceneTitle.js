export const SceneTitle = ({ intro, torus, space, scroll, mach, star }) => {
  return (
    <h1 className="scene-title">
      {torus
        ? "Torus"
        : scroll
        ? "Scroll"
        : space
        ? "Space"
        : mach
        ? "Mach"
        : star
        ? "Star Punk"
        : "Virtual Punk"}
      <div className="x-pad"></div>
    </h1>
  );
};
