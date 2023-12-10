import { Text } from "@react-three/drei";
import { Interactive } from "@react-three/xr";
import { useState } from "react";

export const MyVRButton = ({ children }) => {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x123456);

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0);
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
        scale={hover ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        size={[0.4, 0.1, 0.1]}
      >
        <Text
          position={[0, 0, 0.06]}
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
