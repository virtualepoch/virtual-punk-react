import { Box, Decal, useTexture } from "@react-three/drei";

export const HubLinkPanel = ({ boxSize, position, imageUrl }) => {
  const map = useTexture(imageUrl);

  return (
    <Box
      args={boxSize}
      // toneMapped={false}
      //   {...meshProps} // All THREE.Mesh props are valid
      position={position}
      castShadow
      receiveShadow
      color="cyan"
    >
      <Decal
        // debug
        position={[0, 0, boxSize[2] / 2]}
        rotation={[0, 0, 0]}
        scale={[boxSize[0] * 0.9, boxSize[1] * 0.9, boxSize[2]]}
      >
        <meshBasicMaterial map={map} polygonOffset polygonOffsetFactor={-1} />
      </Decal>
    </Box>
  );
};
