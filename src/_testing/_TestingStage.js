import { useRef } from "react";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import {
  GradientTexture,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  useHelper,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
// COMPONENTS /////////////////////////
import { ReflectiveFloor } from "../components/three/ReflectiveFloor";
import { PlaneWall } from "../components/three/PlaneWall";
import { MedievalSciFiPillar } from "../components/models/MedievalSciFiPillar";
import { Spider } from "../components/models/Spider";
import { Door } from "../components/models/Door";
import { VictorianCouch } from "../components/models/VictorianCouch";
import { useFrame } from "@react-three/fiber";
import { Model } from "../components/models/Model";
// import { Valley } from "../components/models/Valley";
// COMPONENTS

export const TestingStage = () => {
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1, "red");
  const pointLight = useRef();
  useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  useFrame(() => {
    pointLight.current.position.y += 0.1;
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls />

      <directionalLight
        ref={directionalLight}
        position={[-1, 4, 2]}
        intensity={1}
      />

      <pointLight ref={pointLight} position={[0, 3.5, -6]} intensity={2} />

      <Model scale={2} position={[0, -3, -2]} />

      <VictorianCouch
        scale={2}
        position={[-6.5, -3.1, -1.5]}
        rotation-y={degToRad(90)}
      />

      <Door scale={[1.4, 2, 1]} position={[0.8, 1.2, -4]} />

      <PlaneWall args={[20, 20]} position={[0, 7, -9]} />

      <PlaneWall
        args={[20, 20]}
        position={[-6, 7, -1]}
        rotation-y={Math.PI / 2}
      />

      <PlaneWall
        args={[20, 20]}
        position={[6, 7, -1]}
        rotation-y={-Math.PI / 2}
      />

      <Spider
        scale={0.04}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        position={[5.2, 16, 0]}
      />

      <MedievalSciFiPillar position={[-5, -3.6, 3]} />
      <MedievalSciFiPillar position={[5, -3.6, 3]} />
      <MedievalSciFiPillar position={[-5, -3.6, -7]} />
      <MedievalSciFiPillar position={[5, -3.6, -7]} />

      <ReflectiveFloor />

      <Sphere args={[100, 8, 8]} rotation={[0, 0, 0]} position={[0, 1, -10]}>
        <meshBasicMaterial side={THREE.BackSide}>
          <GradientTexture
            stops={[0, 1]}
            colors={["#000", "#ff0000"]}
            size={10}
          />
        </meshBasicMaterial>
      </Sphere>
    </>
  );
};
