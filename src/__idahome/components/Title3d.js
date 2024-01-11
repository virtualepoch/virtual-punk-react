import * as THREE from "three";
import { Center, Text3D, useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export const Title3d = () => {
  // const { width, height } = useThree((state) => state.viewport);
  // const margin = 0.5;

  const pointLight = useRef();
  // useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  useFrame((state, delta) => {
    pointLight.current.position.x = Math.sin(state.clock.elapsedTime) * 7;
  });

  return (
    <group scale={0.1} position-z={-4}>
      <pointLight ref={pointLight} position={[0, 0.1, 2]} />
      <Center rotation={[0, 0, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
          font="/fonts/Comfortaa_Regular.json"
        >
          IdahomeServ LLC
          <meshStandardMaterial color={0x44eeff} />
        </Text3D>
      </Center>
    </group>
  );
};
