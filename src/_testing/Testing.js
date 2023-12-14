import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import {
  ContactShadows,
  Environment,
  Stars,
  useTexture,
} from "@react-three/drei";
// COMPONENTS
import { ExtraSoundPro } from "../components/models/ExtraSoundPro";
import { ReflectiveFloor } from "../components/three/ReflectiveFloor";
import { HubLinkPanel, HubScene } from "../components/three/HubLinkPanel";
import { MyVRButton } from "../components/vr/MyVRButton";

import { useThree } from "@react-three/fiber";
import { AppearanceEffectLightBeam } from "../components/models/AppearanceEffectLightBeam";

// import { MeshUIPanel } from "../components/three/MeshUIPanel";
// import { UnstableAntimatter } from "../components/models/UnstableAntimatter";
// import { LightBeam } from "../components/models/LightBeam";
// import { TheGreatMorpheus } from "../components/models/TheGreatMorpheus";
// import { PcSpider } from "../components/models/PcSpider1k";
// import { RampagingTRex } from "../components/models/RampagingTRex";

export const Testing = () => {
  return (
    <>
      <AppearanceEffectLightBeam />
      {/* <MeshUIPanel /> */}
      {/* <MyVRButton>Start</MyVRButton> */}
      <Environment preset="city" />

      <ambientLight intensity={1} />
      <directionalLight
        // ref={light}
        position={[0, 15, 10]}
        // angle={0.3}
        intensity={1}
        color="white"
        castShadow
      />
      <Stars />
      <ExtraSoundPro />
      <ReflectiveFloor />
      <ContactShadows position-y={-1.8} opacity={1} color="red" />
    </>
  );
};

// const Shadows = memo(() => (
//   <AccumulativeShadows temporal frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
//     <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
//   </AccumulativeShadows>
// ))

// const light = useRef();
// if (light.current) {
//   light.current.useHelper(light, DirectionalLightHelper, 1, "red");
// }
