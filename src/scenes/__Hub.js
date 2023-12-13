import { TorusGroup } from "../components/three/TorusGroup";
import { Ocean } from "../components/three/Ocean";

export const Hub = (hubScene = true) => {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <TorusGroup
          position={[0, 0, -10]}
          rotation={[0, 0, 0]}
          hubScene={hubScene}
        />
      </mesh>

      <Ocean
        position={[0, -140, 0]}
        rotation={[0, 0, 0]}
        waterColor={0x00ffff}
        sunColor={0xffffff}
      />
    </>
  );
};
