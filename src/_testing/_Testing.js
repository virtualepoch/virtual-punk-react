import { useRef } from "react";
import * as THREE from "three";
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

// COMPONENTS TO TEST //
import { MyVRButton } from "../components/vr/MyVRButton";
import { HubLink } from "../components/three/HubLink";
import imageTorus from "../assets/images/spaceScene.jpg";
import { useFrame } from "@react-three/fiber";

export const Testing = () => {
  const directionalLight = useRef();
  if (directionalLight.current) {
    directionalLight.current.useHelper(
      directionalLight,
      DirectionalLightHelper,
      1,
      "red"
    );
  }

  const hubLink = useRef();

  const clock = new THREE.Clock();

  useFrame(() => {
    const a = clock.getElapsedTime() * 2;

    if (a < 2) hubLink.current.position.x = a;
    if (a > 2) {
      hubLink.current.position.x = 2;
      hubLink.current.position.y = a - 2;
    }
    if (a > 4) {
      hubLink.current.position.y = 2;
      hubLink.current.position.x -= a - 4;
    }
    if (a > 6) {
      hubLink.current.position.x = 0;
      hubLink.current.position.y -= a - 6;
    }
    if (a > 8) clock.start();
  });

  return (
    <>
      <mesh ref={hubLink} position={[0, 0, -18]}>
        <HubLink size={2} image={imageTorus} />
      </mesh>

      <directionalLight ref={directionalLight} />
      <Stars />
      <ExtraSoundPro />
      <ReflectiveFloor />
    </>
  );
};
