import * as THREE from "three";
import marbleLarge from "../assets/images/marble_large.jpg";
import marbleSmall from "../assets/images/marble_small.jpg";
import { useLoader } from "@react-three/fiber";

export const PictureFrame = () => {
  const shape = new THREE.Shape();

  let sizeX = 6;
  let sizeY = 6;
  let radius = 0.5;

  let halfX = sizeX * 0.5 - radius;
  let halfY = sizeY * 0.5 - radius;
  let baseAngle = Math.PI * 0.5;
  shape.absarc(halfX, halfY, radius, baseAngle * 0, baseAngle * 0 + baseAngle);
  shape.absarc(-halfX, halfY, radius, baseAngle * 1, baseAngle * 1 + baseAngle);
  shape.absarc(
    -halfX,
    -halfY,
    radius,
    baseAngle * 2,
    baseAngle * 2 + baseAngle
  );
  shape.absarc(halfX, -halfY, radius, baseAngle * 3, baseAngle * 3 + baseAngle);

  function textureChanger() {
    if (window.innerWidth < 700) {
      return marbleSmall;
    } else {
      return marbleLarge;
    }
  }

  const texture = useLoader(THREE.TextureLoader, textureChanger());

  return (
    <mesh position={[-8, 2, 1]} rotation={[0, 0.3, 0]}>
      <extrudeGeometry args={[shape, { bevelEnabled: false, depth: 1 }]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};
