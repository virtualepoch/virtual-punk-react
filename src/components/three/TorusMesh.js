import { Torus } from "@react-three/drei";

export const TorusMesh = ({
  args,
  torusMeshRef,
  position = [0, 0, 0],
  map,
}) => {
  return (
    <Torus args={args} ref={torusMeshRef} position={position}>
      <meshStandardMaterial map={map} />
    </Torus>
  );
};
