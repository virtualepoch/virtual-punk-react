import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Shape, useTexture } from "@react-three/drei";

export const HubLink = ({
  size,
  posX,
  image,
  renderPriority = 1,
  matrix = new THREE.Matrix4(),
}) => {
  const map = useTexture(image);

  const hubLinkMesh = useRef();
  const { camera } = useThree();

  useFrame(() => {
    matrix.copy(camera.matrix).invert();
    hubLinkMesh.current.quaternion.setFromRotationMatrix(matrix);
  });

  return (
    <mesh ref={hubLinkMesh} scale={[size, size, size]} position-x={posX}>
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
