import { useRef } from "react";
import * as THREE from "three";
// import { DirectionalLightHelper } from "three";
import {
  GradientTexture,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  // useHelper,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
// COMPONENTS /////////////////////////
import { PlaneWall } from "../components/three/PlaneWall";
import { MedievalSciFiPillar } from "../components/models/MedievalSciFiPillar";
import { Spider } from "../components/models/Spider";
import { Door } from "../components/models/Door";
import { VictorianCouch } from "../components/models/VictorianCouch";
import { FearCrawl } from "../components/models/FearCrawl";
import { PlaneFloor } from "../components/three/PlaneFloor";
import { useFrame } from "@react-three/fiber";
import { SpiderWolfAnim } from "../components/models/SpiderWolfAnim";
import { BoxDoor } from "../components/three/BoxDoor";

export const TestingStage = ({ vrSession, performance }) => {
  const directionalLight = useRef();
  // useHelper(directionalLight, DirectionalLightHelper, 1, "red");
  // const pointLight = useRef();
  // useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  const spiderWolf = useRef();
  useFrame(() => {
    if (spiderWolf.current.position.z > 10) spiderWolf.current.position.z = -10;
    spiderWolf.current.position.z += 0.02;
  });

  return (
    <>
      <PerspectiveCamera
        makeDefault={vrSession ? false : true}
        position={[0, 1, 5]}
      />
      <OrbitControls />

      <directionalLight
        ref={directionalLight}
        position={[-1, 4, 2]}
        intensity={1}
      />

      <FearCrawl
        scale={2}
        position={[6, 25, -12]}
        rotation={[degToRad(55), degToRad(-90), 0]}
      />

      <VictorianCouch
        scale={1.8}
        position={[-6.5, -0.1, -1.5]}
        rotation-y={degToRad(90)}
      />

      {performance === 2 ? (
        <Door scale={[1.4, 2, 1]} position={[0.8, 4.4, -4]} />
      ) : (
        <BoxDoor position={[0, 0, -7]} />
      )}

      <PlaneWall args={[12, 20]} position={[0, 10, -9]} />

      <PlaneFloor
        args={[12, 20]}
        position={[0, -0.2, 0]}
        rotX={-Math.PI / 2}
        performance={performance}
      />

      <PlaneWall
        args={[20, 20]}
        position={[-6, 10, -1]}
        rotation-y={Math.PI / 2}
      />

      <PlaneWall
        args={[20, 20]}
        position={[6, 10, -1]}
        rotation-y={-Math.PI / 2}
      />

      <Spider
        scale={0.04}
        rotation={[degToRad(110), 0, Math.PI / 2]}
        position={[5.2, 17, 7]}
      />

      <group ref={spiderWolf}>
        <SpiderWolfAnim
          scale={2}
          position={[0, 0, -1]}
          rotation-y={degToRad(180)}
        />
      </group>

      <MedievalSciFiPillar position={[-5, -0.5, 3]} />
      <MedievalSciFiPillar position={[5, -0.5, 3]} />
      <MedievalSciFiPillar position={[-5, -0.5, -7]} />
      <MedievalSciFiPillar position={[5, -0.5, -7]} />

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
