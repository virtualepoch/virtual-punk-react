import { useRef } from "react";
import { HubScenes } from "../components/three/HubScenes";
import { RabbitHole } from "../components/three/RabbitHole";
import { TorusGroup } from "../components/three/TorusGroup";
// import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";
// import { WormHole } from "../components/three/WormHole";

export const IntroScene = () => {
  // const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  const sceneObjects = useRef();
  useFrame(() => {
    sceneObjects.current.position.z += 0.004;
    if (sceneObjects.current.position.z >= 90)
      sceneObjects.current.position.z = 0;
  });

  return (
    <>
      <ambientLight intensity={1} position={[0, 0, 0]} />
      <directionalLight
        // ref={directionalLight}
        position={[1, 1, 1]}
        angle={0.3}
      />
      {/* <EffectComposer>
        <Bloom />
      </EffectComposer> */}
      <mesh ref={sceneObjects}>
        <RabbitHole />
        <HubScenes
          panelDistance={3}
          panelSize={[8, 8, 0.5]}
          panelsPosition={[0, 0, -77]}
          panelsRotationX={Math.PI / 2}
          panelsRotationYSpeed={-0.01}
          panelsColor="cyan"
        />
        <TorusGroup position={[0, 0, -80]} />
      </mesh>
    </>
  );
};
