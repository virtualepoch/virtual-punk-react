import { useEffect, useRef } from "react";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import { useFrame } from "@react-three/fiber";
import {
  GradientTexture,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Sphere,
  useHelper,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { ReflectiveFloor } from "../components/three/ReflectiveFloor";
import { MedievalSciFiPillar } from "../components/models/MedievalSciFiPillar";
import { Clockdoor } from "../components/models/Clockdoor";
import { Sofa } from "../components/models/Sofa";
import { PlaneBrickWall } from "../components/three/PlaneBrickWall";
import { useControls } from "leva";
import { PlaneBrickWall2 } from "../components/three/PlaneBrickWall2";
import { Spider } from "../components/models/Spider";
// COMPONENTS

export const TestingStage = () => {
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1, "red");
  const pointLight = useRef();
  useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 1]}>
        <OrbitControls />
      </PerspectiveCamera>

      <directionalLight
        ref={directionalLight}
        position={[-2, 4, 2]}
        intensity={2}
      />

      <PlaneBrickWall
        args={[20, 20, 2, 2]}
        position={[-6, 7, -1]}
        rotation-y={Math.PI / 2}
        displacementScale={1}
        aoMapIntensity={1}
        roughness={1}
      />

      <PlaneBrickWall2
        args={[20, 20, 2, 2]}
        position={[6, 7, -1]}
        rotation-y={-Math.PI / 2}
        displacementScale={4}
        aoMapIntensity={5}
        roughness={0}
      />

      <Spider
        scale={0.04}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        position={[5.2, 16, 0]}
      />

      <Clockdoor scale={0.02} position={[0, -3, -5]} />
      <pointLight ref={pointLight} position={[0, 3.5, -4]} intensity={2} />

      <Sofa
        scale={0.02}
        position={[-4.5, -3.05, -1]}
        rotation-y={Math.PI / 2}
      />

      <MedievalSciFiPillar position={[-5, -3.6, 3]} />
      <MedievalSciFiPillar position={[5, -3.6, 3]} />
      <MedievalSciFiPillar position={[-5, -3.6, -7]} />
      <MedievalSciFiPillar position={[5, -3.6, -7]} />

      <ReflectiveFloor />

      <Sphere args={[100, 8, 8]} rotation={[0, 0, 0]} position={[0, 1, -10]}>
        <meshBasicMaterial side={THREE.BackSide}>
          <GradientTexture
            stops={[0, 0.5, 1]}
            colors={["#000", "#009b9b", "#000"]}
            size={10}
          />
        </meshBasicMaterial>
      </Sphere>
    </>
  );
};
