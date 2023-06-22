// import { CylinderCollider } from "@react-three/fiber";
import { OrbitControls, Cylinder, MeshReflectorMaterial } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { CharacterController } from "./CharacterController";

export const Game = () => {
  function Floor() {
    return (
      <>
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[55, 55]} />
          {/* <MeshReflectorMaterial blur={[400, 400]} resolution={1024} mixBlur={0.9} mixStrength={15} depthScale={1} minDepthThreshold={0.85} color="#dbecfb" metalness={0.6} /> */}
        </mesh>
      </>
    );
  }

  return (
    <>
      <OrbitControls />
      {/* LIGHTS */}

      <group position-y={-1}>
        {/* STAGE */}
        <RigidBody colliders={false} type="fixed" position-y={-1} friction={1}>
          <CuboidCollider args={[55, 0.1, 55]} position={-1.6} />
          <Floor />
          {/* <group position={[-14, -1.3, 8]} rotation-y={Math.PI}>
            <CityBlock />
          </group> */}
          {/* <Cylinder scale={[5, 1, 5]} receiveShadow>
            <meshStandardMaterial color="white" />
          </Cylinder> */}
        </RigidBody>

        {/* CHARACTER */}

        <CharacterController />
      </group>
    </>
  );
};
