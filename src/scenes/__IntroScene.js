import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFrame } from "@react-three/fiber";
// COMPONENTS //
import { RabbitHole } from "../components/three/RabbitHole";
import { SpinningPanels } from "../components/three/SpinningPanels";
import { TorusGroup } from "../components/three/TorusGroup";
import { Ocean } from "../components/three/Ocean";
// import { MyVRButton } from "../components/vr/MyVRButton";

export const IntroScene = ({
  start,
  setStart,
  hub,
  setHub,
  downgradedPerformance,
}) => {
  const sceneObjects = useRef();
  var sceneSpeed = start ? 0.7 : 0.004;

  useFrame(() => {
    if (sceneObjects.current.position.z >= 105) {
      sceneObjects.current.position.z = 0;
      setHub(start ? true : false);
    }
    sceneObjects.current.position.z += sceneSpeed;
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (hub) navigate("/hub");
  });

  return (
    <>
      <mesh ref={sceneObjects} position={[0, 0, 0]}>
        <RabbitHole
          position={[0, 0, -38]}
          downgradedPerformance={downgradedPerformance}
        />

        <SpinningPanels
          panelsPosition={[0, 0, -95]}
          panelsRotationX={Math.PI / 2}
          panelsRotationYSpeed={-0.01}
          panelsColor="cyan"
        />

        <TorusGroup
          position={[0, 0, -98]}
          rotation={[0, 0, 0]}
          start={start}
          downgradedPerformance={downgradedPerformance}
        />
      </mesh>

      <Ocean
        position={[0, -140, 0]}
        rotation={[Math.PI / 4, 0, 0]}
        waterColor={0x00ffff}
        sunColor={0xffffff}
      />
    </>
  );
};
