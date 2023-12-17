import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Hud, OrthographicCamera, Torus, useHelper } from "@react-three/drei";

export const TorusScene = () => {
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");

  function Sphere() {
    const sphere = useRef(null);

    useFrame(() => {
      sphere.current.rotation.y += 0.5;
    });
    return (
      <mesh ref={sphere}>
        <sphereGeometry args={[0.2, 4, 2]} />
        <meshBasicMaterial color="red" wireframe={true} />
      </mesh>
    );
  }

  const TorusGroup = ({
    renderPriority = 1,
    matrix = new THREE.Matrix4(),
    position = [0, 0, -5],
    rotation = [Math.PI / 1.5, 0, 0],
  }) => {
    const meshRef = useRef();
    const renderMesh = useRef();
    const { camera } = useThree();
    useFrame(() => {
      meshRef.current.rotation.z += 0.01;
    });

    useFrame(() => {
      // Spin mesh to the inverse of the default cameras matrix
      matrix.copy(camera.matrix).invert();
      renderMesh.current.quaternion.setFromRotationMatrix(matrix);
    });
    return (
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <Hud renderPriority={renderPriority} position={[0, 0, 0]}>
          <OrthographicCamera makeDefault position={[0, 0, 1]} />
          <mesh ref={renderMesh}>
            <meshLambertMaterial color={"orange"} />
            <torusGeometry args={[1, 0.1, 3, 28]} />
          </mesh>
          <ambientLight intensity={1} />
          <pointLight position={[200, 200, 100]} intensity={0.5} />
        </Hud>

        <Torus
          args={[0.5, 0.1, 3, 28]}
          material-color={"cyan"}
          position={[0, 1, 0]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          castShadow
          receiveShadow
        />
        <Torus
          args={[0.5, 0.1, 3, 28]}
          material-color={"cyan"}
          position={[-0.75, -0.75, 0]}
          rotation={[Math.PI / 2, Math.PI / 4, 0]}
          castShadow
          receiveShadow
        />
        <Torus
          args={[0.5, 0.1, 3, 28]}
          material-color={"cyan"}
          position={[0.75, -0.75, 0]}
          rotation={[Math.PI / 2, -Math.PI / 4, 0]}
          castShadow
          receiveShadow
        />
      </mesh>
    );
  };

  return (
    <group>
      <ambientLight intensity={1} />
      <directionalLight ref={directionalLight} position={[4, 15, 10]} />
      <TorusGroup />
    </group>
  );
};
