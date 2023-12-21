import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFrame } from "@react-three/fiber";
// COMPONENTS //
import { RabbitHole } from "../components/three/RabbitHole";
import { SpinningPanels } from "../components/three/SpinningPanels";
import { TorusGroup } from "../components/three/TorusGroup";
import { Ocean } from "../components/three/Ocean";
import { Clock } from "three";
// import { MyVRButton } from "../components/vr/MyVRButton";

export const IntroScene = ({
  camera,
  camControls,
  player,
  start,
  hub,
  setHub,
  performance,
}) => {
  const clock = new Clock();

  useFrame(() => {
    var a = clock.getElapsedTime();
    var speed = start ? 0.004 * (a + 0.5) ** 6 : 0.004;
    if (player.current.position.z <= 0) {
      player.current.position.z = start ? 0 : 100;
      setHub(start ? true : false);
    }
    camControls.current.setTarget(
      player.current.position.x,
      player.current.position.y,
      player.current.position.z - 1
    );
    camControls.current.setPosition(0, 0, player.current.position.z + 0.1);
    player.current.position.z -= speed;
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (hub) navigate("/hub");
  });

  return (
    <>
      <RabbitHole position={[0, 0, 56]} performance={performance} />

      <SpinningPanels
        panelsPosition={[0, 0, 0]}
        panelsRotationX={Math.PI / 2}
        panelsRotationYSpeed={start ? 0.1 : -0.01}
        panelsColor="cyan"
      />

      <TorusGroup
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        start={start}
        performance={performance}
      />

      <Ocean
        position={[0, -140, 0]}
        rotation={[Math.PI / 4, 0, 0]}
        waterColor={0x00ffff}
        sunColor={0xffffff}
      />
    </>
  );
};
