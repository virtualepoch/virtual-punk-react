import { useEffect, useRef } from "react";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import { useFrame } from "@react-three/fiber";
import {
  GradientTexture,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Sphere,
  useHelper,
} from "@react-three/drei";
// COMPONENTS
import { ExtraSoundPro } from "../components/models/ExtraSoundPro";
import { degToRad } from "three/src/math/MathUtils";

export const TestingStage = () => {
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1, "red");
  const pointLight = useRef();
  useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  const material = new THREE.MeshStandardMaterial({
    color: "silver",
    toneMapped: false,
  });

  const cam = useRef();
  // const clock = new THREE.Clock();
  useFrame(() => {
    // const a = clock.getElapsedTime();
    if (cam.current) {
      // cam.current.position.z += 1;
    }
    pointLight.current.rotation.y += 0.01;
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} ref={cam}>
        <OrbitControls />
      </PerspectiveCamera>
      <group>
        <directionalLight
          ref={directionalLight}
          position={[-2, 4, 2]}
          intensity={2}
        />
        <pointLight ref={pointLight} position={[0, -1, 0]} intensity={2} />
        <ExtraSoundPro />
        <Sphere
          args={[40, 8, 8]}
          rotation={[0, 0, 0]}
          position={[0, 1, -10]}
        >
          <meshBasicMaterial side={THREE.BackSide}>
            <GradientTexture
              stops={[0, 0.5, 1]}
              colors={["#009b9b", "#a5cc82", "#009b9b"]}
              size={10}
            />
          </meshBasicMaterial>
        </Sphere>
        <Plane
          args={[50, 25]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -4, 0]}
          material={material}
          receiveShadow
        />
      </group>
    </>
  );
};

// // This material requires a displacementMap- need to research
// const material1 = new THREE.MeshDepthMaterial({
//   color: "red",
//   toneMapped: false,
//   // displacementMap={}
// });
// const material2 = new THREE.MeshLambertMaterial({
//   color: "green",
//   toneMapped: false,
// });

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
