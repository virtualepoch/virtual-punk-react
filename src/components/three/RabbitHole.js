import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import textureLg from "../../assets/images/rabbit-hole/future-machine-4096.jpg";
import textureMed from "../../assets/images/rabbit-hole/future-machine-2048.jpg";
import textureSm from "../../assets/images/rabbit-hole/future-machine-1024.jpg";

export const RabbitHole = ({ position, rabbitHoleTexture }) => {
  const map = useLoader(
    THREE.TextureLoader,
    rabbitHoleTexture === "sm"
      ? textureSm
      : rabbitHoleTexture === "med"
      ? textureMed
      : textureMed
  );
  map.repeat.set(3, 8);
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
