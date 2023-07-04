import * as THREE from "three";
import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { CameraControls, Stars, Float, MeshPortalMaterial, RoundedBox, useTexture, Text } from "@react-three/drei";
import scenicWater from "../../assets/images/scenic_underwater.jpg";
import realisticJungle from "../../assets/images/realistic_jungle.jpg";
import scenicJungle from "../../assets/images/scenic_jungle.jpg";
import dreamlike from "../../assets/images/dreamlike_cyber_punk.jpg";
import realistic from "../../assets/images/realistic_cyber_punk.jpg";
import sky from "../../assets/images/sky_cyber_punk.jpg";
import tech from "../../assets/images/tech_noir__cyberpunk_cyber_punk.jpg";

import { Raptor } from "./Raptor";
import { Trex } from "./Trex";
import { Megalodon } from "./Megalodon";
import { easing } from "maath";

export function PortalScene() {
  const [active, setActive] = useState(null);
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(0, 0, 5, targetPosition.x, targetPosition.y, targetPosition.z, true);
    } else {
      controlsRef.current.setLookAt(0, 0, 10, 0, 0, 0, true);
    }
  }, [active, scene]);

  return (
    <>
      <ambientLight intensity={1} />

      <CameraControls ref={controlsRef} />
      <CreatureCard width={2} height={3} texture={scenicJungle} position={[-2.7, 0, 0.5]} rotation-y={Math.PI / 8} textY={-1.4} name={"Velociraptor"} fontSize={0.3} active={active} setActive={setActive}>
        <Raptor position={[0, -1, 0]} />
      </CreatureCard>
      <CreatureCard width={4} height={6} texture={realisticJungle} textY={-2.7} name={"Tyranosaurus Rex"} fontSize={0.5} active={active} setActive={setActive}>
        <Trex position-y={-3} scale={3} />
      </CreatureCard>
      <CreatureCard width={2} height={3} texture={scenicWater} position={[2.7, 0, 0.5]} rotation-y={Math.PI / -8} textY={-1.4} name={"Megalodon"} fontSize={0.3} active={active} setActive={setActive}>
        <Megalodon position={[0, -0.8, 0]} scale={1.5} />
      </CreatureCard>
      <Stars />
    </>
  );
}

const CreatureCard = ({ width, height, children, texture, textY, fontSize, name, active, setActive, ...props }) => {
  const map = useLoader(THREE.TextureLoader, texture);
  const portalRef = useRef();

  useFrame((_state, delta) => {
    const worldOpen = active === name;
    easing.damp(portalRef.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
  });

  return (
    <group {...props}>
      <Text font="fonts/Ailerons-TrialVersion.otf" fontSize={fontSize} position={[0, textY, 0.051]} anchorY="bottom" color={"red"}>
        {name}
      </Text>
      <RoundedBox args={[width, height, 0.1]} onClick={() => setActive(active === name ? null : name)} name={name}>
        <MeshPortalMaterial ref={portalRef}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 15, 10]} angle={0.3} />
          {children}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[5, 10, 10]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};
