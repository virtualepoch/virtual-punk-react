import { useMemo, useRef } from "react";
import { useFrame, Sphere } from "@react-three/fiber";
import { Stars, Float, Line, PerspectiveCamera, useScroll } from "@react-three/drei";
import { Spacecraft } from "../components/models/Spacecraft";
import * as THREE from "three";

const LINE_NB_POINTS = 200;

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
    const pointAhead = linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];

    const xDisplacement = (pointAhead.x - curPoint.x) * 80;

    const angleRotation = (xDisplacement < 0 ? 1 : -1) * Math.min(Math.abs(xDisplacement), Math.PI / 3);

    const targetSpacecraftQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(spacecraft.current.rotation.x, spacecraft.current.rotation.y, angleRotation));

    // const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(cameraGroup.current.rotation.x, cameraGroup.current.rotation.z, angleRotation));

    spacecraft.current.quaternion.slerp(targetSpacecraftQuaternion, delta * 2);
    // cameraGroup.current.quaternion.slerp(targetCameraQuaternion, delta * 2);

    cameraGroup.current.position.lerp(curPoint, delta * 24);
  });

  const spacecraft = useRef();

  function Sphere() {
    const meshRef = useRef(null);

    useFrame(() => {
      if (!meshRef.current) {
        return;
      }
      meshRef.current.rotation.y += 0.005;
    });

    return (
      <mesh ref={meshRef} scale={[4, 4, 4]} position={[0, 0, -115]}>
        <sphereGeometry args={[0.5, 11, 11]} />
        <meshStandardMaterial color="red" wireframe={true} />
      </mesh>
    );
  }



  return (
    <>
  
      <group ref={cameraGroup}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 10]} angle={0.3} />
        <Stars />
        <PerspectiveCamera position={[0, 0, 5]} fov={40} makeDefault />
        <group ref={spacecraft}>
          <Float floatIntensity={2} speed={2}>
            <Spacecraft />
          </Float>
        </group>
      </group>
      <group position-y={-2}>
        <Line points={linePoints} color="white" opacity={0.7} transparent lineWidth={16} />
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
          <meshStandardMaterial color="white" opacity={0.7} transparent />
        </mesh>
      </group>
      <Sphere />
    </>
  );
};
