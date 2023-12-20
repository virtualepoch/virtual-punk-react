import {
  useRef,
  //  useState
} from "react";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import { useFrame } from "@react-three/fiber";
import {
  GradientTexture,
  PerspectiveCamera,
  Plane,
  Sphere,
  Stars,
  Torus,
  useHelper,
} from "@react-three/drei";
// COMPONENTS
import { Atom } from "../components/three/Atom";
import { Ocean } from "../components/three/Ocean";

export const TestingBlank = () => {
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 1, "red");
  const pointLight = useRef();
  useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  // const ref1 = useRef();
  // const ref2 = useRef();
  // const [clicked, setClicked] = useState(false);
  // const [number, setNumber] = useState(0);

  //////////////////////////////////
  // NOTE::::::: The MeshStandardMaterial is what is now the norm and used in game development with Unity and Unreal.
  // const material = new THREE.MeshStandardMaterial({
  //   color: "cyan",
  //   toneMapped: false,
  // });

  const material = new THREE.MeshStandardMaterial({
    color: "black",
    toneMapped: false,
  });
  // This material requires a displacementMap- need to research
  const material1 = new THREE.MeshDepthMaterial({
    color: "red",
    toneMapped: false,
    // displacementMap={}
  });

  const material2 = new THREE.MeshLambertMaterial({
    color: "green",
    toneMapped: false,
  });

  // Not very reflective but better for performance
  const material3 = new THREE.MeshMatcapMaterial({
    color: 0x00ffff,
    toneMapped: false,
  });

  const torus1 = useRef();
  const torus2 = useRef();
  const torus3 = useRef();
  const rotSpeed = 0.02;
  useFrame(() => {
    torus1.current.rotation.x += rotSpeed;
    torus2.current.rotation.z += rotSpeed;
    torus3.current.rotation.z += rotSpeed;
  });

  return (
    <>
      <Atom
        scale={3}
        torus1ref={torus1}
        torus2ref={torus2}
        torus3ref={torus3}
        atomMaterial={material}
        atom1Material={material1}
        atom2Material={material2}
        atom3Material={material3}
        position={[0, 1, -10]}
      />
      <group>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        {/* <directionalLight ref={directionalLight} position={[-2, 4, 2]} intensity={2} /> */}
        {/* <pointLight ref={pointLight} position={[0, -1, 0]} intensity={2} /> */}

        <Ocean position={[0, -5, 0]} />
        <Stars color={0xff0000} />
      </group>
    </>
  );
};
