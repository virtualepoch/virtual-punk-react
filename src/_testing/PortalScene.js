import * as THREE from "three";
import { useState, useRef, useEffect } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  CameraControls,
  MeshPortalMaterial,
  RoundedBox,
  Text,
} from "@react-three/drei";
import { easing } from "maath";

import bg from "../assets/images/panoramas/realistic_wireframe_matrix.jpg";
import raptorBg from "../assets/images/panoramas/realistic_clowdy_jungle_floor.jpg";
import trexBg from "../assets/images/panoramas/realistic_dark_desert.jpg";
import megBg from "../assets/images/panoramas/scenic_underwater.jpg";

import { Trex } from "../components/models/Trex";
import { Megalodon } from "../components/models/Megalodon";

export function PortalScene() {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        0,
        0,
        5,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else {
      controlsRef.current.setLookAt(0, 0, 10, 0, 0, 0, true);
    }
  }, [active, scene]);

  return (
    <>
      <ambientLight intensity={1} />
      <Background />
      <CameraControls
        ref={controlsRef}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />

      <CreatureCard
        width={4}
        height={6}
        texture={trexBg}
        position={[-2, 0, -3]}
        rotation-y={Math.PI / 8}
        textY={-2.7}
        name={"Tyranosaurus Rex"}
        fontSize={0.3}
        active={active}
        setActive={setActive}
      >
        <Trex position={[0, -3, -2]} scale={3} />
      </CreatureCard>

      <CreatureCard
        width={4}
        height={6}
        texture={megBg}
        position={[2, 0, -3]}
        rotation-y={Math.PI / -8}
        textY={-2.7}
        name={"Megalodon"}
        fontSize={0.3}
        active={active}
        setActive={setActive}
      >
        <Megalodon position={[0, -0.8, 0]} scale={1.5} />
      </CreatureCard>
    </>
  );
}

const Background = () => {
  const map = useLoader(THREE.TextureLoader, bg);
  return (
    <mesh position={[0, 0, 0]} rotation={[0, 1.6, 0]}>
      <sphereGeometry args={[14, 50, 10]} />
      <meshStandardMaterial map={map} side={THREE.BackSide} />
    </mesh>
  );
};

const CreatureCard = ({
  width,
  height,
  children,
  texture,
  textY,
  fontSize,
  name,
  active,
  setActive,
  hovered,
  setHovered,
  ...props
}) => {
  const map = useLoader(THREE.TextureLoader, texture);
  const portalRef = useRef();

  useFrame((_state, delta) => {
    const worldOpen = active === name;
    easing.damp(portalRef.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
  });

  return (
    <group {...props}>
      <Text
        font="fonts/Ailerons-TrialVersion.otf"
        fontSize={fontSize}
        position={[0, textY, 0.051]}
        anchorY="bottom"
        color={"red"}
      >
        {name}
      </Text>
      <RoundedBox
        args={[width, height, 0.1]}
        onClick={() => setActive(active === name ? null : name)}
        name={name}
        onPointerEnter={() => setHovered(name)}
        onPointerLeave={() => setHovered(null)}
      >
        <MeshPortalMaterial ref={portalRef}>
          <ambientLight intensity={1} />
          <pointLight />
          <directionalLight position={[10, 15, 10]} angle={0.3} />
          {children}
          <mesh position={[0, 0, 0]} rotation={[0, 2, 0]}>
            <sphereGeometry args={[4, 10, 10]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};
