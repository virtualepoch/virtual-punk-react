import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import a1 from "../assets/images/torus/Abstract_512x512-75.png";

import { button, buttonGroup, folder, useControls } from "leva";
import { CameraControls, OrbitControls, useHelper } from "@react-three/drei";
import { TorusMesh } from "../components/three/TorusMesh";
import { DEG2RAD } from "three/src/math/MathUtils";

export const TorusScene = ({
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

    const meshTexture = useLoader(THREE.TextureLoader, a1);

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

  return (
    <group>
      <ambientLight intensity={intensity} />
      <directionalLight
        ref={directionalLight}
        position={[4, 15, 10]}
        angle={0.3}
      />
      <TorusGroup />

      <Sphere />
    </group>
  );
};
