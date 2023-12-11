import { useRef, useState } from "react";
import { HubScenes } from "../components/three/HubScenes";
import { RabbitHole } from "../components/three/RabbitHole";
import { TorusGroup } from "../components/three/TorusGroup";
// import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";
import { Ocean } from "../components/three/Ocean";
import { MyVRButton } from "../components/three/MyVRButton";
// import { WormHole } from "../components/three/WormHole";

export const IntroScene = ({ start, setStart }) => {
  // const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  const [hub, setHub] = useState(false);

  const sceneObjects = useRef();
  var sceneSpeed = start ? 0.7 : 0.004;
  useFrame(() => {
    if (sceneObjects.current.position.z >= 100) {
      sceneObjects.current.position.z = hub ? 0 : start ? 95 : 0;
      sceneSpeed = start ? 0 : 0.7;
      setHub(start ? true : false);
    }
    sceneObjects.current.position.z += sceneSpeed;
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
      <MyVRButton start={start} setStart={setStart} />
      <mesh ref={sceneObjects} position={[0, 0, 0]}>
        {hub === false && <RabbitHole position={[0, 0, -28]} />}
        <HubScenes
          hub={hub}
          panelDistance={hub ? 10 : 3}
          panelSize={[hub ? 16 : 4, hub ? 10 : 12, hub ? 1 : 0.5]}
          panelsPosition={[0, hub ? -3 : 0, hub ? 0 : -85]}
          panelsRotationX={hub ? 0 : Math.PI / 2}
          panelsRotationYSpeed={hub ? -0.0 : -0.01}
          panelsColor="cyan"
        />
        <TorusGroup
          position={[0, hub ? -10 : 0, hub ? 0 : -88]}
          rotation={[hub ? Math.PI / 2 : 0, 0, 0]}
        />
      </mesh>
      <Ocean
        position={[0, -140, 0]}
        rotation={[hub ? 0 : Math.PI / 4, 0, 0]}
        waterColor={0x00ffff}
        sunColor={0xffffff}
      />
    </>
  );
};
