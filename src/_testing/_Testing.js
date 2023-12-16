import { useRef, useState } from "react";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import {
  ContactShadows,
  Environment,
  Hud,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
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
import { useFrame, useThree } from "@react-three/fiber";
import { TorusGroup } from "../components/three/TorusGroup";

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

  // const hubLink = useRef();
  // const clock = new THREE.Clock();
  // useFrame(() => {
  //   const a = clock.getElapsedTime() * 2;

  //   if (a < 2) hubLink.current.position.x = a;
  //   if (a > 2) {
  //     hubLink.current.position.x = 2;
  //     hubLink.current.position.y = a - 2;
  //   }
  //   if (a > 4) {
  //     hubLink.current.position.y = 2;
  //     hubLink.current.position.x -= a - 4;
  //   }
  //   if (a > 6) {
  //     hubLink.current.position.x = 0;
  //     hubLink.current.position.y -= a - 6;
  //   }
  //   if (a > 8) clock.start();
  // });

  function Viewcube({ renderPriority = 1, matrix = new THREE.Matrix4() }) {
    const mesh = useRef(null);
    const { camera } = useThree();
    const [hovered, hover] = useState(null);

    useFrame(() => {
      // Spin mesh to the inverse of the default cameras matrix
      matrix.copy(camera.matrix).invert();
      mesh.current.quaternion.setFromRotationMatrix(matrix);
    });

    return (
      <Hud renderPriority={renderPriority}>
        <OrthographicCamera makeDefault position={[0, 0, 100]} />
        <mesh ref={mesh}>
          <HubLink size={[2, 2, 2]} image={"/images/TorusScene.jpg"}/>
        </mesh>
        <ambientLight intensity={1} />
        <pointLight position={[200, 200, 100]} intensity={0.5} />
      </Hud>
    );
  }

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />
      <OrbitControls />
      <TorusGroup />
      {/* <mesh ref={hubLink} position={[0, 0, -18]}>
        <HubLink size={2} image={imageTorus} />
      </mesh> */}
      <Viewcube />
      <directionalLight ref={directionalLight} />
      <Stars />
      <ExtraSoundPro />
      <ReflectiveFloor />
    </>
  );
};
