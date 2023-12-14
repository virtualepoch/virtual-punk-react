export const TorusMesh = ({ args, map, torusMeshRef }) => {
  return (
    <mesh ref={torusMeshRef} position={[0, 0, 0]}>
      <torusGeometry args={args} />
      <meshStandardMaterial map={map} transparent/>
    </mesh>
  );
};
