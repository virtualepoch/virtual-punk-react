import { forwardRef, useEffect, useImperativeHandle, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls, KeyboardControls, Stars, PerspectiveCamera } from "@react-three/drei";

const Controls = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
};

const MOVEMENT_SPEED = 1;
const MAX_VEL = 3;

export const StarshipLightsCamera = forwardRef((props, ref) => {
  // const map = useMemo(
  //   () => [
  //     { name: Controls.up, keys: ["ArrowUp", "KeyW"] },
  //     { name: Controls.down, keys: ["ArrowDown", "KeyS"] },
  //     { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
  //     { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
  //   ],
  //   []
  // );
  const cameraGroup = useRef();

  useFrame(() => {
    cameraGroup.current.position.z -= 0.4;
  });

  function Starship() {
    return (
      <>
        {/* NOSE */}
        <mesh position={[0, 0, -2]} rotation={[-Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.5, 4, 3]} />
          <meshStandardMaterial color={"aqua"} wireframe={false} />
        </mesh>

        {/* TAIL */}
        <mesh position={[0, 0.5, 1]} rotation={[Math.PI / 3, Math.PI / 3, 0]}>
          <coneGeometry args={[0.5, 2, 3]} />
          <meshStandardMaterial color={"blue"} wireframe={false} />
        </mesh>
        <mesh position={[0, 0, 1.2]} rotation={[Math.PI / 2, Math.PI / 3, 0]}>
          <coneGeometry args={[0.5, 2, 3]} />
          <meshStandardMaterial color={"purple"} wireframe={false} />
        </mesh>

        {/* WINGS */}
        <mesh position={[-2, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
          <coneGeometry args={[0.5, 4, 3]} />
          <meshStandardMaterial color={"red"} wireframe={false} />
        </mesh>
        <mesh position={[2, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
          <coneGeometry args={[0.5, 4, 3]} />
          <meshStandardMaterial color={"red"} wireframe={false} />
        </mesh>

        {/* THRUSTERS */}
        <mesh position={[-0.6, 0, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.3, 1]} />
          <meshStandardMaterial color={"green"} wireframe={false} />
        </mesh>
        <mesh position={[0.6, 0, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.3, 1]} />
          <meshStandardMaterial color={"green"} wireframe={false} />
        </mesh>
      </>
    );
  }

  // const upPressed = useKeyboardControls((state) => state[Controls.up]);
  // const downPressed = useKeyboardControls((state) => state[Controls.down]);
  // const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  // const rightPressed = useKeyboardControls((state) => state[Controls.right]);

  const starship = useRef();

  // KEYBOARD CONTROLS

  // useFrame(() => {
  //   const impulse = { x: 0, y: 0, z: 0 };
  //   const linvel = starship.current.linvel();

  //   if (leftPressed && linvel.x > -MAX_VEL) {
  //     impulse.x -= MOVEMENT_SPEED;
  //   }
  // });

  // MOBILE CONTROLS
  useImperativeHandle(ref, () => ({
    moveLeft() {
      starship.current.position.x -= 1;
      if (starship.current.rotation.z < 0.3) {
        starship.current.rotation.z += 0.1;
      } else {
        starship.current.rotation.z = 0;
      }
    },

    moveRight() {
      starship.current.position.x += 1;
      if (starship.current.rotation.z > -0.3) {
        starship.current.rotation.z -= 0.1;
      } else {
        starship.current.rotation.z = 0;
      }
    },
  }));

  return (
    <>
      {/* <KeyboardControls map={map}> */}
      <group ref={cameraGroup}>
        {/* <OrbitControls target={[0, 10, 10]} /> */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 10]} angle={0.3} />
        <Stars />

        <PerspectiveCamera position={[0, 10, 25]} rotation={[-0.1, 0, 0]} fov={50} makeDefault />

        <group ref={starship} rotation={[0, 0, 0]}>
          <Starship />
        </group>
      </group>
      {/* </KeyboardControls> */}
    </>
  );
});
