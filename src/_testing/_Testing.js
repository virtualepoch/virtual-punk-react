import { useRef, useState } from "react";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import {
  Center,
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

export const linkOrbInfo = [
  {
    text: "torus",
    number: 0,
  },
  {
    text: "mach",
    number: 1,
  },
  {
    text: "water",
    number: 2,
  },
];

export const Testing = () => {
  const viewport = useThree((state) => state.viewport);
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1, "red");
  const map = useTexture(imageUrl);
  const ref = useRef();
  const ref2 = useRef();

  const [clicked, setClicked] = useState(false);
  const [number, setNumber] = useState(0);

  useFrame(() => {
    if (clicked) {
      if (ref2.current.scale.x < 2) ref2.current.scale.x += 0.5;
    }
  });

  return (
    <>
      <Center>
        <group
          ref={ref}
          position={[0, 0, 0]}
          scale={viewport.aspect / 8}
          onClick={() => setClicked(!clicked)}
          receiveShadow
          castShadow
        >
          {linkOrbInfo.map((item, index) => (
            <group key={index} position={[index * 3, 0, 0]}>
              <Text
                ref={ref2}
                font="fonts/ARCADE.TTF"
                fontSize={0.4}
                position={[0, 0, 1]}
                anchorY={"center"}
                color={"red"}
              >
                {item.text}
              </Text>

              <Sphere args={[1, 8, 8]}>
                <meshBasicMaterial
                  color={item.number === number ? "cyan" : "black"}
                />
              </Sphere>
            </group>
          ))}
        </group>
      </Center>

      <group>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <directionalLight ref={directionalLight} position={[-2, 4, 2]} />
        <Stars />
        <ExtraSoundPro />
        <ReflectiveFloor />
      </group>
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
