import { useRef, useState } from "react";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import { useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Sphere,
  Stars,
  Torus,
  useHelper,
} from "@react-three/drei";
// COMPONENTS
import { ExtraSoundPro } from "../components/models/ExtraSoundPro";
import { ReflectiveFloor } from "../components/three/ReflectiveFloor";
import { degToRad } from "three/src/math/MathUtils";

export const Testing = () => {
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1, "red");

  // const ref1 = useRef();
  // const ref2 = useRef();
  // const [clicked, setClicked] = useState(false);
  // const [number, setNumber] = useState(0);

  const material = new THREE.MeshToonMaterial({
    color: "cyan",
    toneMapped: false,
  });

  const torus1 = useRef();
  const torus2 = useRef();
  const torus3 = useRef();
  useFrame(() => {
    torus1.current.rotation.x += 0.1;
    torus2.current.rotation.z += 0.1;
    torus3.current.rotation.z += 0.1;
  });

  const Atom = () => {
    return (
      <Sphere args={[0.5, 16, 16]} material={material}>
        <Torus ref={torus1} args={[1, 0.1, 1, 10]} rotation-y={degToRad(90)}>
          <Sphere args={[0.2, 8, 8]} position-y={1} material-color="white" />
        </Torus>

        <Torus
          ref={torus2}
          args={[1, 0.1, 1, 10]}
          rotation-x={degToRad(90)}
          rotation-y={degToRad(45)}
          rotation-z={degToRad(45)}
        >
          <Sphere args={[0.2, 8, 8]} position-y={1} material-color="magenta" />
        </Torus>
        <Torus
          ref={torus3}
          args={[1, 0.1, 1, 10]}
          rotation-x={degToRad(90)}
          rotation-y={degToRad(-45)}
          rotation-z={degToRad(-225)}
        >
          <Sphere args={[0.2, 8, 8]} position-y={1} material-color="#0011aa" />
        </Torus>
      </Sphere>
    );
  };

  return (
    <>
      <Atom />
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

// const viewport = useThree((state) => state.viewport);
// TO TEST
// const restaurantScalingFactor = Math.min(
//   Math.max(window.innerWidth / 1300, 0.5),
//   1.2
// );

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
