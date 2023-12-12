import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import texture2048 from "../../assets/images/torus/future-machine-2048.jpg";
import texture1024 from "../../assets/images/torus/future-machine-1024.jpg";
import texture512 from "../../assets/images/torus/future-machine-512.jpg";

export const RabbitHole = ({ position, rabbitHoleTexture }) => {
  const map = useLoader(
    THREE.TextureLoader,
    rabbitHoleTexture === 512
      ? texture512
      : rabbitHoleTexture === 2048
      ? texture2048
      : texture1024
  );
  map.repeat.set(4, 16);
  map.wrapS = map.wrapT = THREE.RepeatWrapping;

  return (
    <mesh position={position} rotation={[Math.PI / -2, 0, 0]}>
      <cylinderGeometry args={[5, 5, 100, 3, 1, true]} />
      <meshBasicMaterial
        map={map}
        side={THREE.BackSide}
        // color={"aqua"}
        // wireframe={true}
        // transparent
        // opacity={0.7}
      />
    </mesh>
  );
};
