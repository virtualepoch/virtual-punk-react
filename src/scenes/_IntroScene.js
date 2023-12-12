import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

import { RabbitHole } from "../components/three/RabbitHole";
import { SpinningPanels } from "../components/three/SpinningPanels";
import { TorusGroup } from "../components/three/TorusGroup";
import { Ocean } from "../components/three/Ocean";
import { MyVRButton } from "../components/three/MyVRButton";

export const IntroScene = ({ start, setStart, rabbitHoleTexture }) => {
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

      <MyVRButton start={start} setStart={setStart} />

      <mesh ref={sceneObjects} position={[0, 0, 0]}>
        {!hub && (
          <>
            <RabbitHole
              position={[0, 0, -28]}
              rabbitHoleTexture={rabbitHoleTexture}
            />

            <SpinningPanels
              panelsPosition={[0, 0, -85]}
              panelsRotationX={Math.PI / 2}
              panelsRotationYSpeed={-0.01}
              panelsColor="cyan"
            />
          </>
        )}

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
