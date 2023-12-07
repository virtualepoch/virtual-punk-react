import { RabbitHole } from "../components/three/RabbitHole";
import { TorusGroup } from "../components/three/TorusGroup";
// import { WormHole } from "../components/three/WormHole";

export const IntroScene = () => {
  // const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  return (
    <>
      <ambientLight intensity={1} position={[0, 0, 0]} />
      <directionalLight
        // ref={directionalLight}
        position={[1, 1, 1]}
        angle={0.3}
      />
      <RabbitHole />
      <TorusGroup position={[0, 0, -80]} />
    </>
  );
};
