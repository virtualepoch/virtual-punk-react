import { useRef } from "react";
import { MeshPhongMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";

export const SpinningPanels = ({
  panelDistance = 3,
  panelYPos = 3,
  panelMeshScale = 0.4,
  panelSize = [4, 10, 0.5],
  panelRadius = 0.3,
  panelSmoothness = 2,
  panelBevelSegments = 1,
  panelCreaseAngle = 0.4,
  panelsPosition,
  panelsRotationX,
  panelsRotationYSpeed,
  panelsColor,
}) => {
  const panelMaterial = new MeshPhongMaterial({
    color: panelsColor,
    toneMapped: false,
  });

  panelMaterial.color.multiplyScalar(3);

  const panels = useRef();

  useFrame(() => {
    if (panels.current) panels.current.rotation.y += panelsRotationYSpeed;
  });

  return (
    <group
      ref={panels}
      rotation={[panelsRotationX, 0, 0]}
      position={panelsPosition}
    >
      <RoundedBox
        position={[0, panelYPos, -panelDistance]}
        rotation={[0, 0, 0]}
        scale={panelMeshScale}
        args={panelSize} // Width, height, depth. Default is [1, 1, 1]
        radius={panelRadius} // Radius of the rounded corners. Default is 0.05
        smoothness={panelSmoothness} // The number of curve segments. Default is 4
        bevelSegments={panelBevelSegments} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
        creaseAngle={panelCreaseAngle} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        //   {...meshProps} // All THREE.Mesh props are valid
        material={panelMaterial}
      />

      <RoundedBox
        position={[
          -panelDistance / 2 - panelDistance / 3,
          panelYPos,
          panelDistance / 2,
        ]}
        rotation={[0, -Math.PI / 3, 0]}
        scale={panelMeshScale}
        args={panelSize}
        radius={panelRadius}
        smoothness={panelSmoothness}
        bevelSegments={panelBevelSegments}
        creaseAngle={panelCreaseAngle}
        //   {...meshProps} // All THREE.Mesh props are valid
        material={panelMaterial}
      />

      <RoundedBox
        position={[
          panelDistance / 2 + panelDistance / 3,
          panelYPos,
          panelDistance / 2,
        ]}
        rotation={[0, Math.PI / 3, 0]}
        scale={panelMeshScale}
        args={panelSize}
        radius={panelRadius}
        smoothness={panelSmoothness}
        bevelSegments={panelBevelSegments}
        creaseAngle={panelCreaseAngle}
        //   {...meshProps} // All THREE.Mesh props are valid
        material={panelMaterial}
      />
    </group>
  );
};
