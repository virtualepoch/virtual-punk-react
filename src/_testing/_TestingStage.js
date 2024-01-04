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
import { PlaneWall } from "../components/three/PlaneWall";
import { MedievalSciFiPillar } from "../components/models/MedievalSciFiPillar";
import { Spider } from "../components/models/Spider";
import { Door } from "../components/models/Door";
import { VictorianCouch } from "../components/models/VictorianCouch";
import { FearCrawl } from "../components/models/FearCrawl";
import { PlaneFloor } from "../components/three/PlaneFloor";
import { SpiderUglyAnim } from "../components/models/SpiderUglyAnim";
import { SpiderHifiAnim } from "../components/models/SpiderHifiAnim";
import { useFrame } from "@react-three/fiber";
import { SpiderWhiteAnim } from "../components/models/SpiderWhiteAnim";
import { SpiderWolfAnim } from "../components/models/SpiderWolfAnim";

export const TestingStage = () => {
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1, "red");
  const pointLight = useRef();
  useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  const spiderHifi = useRef();
  const spiderWhite = useRef();
  const spiderWolf = useRef();

  useFrame(() => {
    if (spiderHifi.current.position.z > 10) spiderHifi.current.position.z = -10;
    spiderHifi.current.position.z += 0.02;

    if (spiderWhite.current.position.z > 10)
      spiderWhite.current.position.z = -10;
    spiderWhite.current.position.z += 0.02;

    if (spiderWolf.current.position.z > 10) spiderWolf.current.position.z = -10;
    spiderWolf.current.position.z += 0.02;
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 5, 1]} />
      <OrbitControls />

      <directionalLight
        ref={directionalLight}
        position={[-1, 4, 2]}
        intensity={1}
      />

      <pointLight ref={pointLight} position={[0, 0.5, -0.5]} intensity={2} />

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

      <Door scale={[1.4, 2, 1]} position={[0.8, 4.4, -4]} />

      <PlaneWall args={[12, 20]} position={[0, 10, -9]} />

      <PlaneFloor
        args={[12, 20]}
        position={[0, -0.2, 0]}
        rotation-x={-Math.PI / 2}
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

      <SpiderUglyAnim scale={3} position={[0, 0, -2]} />

      <group ref={spiderHifi}>
        <SpiderHifiAnim scale={0.05} position={[2, 0, -2]} />
      </group>

      <group ref={spiderWhite}>
        <SpiderWhiteAnim scale={0.5} position={[-1, 0, -2]} />
      </group>

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
