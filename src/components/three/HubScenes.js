import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MeshPhongMaterial } from "three";

export const HubScenes = ({
  panelDistance,
  panelYPos = 3,
  panelMeshScale = 0.4,
  panelSize,
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

  panelMaterial.color.multiplyScalar(2);

  const panels = useRef();

  useFrame(() => {
    if (panels.current) panels.current.rotation.y += panelsRotationYSpeed;
  });

  return (
    <mesh
      ref={panels}
      rotation={[panelsRotationX, 0, 0]}
      position={panelsPosition}
    >
      <mesh
        position={[0, panelYPos, -panelDistance]}
        rotation={[0, 0, 0]}
        scale={panelMeshScale}
      >
        <RoundedBox
          args={panelSize} // Width, height, depth. Default is [1, 1, 1]
          radius={panelRadius} // Radius of the rounded corners. Default is 0.05
          smoothness={panelSmoothness} // The number of curve segments. Default is 4
          bevelSegments={panelBevelSegments} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
          creaseAngle={panelCreaseAngle} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
          //   {...meshProps} // All THREE.Mesh props are valid
          material={panelMaterial}
        ></RoundedBox>
      </mesh>
      <mesh
        position={[0, panelYPos, panelDistance]}
        rotation={[0, 0, 0]}
        scale={panelMeshScale}
      >
        <RoundedBox
          args={panelSize} // Width, height, depth. Default is [1, 1, 1]
          radius={panelRadius} // Radius of the rounded corners. Default is 0.05
          smoothness={panelSmoothness} // The number of curve segments. Default is 4
          bevelSegments={panelBevelSegments} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
          creaseAngle={panelCreaseAngle} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
          //   {...meshProps} // All THREE.Mesh props are valid
          material={panelMaterial}
        ></RoundedBox>
      </mesh>
      <mesh
        position={[-panelDistance, panelYPos, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={panelMeshScale}
      >
        <RoundedBox
          args={panelSize} // Width, height, depth. Default is [1, 1, 1]
          radius={panelRadius} // Radius of the rounded corners. Default is 0.05
          smoothness={panelSmoothness} // The number of curve segments. Default is 4
          bevelSegments={panelBevelSegments} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
          creaseAngle={panelCreaseAngle} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
          //   {...meshProps} // All THREE.Mesh props are valid
          material={panelMaterial}
        ></RoundedBox>
      </mesh>
      <mesh
        position={[panelDistance, panelYPos, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={panelMeshScale}
      >
        <RoundedBox
          args={panelSize} // Width, height, depth. Default is [1, 1, 1]
          radius={panelRadius} // Radius of the rounded corners. Default is 0.05
          smoothness={panelSmoothness} // The number of curve segments. Default is 4
          bevelSegments={panelBevelSegments} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
          creaseAngle={panelCreaseAngle} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
          //   {...meshProps} // All THREE.Mesh props are valid
          material={panelMaterial}
        ></RoundedBox>
      </mesh>
    </mesh>
  );
};
