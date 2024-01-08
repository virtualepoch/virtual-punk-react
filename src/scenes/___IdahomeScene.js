import { useRef } from "react";
// import * as THREE from "three";
// import { DirectionalLightHelper } from "three";
import {
  // useHelper,
  PerspectiveCamera,
  OrbitControls,
  Float,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

// COMPONENTS
import { PoolMountains } from "../__idahome/models/PoolMountains";
import { WaterOne } from "../components/three/WaterOne";
import { Title3d } from "../__idahome/components/Title3d";
import { Beachball } from "../__idahome/models/Beachball";

export const IdahomeScene = ({ performanceLevel, bgRes }) => {
  const directionalLight = useRef();
  // useHelper(directionalLight, DirectionalLightHelper, 1, "red");
  // const pointLight = useRef();
  // useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  return (
    <>
      <group>
        <PerspectiveCamera makeDefault position={[0, 0, 0.5]} />
        <OrbitControls
          minDistance={0.1}
          maxDistance={1}
          minAzimuthAngle={degToRad(-30)}
          maxAzimuthAngle={degToRad(60)}
          maxPolarAngle={degToRad(100)}
          minPolarAngle={degToRad(70)}
        />

        <directionalLight
          ref={directionalLight}
          position={[-2, 3, 1]}
          intensity={3}
        />

        {/* <pointLight ref={pointLight} position={[0, 0, -3]} intensity={2} /> */}

        <Title3d />

        <PoolMountains
          position={[0, -1, 0]}
          rotY={degToRad(100)}
          bgRes={bgRes}
        />

        <WaterOne
          width={7}
          height={7}
          position={[1, -1, -5]}
          rotY={degToRad(-40)}
        />

        <Float
          speed={3} // Animation speed, defaults to 1
          rotationIntensity={0.1} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Beachball position={[0.5, -1, -4]} />
        </Float>
      </group>
    </>
  );
};
