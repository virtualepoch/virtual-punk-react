import { Center, Text3D } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export const Title3d = () => {
  // const { width, height } = useThree((state) => state.viewport);
  // const margin = 0.5;

  const text = useRef();
  // useFrame(() => {
  // text.current.rotation.z += 0.02;
  // text.current.rotation.y += 0.02;
  // });

  return (
    <group ref={text} scale={0.2} position={[1, -0.7, -4]}>
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
          font="/fonts/Inter_Bold.json"
        >
          IdahomeServ
          <meshStandardMaterial color={0x44eeff} />
        </Text3D>
      </Center>
    </group>
  );
};
