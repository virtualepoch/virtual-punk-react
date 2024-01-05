import { Sphere } from "@react-three/drei";

export const Globe = ({
  args = [3, 16, 16],
  position = [0, -10, -64],
  rotation,
  texture,
}) => {
  return (
    <Sphere args={args} position={position} rotation={rotation}>
      <meshPhongMaterial map={texture} />
    </Sphere>
  );
};
