import { useRef } from "react";
import { RigidBody, CapsuleCollider } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls, PerspectiveCamera } from "@react-three/drei";
import { Controls } from "./AniMoto";
import { AkiraMotorcycle } from "./components/AkiraMotorcycle";

const MOVEMENT_SPEED = 0.1;
const MAX_VEL = 3;

export const CharacterController = () => {
  const acceleratePressed = useKeyboardControls((state) => state[Controls.accelerate]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);

  const camera = useRef();
  const rigidbody = useRef();

  useFrame(() => {
    const impulse = { x: 0, y: 0, z: 0 };
    const linvel = rigidbody.current.linvel();
    let changeRotation = false;

    if (acceleratePressed && linvel.z > -MAX_VEL) {
      impulse.z -= MOVEMENT_SPEED;
      changeRotation = true;
    }

    if (rightPressed && linvel.x < MAX_VEL) {
      impulse.x += MOVEMENT_SPEED;
      changeRotation = true;
    }

    if (leftPressed && linvel.x > -MAX_VEL) {
      impulse.x -= MOVEMENT_SPEED;
      changeRotation = true;
    }

    if (backPressed && linvel.z < MAX_VEL) {
      impulse.z += MOVEMENT_SPEED;
      changeRotation = true;
    }

    rigidbody.current.applyImpulse(impulse, true);
    if (changeRotation) {
      const angle = Math.atan2(linvel.x, linvel.z);
      character.current.rotation.y = angle;
    }
  });

  const character = useRef();

  return (
    <>
      <group>
        <PerspectiveCamera ref={camera} position={[0, 10, 25]} rotation={[0, 0, 0]} fov={30} makeDefault />
        <RigidBody ref={rigidbody} colliders={false} scale={[0.5, 0.5, 0.5]} enabledRotations={[false, false, false]}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} angle={0.3} intensity={0.8} castShadow color={"#9e69da"} />
          <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
          <group ref={character} rotation-y={Math.PI}>
            <AkiraMotorcycle />
          </group>
        </RigidBody>
      </group>
    </>
  );
};
