import { Box, Decal, RoundedBox, useTexture } from "@react-three/drei";
import { MeshPhongMaterial } from "three";
import * as THREE from "three";

export const HubScene = ({
  hub,
  panelColor,
  panelMeshScale,
  position,
  panelRotation,
  panelSize,
  panelRadius,
  panelSmoothness,
  panelBevelSegments,
  panelCreaseAngle,
}) => {
  const texture = useTexture("/images/spaceScene.jpg");
  const panelMaterial = new MeshPhongMaterial({
    color: panelColor,
    toneMapped: false,
    // map: texture,
  });

  panelMaterial.color.multiplyScalar(2);

  return (
    <Box
      args={panelSize} // Width, height, depth. Default is [1, 1, 1]
      // radius={panelRadius} // Radius of the rounded corners. Default is 0.05
      // smoothness={panelSmoothness} // The number of curve segments. Default is 4
      // bevelSegments={panelBevelSegments} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
      // creaseAngle={panelCreaseAngle} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
      material={panelMaterial}
      material-color={panelColor}
      // toneMapped={false}
      //   {...meshProps} // All THREE.Mesh props are valid
      castShadow
      receiveShadow
      position={position}
      rotation={panelRotation}
      scale={panelMeshScale}
    >
      {hub && (
        <Decal
          // debug
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={[panelSize[0] - 1, panelSize[1] - 0.5, panelSize[2] * 2]}
        >
          <meshBasicMaterial
            map={texture}
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </Decal>
      )}
    </Box>
  );
};
