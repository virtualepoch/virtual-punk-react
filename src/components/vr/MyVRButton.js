import { Text } from "@react-three/drei";
import { Interactive } from "@react-three/xr";
import { useState } from "react";

export const MyVRButton = ({ setStart, children }) => {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x123456);

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0);
    setStart(true);
  };

  const Box = ({ color, size, scale, children, ...rest }) => {
    return (
      <mesh scale={scale} {...rest}>
        <boxGeometry args={size} />
        <meshPhongMaterial color={color} />
      </mesh>
    );
  };

  return (
    <Interactive
      onSelect={onSelect}
      onHover={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <Box
        color={color}
        scale={hover ? [1.2, 1.2, 1.2] : [1, 1, 1]}
        size={[0.2, 0.1, 0.01]}
        position={[-0.5, 0.5, -1.5]}
        rotation={[0, 0.8, 0]}
      >
        <Text
        font="fonts/Ailerons-TrialVersion.otf"
          position={[0, 0, 0.051]}
          fontSize={0.05}
          color="#fff"
          anchorX="center"
          anchorY="middle"
        >
          {children}
        </Text>
      </Box>
    </Interactive>
  );
};
