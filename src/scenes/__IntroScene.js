import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFrame } from "@react-three/fiber";
// COMPONENTS //
import { RabbitHole } from "../components/three/RabbitHole";
import { SpinningPanels } from "../components/three/SpinningPanels";
import { TorusGroup } from "../components/three/TorusGroup";
import { Ocean } from "../components/three/Ocean";
import gsap from "gsap";
import { Clock } from "three";
// import { MyVRButton } from "../components/vr/MyVRButton";

export const IntroScene = ({
  camera,
  camControls,
  start,
  hub,
  setHub,
  performance,
}) => {
  const sceneObjects = useRef();
  // var sceneSpeed = start ? 0.7 : 0.004;

  // const clock = new Clock()
  // useFrame(() => {
  // const a = clock.getElapsedTime()
  // if (sceneObjects.current.position.z >= 105) {
  //   sceneObjects.current.position.z = start ? 105 : 0;
  //   setHub(start ? true : false);
  // }
  // sceneObjects.current.position.z += sceneSpeed;
  // camControls.current.moveTo([0, 0, a + 1]);
  // });

  useEffect(() => {
    if (!sceneObjects.current) return;
    gsap.to(sceneObjects.current.position, {
      z: 105,
      ease: start ? "power4.in" : "linear",
      duration: start ? 4 : 300,
      onUpdate: () => {
        if (start && sceneObjects.current.position.z >= 105) setHub(true);
      },
    });
  }, [start, hub, setHub, sceneObjects]);

  const navigate = useNavigate();
  useEffect(() => {
    if (hub) navigate("/hub");
  });

  return (
    <>
      <group ref={sceneObjects} position={[0, 0, 0]}>
        <RabbitHole position={[0, 0, -38]} performance={performance} />

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
          performance={performance}
        />
      </group>

      <Ocean
        position={[0, -140, 0]}
        rotation={[Math.PI / 4, 0, 0]}
        waterColor={0x00ffff}
        sunColor={0xffffff}
      />
    </>
  );
};
