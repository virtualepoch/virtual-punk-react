import { Shape, useTexture } from "@react-three/drei";

export const HubLink = ({ size, posX, image }) => {
  const map = useTexture(image);

  return (
    <mesh scale={[size, size, size]} position-x={posX}>
      <Shape>
        <meshBasicMaterial map={map} />
      </Shape>
      <Shape
        scale={[1.1, 1.1, 1]}
        position={[0, 0, -0.01]}
        material-color="red"
      />
    </mesh>
  );
};
