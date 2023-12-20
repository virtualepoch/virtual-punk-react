import { Box, Text } from "@react-three/drei";
import { Interactive } from "@react-three/xr";
import { useState } from "react";

export const MyVRButton = ({ setStart, children }) => {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x003456);

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0);
    setStart(true);
  };

  return (
    <Interactive
      onSelect={onSelect}
      onHover={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <group
        position={[-1, 1.5, -4.5]}
        rotation-y={0.4}
        scale={hover ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      >
        <Box args={[1, 0.5, 0.01]}>
          <meshBasicMaterial color={color} />
          <Text
            font="fonts/Ailerons-TrialVersion.otf"
            position={[0, 0, 0.051]}
            fontSize={0.3}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {children}
          </Text>
        </Box>
      </group>
    </Interactive>
  );
};
