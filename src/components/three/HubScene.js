import { Decal, RoundedBox, useTexture } from "@react-three/drei";
import { MeshPhongMaterial } from "three";
import * as THREE from "three";

export const HubScene = ({
  panelColor,
  panelMeshScale,
  panelYPos,
  panelDistance,
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
    // toneMapped: false,
    // map: texture,
    
  });
  texture.repeat.set(2, 2);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <mesh
      castShadow
      receiveShadow
      position={[0, panelYPos, panelDistance]}
      rotation={panelRotation}
      scale={panelMeshScale}
    >
      <RoundedBox
        args={panelSize} // Width, height, depth. Default is [1, 1, 1]
        radius={panelRadius} // Radius of the rounded corners. Default is 0.05
        smoothness={panelSmoothness} // The number of curve segments. Default is 4
        bevelSegments={panelBevelSegments} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
        creaseAngle={panelCreaseAngle} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        material={panelMaterial}
        //   {...meshProps} // All THREE.Mesh props are valid
        castShadow
        receiveShadow
        rotation={[0,0,0]}
      />
    </mesh>
  );
};
