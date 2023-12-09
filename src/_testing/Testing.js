import * as THREE from "three";
import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  MeshReflectorMaterial,
  Stars,
} from "@react-three/drei";
import { DirectionalLightHelper } from "three";
// import { UnstableAntimatter } from "../components/models/UnstableAntimatter";
// import { LightBeam } from "../components/models/LightBeam";
// import { TheGreatMorpheus } from "../components/models/TheGreatMorpheus";
import { PcSpider } from "../components/models/PcSpider1k";
import { ExtraSoundPro } from "../components/models/ExtraSoundPro";
import { HubScenes } from "../components/three/HubScenes";
// import { RampagingTRex } from "../components/models/RampagingTRex";

export function Testing() {
  const Floor = () => {
    return (
      <mesh position={[0, -3, 0]} rotation={[-Math.PI / 1.95, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[0, 0]} // Blur ground reflections (width, height), 0 skips blur
          mixBlur={0} // How much blur mixes with surface roughness (default = 1)
          mixStrength={1} // Strength of the reflections
          mixContrast={1} // Contrast of the reflections
          resolution={256} // Off-buffer resolution, lower=faster, higher=better quality, slower
          mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
          depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
          minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
          maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
          depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
          distortion={1} // Amount of distortion based on the distortionMap texture
          distortionMap={
            null
            // distortionTexture
          } // The red channel of this texture is used as the distortion map. Default is null
          debug={
            1
          } /* Depending on the assigned value, one of the following channels is shown:
      0 = no debug
      1 = depth channel
      2 = base channel
      3 = distortion channel
      4 = lod channel (based on the roughness)
    */
          reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
          color={"#15ffff"}
        />
        {/* <meshStandardMaterial receiveShadow /> */}
      </mesh>
    );
  };

  const light = useRef();
  if (light.current) {
    light.current.useHelper(light, DirectionalLightHelper, 1, "red");
  }

  return (
    <>
      {/* <RampagingTRex /> */}
      <HubScenes
        panelDistance={3}
        panelSize={[8, 8, 1]}
        panelsPosition={[0, 0, 0]}
        panelsRotationX={0}
        panelsRotationYSpeed={-0.01}
        panelsColor="cyan"
      />
      {/* <TheGreatMorpheus /> */}
      {/* <LightBeam /> */}
      {/* <Oyes /> */}
      {/* <PcSpider position={[0, -1, 0]} scale={0.4} rotation={[2, Math.PI, 0]} /> */}
      <Stars />
      <Floor receiveShadow />
      <ExtraSoundPro />
      <Environment preset="city" />
      <ambientLight intensity={1} />
      <directionalLight
        ref={light}
        position={[0, 15, 10]}
        // angle={0.3}
        intensity={1}
        color="white"
        castShadow
      />
      <ContactShadows position-y={0} opacity={1} />
    </>
  );
}

// const Shadows = memo(() => (
//   <AccumulativeShadows temporal frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
//     <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
//   </AccumulativeShadows>
// ))
