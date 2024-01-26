import { Center, Text3D } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export const Text3dTest = ({ margin = 0.5 }) => {
  const { width, height } = useThree((state) => state.viewport);

  const text = useRef();
  useFrame(() => {
    text.current.rotation.y += 0.004;
  });

  return (
    <>
      <Center
        bottom
        right
        position={[-width / 2 + margin, height / 2 - margin, 0]}
      >
        <Text3D letterSpacing={-0.06} size={0.5} font="/fonts/Inter_Bold.json">
          top left
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
      <Center top left position={[width / 2 - margin, -height / 2 + margin, 0]}>
        <Text3D letterSpacing={-0.06} size={0.5} font="/fonts/Inter_Bold.json">
          bottom right
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
      <group ref={text}>
        <Center rotation={[0, 0, 0]}>
          <Text3D
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.5}
            lineHeight={0.5}
            letterSpacing={-0.06}
            size={1}
            font="/fonts/Inter_Bold.json"
          >
            {`hello\nworld`}
            <meshNormalMaterial />
          </Text3D>
        </Center>
      </group>
    </>
  );
};
