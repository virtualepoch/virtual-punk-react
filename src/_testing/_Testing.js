import { useRef, useState } from "react";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import {
  ContactShadows,
  Decal,
  Environment,
  Hud,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Sphere,
  Stars,
  Text,
  Text3D,
  useHelper,
  useTexture,
} from "@react-three/drei";
// COMPONENTS
import { ExtraSoundPro } from "../components/models/ExtraSoundPro";
import { ReflectiveFloor } from "../components/three/ReflectiveFloor";

// COMPONENTS TO TEST //
import { MyVRButton } from "../components/vr/MyVRButton";
import { HubLink } from "../components/three/HubLink";
import { useFrame, useThree } from "@react-three/fiber";
import { TorusGroup } from "../components/three/TorusGroup";
// ASSETS
import imageUrl from "../assets/images/spaceScene.jpg";

export const Testing = () => {
  const directionalLight = useRef();
  const helper = useHelper(directionalLight, DirectionalLightHelper, 1, "red");

  const map = useTexture(imageUrl);

  const ref = useRef();
  useFrame(() => {
    if (clicked) {
      if (ref.current.scale.z > 0) ref.current.scale.z -= 0.5;
    }
  });

  const [clicked, setClicked] = useState(false);

  const viewport = useThree((state) => state.viewport);
  const text3DScale = viewport.aspect * 4;

  return (
    <>
      <mesh
        ref={ref}
        position={[0, 0, 0]}
        scale={[text3DScale, text3DScale, text3DScale * 4]}
        onClick={() => setClicked(!clicked)}
        receiveShadow
        castShadow
      >
        <Text3D
          font="fonts/Arcade.json"
          size={0.1}
          position={[0, 0, 0]}
          anchorY={"center"}
          material-color={"white"}
          scale={[1, 1, 0.2]}
          receiveShadow
          castShadow
        >
          VR
        </Text3D>
      </mesh>

      {/* <mesh position={[-1.5, 0, 0]}>
        <Text
          font="fonts/ARCADE.TTF"
          fontSize={0.4}
          position={[0, 0, 1]}
          anchorY={"center"}
          color={"red"}
        >
          hello
        </Text>

        <Sphere args={[1, 8, 8]}>
          <meshBasicMaterial color="black" />
        </Sphere>
      </mesh> */}

      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls />
      <directionalLight ref={directionalLight} position={[-2, 4, 2]} />
      <Stars />
      <ExtraSoundPro />
      <ReflectiveFloor />
    </>
  );
};

///////////////////////////////////////////////////////////////////////////
// ANIMATION TESTING WITH 'getElapsedTime' //////////////////////////////
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

// <mesh ref={hubLink} position={[0, 0, -18]}>
//   <HubLink size={2} image={imageTorus} />
// </mesh>

///////////////////////////////////////////////////////////////////////////////////////////
// VIEWCUBE / RENDER PRIORITY PERSPECTIVE CHANGER / !!!!!! COULDN'T GET TO WORK ////////////
// function Viewcube({ renderPriority = 1, matrix = new THREE.Matrix4() }) {
//   const mesh = useRef(null);
//   const { camera } = useThree();
//   const [hovered, hover] = useState(null);

//   useFrame(() => {
//     // Spin mesh to the inverse of the default cameras matrix
//     matrix.copy(camera.matrix).invert();
//     mesh.current.quaternion.setFromRotationMatrix(matrix);
//   });

//   return (
//     <Hud renderPriority={renderPriority}>
//       <OrthographicCamera makeDefault position={[0, 0, 100]} />
//       <mesh ref={mesh}>
//         <HubLink size={[2, 2, 2]} image={"/images/TorusScene.jpg"}/>
//       </mesh>
//       <ambientLight intensity={1} />
//       <pointLight position={[200, 200, 100]} intensity={0.5} />
//     </Hud>
//   );
// }
