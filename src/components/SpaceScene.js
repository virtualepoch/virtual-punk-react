import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Line, PerspectiveCamera, useScroll } from "@react-three/drei";
import { Spacecraft } from "./models/Spacecraft";
import { LavaPlanet } from "./models/LavaPlanet";
import * as THREE from "three";

const LINE_NB_POINTS = 2000;

export const SpaceScene = () => {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -10), new THREE.Vector3(-2, 0, -20), new THREE.Vector3(-3, 0, -30), new THREE.Vector3(0, 0, -40), new THREE.Vector3(5, 0, -50), new THREE.Vector3(7, 0, -60), new THREE.Vector3(5, 0, -70), new THREE.Vector3(0, 0, -80), new THREE.Vector3(0, 0, -90), new THREE.Vector3(0, 0, -100)], false, "catmullrom", 0.5);
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0, 0.2);

    return shape;
  }, []);

  const cameraGroup = useRef();
  const scroll = useScroll();

  useFrame((_state, delta) => {
    const curPointIndex = Math.min(Math.round(scroll.offset * linePoints.length), linePoints.length - 1);
    const curPoint = linePoints[curPointIndex];

    cameraGroup.current.position.lerp(curPoint, delta * 24);
  });

  return (
    <>
      <OrbitControls enableZoom={false} />
      <group ref={cameraGroup}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 10]} angle={0.3} />
        <Stars />
        <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
        <Float floatIntensity={2} speed={2}>
          <Spacecraft />
        </Float>
      </group>
      <group position-y={-2}>
        <Line points={linePoints} color={"white"} opacity={0.7} transparent lineWidth={16} />
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial color={"white"} opacity={0.7} transparent />
        </mesh>
      </group>
      <LavaPlanet scale={[0.3, 0.3, 0.3]} position={[-2, 1, -3]} />
      <LavaPlanet scale={[0.3, 0.3, 0.3]} position={[-2, -1, -1]} />
      <LavaPlanet scale={[0.5, 0.5, 0.5]} position={[2, 1, -15]} />
    </>
  );
};
