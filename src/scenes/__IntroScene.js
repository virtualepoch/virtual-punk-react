import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Clock } from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// COMPONENTS //
import { RabbitHole } from "../components/three/RabbitHole";
import { SpinningPanels } from "../components/three/SpinningPanels";
import { TorusGroup } from "../components/three/TorusGroup";
import { Ocean } from "../components/three/Ocean";

export const IntroScene = ({ start, hub, setHub, performanceLevel }) => {
  const sceneObjects = useRef();
  const clock = new Clock();

  useFrame(() => {
    var a = clock.getElapsedTime();
    var sceneSpeed = start ? 0.004 * (a + 0.5) ** 6 : 0.004;
    if (sceneObjects.current.position.z >= 105) {
      sceneObjects.current.position.z = start ? 105 : 0;
      setHub(start ? true : false);
    }
    sceneObjects.current.position.z += sceneSpeed;
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (hub) navigate("/hub");
  });

  return (
    <group ref={sceneObjects} position={[0, 0, 0]}>
      <OrbitControls
        minDistance={1}
        maxDistance={2}
        minAzimuthAngle={-Math.PI / 3}
        maxAzimuthAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
      />

      <RabbitHole position={[0, 0, -38]} performanceLevel={performanceLevel} />

      <SpinningPanels
        panelsPosition={[0, 0, -95]}
        panelsRotationX={Math.PI / 2}
        panelsRotationYSpeed={start ? 0.1 : -0.01}
        panelsColor="cyan"
      />

      <TorusGroup
        position={[0, 0, -98]}
        rotation={[0, 0, 0]}
        start={start}
        performanceLevel={performanceLevel}
      />

      <Ocean
        position={[0, -140, 0]}
        rotation={[Math.PI / 4, 0, 0]}
        waterColor={0x00ffff}
        sunColor={0xffffff}
      />
    </group>
  );
};
