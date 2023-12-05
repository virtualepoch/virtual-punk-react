import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import a1 from "../assets/images/torus/Abstract_512x512-75.png";
import a2 from "../assets/images/torus/future-machine-512.jpg";
import a3 from "../assets/images/torus/sci-metal-512.jpg";
import a4 from "../assets/images/torus/sci-metal-1200.jpg";
import a5 from "../assets/images/torus/sci-metal-2-512.jpg";
import a6 from "../assets/images/torus/sci-metal-2-1024.jpg";
import a7 from "../assets/images/torus/space-cruiser-512.png";
import a8 from "../assets/images/torus/space-cruiser-1024.png";
import a9 from "../assets/images/torus/Tile_02-512x512.png";
import a10 from "../assets/images/torus/Tile_04-512x512.png";
import a11 from "../assets/images/torus/Tile_11-512x512.png";
import bg1 from "../assets/images/torus/bg/Blue_Nebula_01-1024x1024.png";
import bg2 from "../assets/images/torus/bg/Blue_Nebula_02-1024x1024.png";
import bg3 from "../assets/images/torus/bg/Blue_Nebula_03-1024x1024.png";

import { button, buttonGroup, folder, useControls } from "leva";
import { CameraControls, OrbitControls, useHelper } from "@react-three/drei";
import { TorusMesh } from "../components/three/TorusMesh";
import { DEG2RAD } from "three/src/math/MathUtils";

export const TorusScene = ({
  bg,
  bgWrapX,
  bgWrapY,
  texture,
  wrapX,
  wrapY,
  intensity,
}) => {
  const TorusGroup = () => {
    // function textureChanger() {
    //   if (window.innerWidth < 700) {
    //     return a1;
    //   } else {
    //     return a2;
    //   }
    // }

    const {
      radialSegments,
      tubularSegments,
      radius1,
      radius2,
      radius3,
      radius4,
      mesh1RotX,
      mesh1RotY,
      mesh1RotZ,
      mesh2RotX,
      mesh2RotY,
      mesh2RotZ,
      mesh3RotX,
      mesh3RotY,
      mesh3RotZ,
      mesh4RotX,
      mesh4RotY,
      mesh4RotZ,
    } = useControls(
      "TorusMesh Dimension/Rotation",
      {
        radialSegs: {
          value: 8,
          min: 2,
          max: 16,
          step: 1,
        },
        tubularSegs: {
          value: 16,
          min: 3,
          max: 64,
          step: 1,
        },
        radius1: {
          value: 0.1,
          min: 0.02,
          max: 0.1,
          step: 0.01,
        },
        radius2: {
          value: 0.1,
          min: 0.02,
          max: 0.1,
          step: 0.01,
        },
        radius3: {
          value: 0.1,
          min: 0.02,
          max: 0.1,
          step: 0.01,
        },
        radius4: {
          value: 0.1,
          min: 0.02,
          max: 0.1,
          step: 0.01,
        },
        mesh1RotX: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh1RotY: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh1RotZ: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh2RotX: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh2RotY: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh2RotZ: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh3RotX: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh3RotY: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh3RotZ: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh4RotX: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh4RotY: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
        mesh4RotZ: {
          value: 0,
          min: 0,
          max: 0.1,
          step: 0.01,
        },
      },
      { collapsed: true }
    );

    const meshTexture = useLoader(
      THREE.TextureLoader,
      texture === 1
        ? a1
        : texture === 2
        ? a2
        : texture === 3
        ? a3
        : texture === 4
        ? a4
        : texture === 5
        ? a5
        : texture === 6
        ? a6
        : texture === 7
        ? a7
        : texture === 8
        ? a8
        : texture === 9
        ? a9
        : texture === 10
        ? a10
        : a11
    );

    meshTexture.repeat.set(wrapY, wrapX);
    meshTexture.wrapS = meshTexture.wrapT = THREE.RepeatWrapping;

    const meshRef1 = useRef(null);
    const meshRef2 = useRef(null);
    const meshRef3 = useRef(null);
    const meshRef4 = useRef(null);

    useFrame(() => {
      if (meshRef1.current) {
        meshRef1.current.rotation.x += mesh1RotX;
        meshRef1.current.rotation.y += mesh1RotY;
        meshRef1.current.rotation.z += mesh1RotZ;
      }
      if (meshRef2.current) {
        meshRef2.current.rotation.x += mesh2RotX;
        meshRef2.current.rotation.y += mesh2RotY;
        meshRef2.current.rotation.z += mesh2RotZ;
      }
      if (meshRef3.current) {
        meshRef3.current.rotation.x += mesh3RotX;
        meshRef3.current.rotation.y += mesh3RotY;
        meshRef3.current.rotation.z += mesh3RotZ;
      }
      if (meshRef4.current) {
        meshRef4.current.rotation.x += mesh4RotX;
        meshRef4.current.rotation.y += mesh4RotY;
        meshRef4.current.rotation.z += mesh4RotZ;
      }
    });

    return (
      <>
        <TorusMesh
          args={[0.9, radius1, radialSegments, tubularSegments]}
          map={meshTexture}
          torusMeshRef={meshRef1}
        />
        <TorusMesh
          args={[1.1, radius2, radialSegments, tubularSegments]}
          map={meshTexture}
          torusMeshRef={meshRef2}
        />
        <TorusMesh
          args={[1.3, radius3, radialSegments, tubularSegments]}
          map={meshTexture}
          torusMeshRef={meshRef3}
        />
        <TorusMesh
          args={[1.5, radius4, radialSegments, tubularSegments]}
          map={meshTexture}
          torusMeshRef={meshRef4}
        />
      </>
    );
  };

  function Sphere() {
    const sphere = useRef(null);

    useFrame(() => {
      sphere.current.rotation.y += 0.5;
    });
    return (
      <mesh ref={sphere}>
        <sphereGeometry args={[0.2, 4, 2]} />
        <meshBasicMaterial color="red" wireframe={true} />
      </mesh>
    );
  }

  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  const meshRef = useRef();
  const cameraControlsRef = useRef();

  const { camera } = useThree();

  // All same options as the original "basic" example: https://yomotsu.github.io/camera-controls/examples/basic.html
  // const {
  //   minDistance,
  //   enabled,
  //   verticalDragToForward,
  //   dollyToCursor,
  //   infinityDolly,
  // } = useControls({
  //   thetaGrp: buttonGroup({
  //     label: "rotate theta",
  //     opts: {
  //       "+45º": () => cameraControlsRef.current?.rotate(45 * DEG2RAD, 0, true),
  //       "-90º": () => cameraControlsRef.current?.rotate(-90 * DEG2RAD, 0, true),
  //       "+360º": () =>
  //         cameraControlsRef.current?.rotate(360 * DEG2RAD, 0, true),
  //     },
  //   }),
  //   phiGrp: buttonGroup({
  //     label: "rotate phi",
  //     opts: {
  //       "+20º": () => cameraControlsRef.current?.rotate(0, 20 * DEG2RAD, true),
  //       "-40º": () => cameraControlsRef.current?.rotate(0, -40 * DEG2RAD, true),
  //     },
  //   }),
  //   truckGrp: buttonGroup({
  //     label: "truck",
  //     opts: {
  //       "(1,0)": () => cameraControlsRef.current?.truck(1, 0, true),
  //       "(0,1)": () => cameraControlsRef.current?.truck(0, 1, true),
  //       "(-1,-1)": () => cameraControlsRef.current?.truck(-1, -1, true),
  //     },
  //   }),
  //   dollyGrp: buttonGroup({
  //     label: "dolly",
  //     opts: {
  //       1: () => cameraControlsRef.current?.dolly(1, true),
  //       "-1": () => cameraControlsRef.current?.dolly(-1, true),
  //     },
  //   }),
  //   zoomGrp: buttonGroup({
  //     label: "zoom",
  //     opts: {
  //       "/2": () => cameraControlsRef.current?.zoom(camera.zoom / 2, true),
  //       "/-2": () => cameraControlsRef.current?.zoom(-camera.zoom / 2, true),
  //     },
  //   }),
  //   minDistance: { value: 0 },
  //   moveTo: folder(
  //     {
  //       vec1: { value: [3, 5, 2], label: "vec" },
  //       "moveTo(…vec)": button((get) =>
  //         cameraControlsRef.current?.moveTo(...get("moveTo.vec1"), true)
  //       ),
  //     },
  //     { collapsed: true }
  //   ),
  //   "fitToBox(mesh)": button(() =>
  //     cameraControlsRef.current?.fitToBox(meshRef.current, true)
  //   ),
  //   setPosition: folder(
  //     {
  //       vec2: { value: [-5, 2, 1], label: "vec" },
  //       "setPosition(…vec)": button((get) =>
  //         cameraControlsRef.current?.setPosition(
  //           ...get("setPosition.vec2"),
  //           true
  //         )
  //       ),
  //     },
  //     { collapsed: true }
  //   ),
  //   setTarget: folder(
  //     {
  //       vec3: { value: [3, 0, -3], label: "vec" },
  //       "setTarget(…vec)": button((get) =>
  //         cameraControlsRef.current?.setTarget(...get("setTarget.vec3"), true)
  //       ),
  //     },
  //     { collapsed: true }
  //   ),
  //   setLookAt: folder(
  //     {
  //       vec4: { value: [1, 2, 3], label: "position" },
  //       vec5: { value: [1, 1, 0], label: "target" },
  //       "setLookAt(…position, …target)": button((get) =>
  //         cameraControlsRef.current?.setLookAt(
  //           ...get("setLookAt.vec4"),
  //           ...get("setLookAt.vec5"),
  //           true
  //         )
  //       ),
  //     },
  //     { collapsed: true }
  //   ),
  //   lerpLookAt: folder(
  //     {
  //       vec6: { value: [-2, 0, 0], label: "posA" },
  //       vec7: { value: [1, 1, 0], label: "tgtA" },
  //       vec8: { value: [0, 2, 5], label: "posB" },
  //       vec9: { value: [-1, 0, 0], label: "tgtB" },
  //       t: { value: Math.random(), label: "t", min: 0, max: 1 },
  //       "f(…posA,…tgtA,…posB,…tgtB,t)": button((get) => {
  //         return cameraControlsRef.current?.lerpLookAt(
  //           ...get("lerpLookAt.vec6"),
  //           ...get("lerpLookAt.vec7"),
  //           ...get("lerpLookAt.vec8"),
  //           ...get("lerpLookAt.vec9"),
  //           get("lerpLookAt.t"),
  //           true
  //         );
  //       }),
  //     },
  //     { collapsed: true }
  //   ),
  //   saveState: button(() => cameraControlsRef.current?.saveState()),
  //   reset: button(() => cameraControlsRef.current?.reset(true)),
  //   enabled: { value: true, label: "controls on" },
  //   verticalDragToForward: {
  //     value: false,
  //     label: "vert. drag to move forward",
  //   },
  //   dollyToCursor: { value: false, label: "dolly to cursor" },
  //   infinityDolly: { value: false, label: "infinity dolly" },
  // });

  return (
    <group>
      <ambientLight intensity={intensity} />
      <directionalLight
        ref={directionalLight}
        position={[4, 15, 10]}
        angle={0.3}
      />
      <TorusGroup />
      {/* <CameraControls
        ref={cameraControlsRef}
        minDistance={minDistance}
        enabled={enabled}
        verticalDragToForward={verticalDragToForward}
        dollyToCursor={dollyToCursor}
        infinityDolly={infinityDolly}
      /> */}
      <Sphere />
    </group>
  );
};
