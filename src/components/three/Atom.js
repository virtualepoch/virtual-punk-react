import { useRef } from "react";
import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils";
import { useFrame } from "@react-three/fiber";
import { Sphere, Torus } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export const Atom = ({
  atomRef,
  scale = 1,
  orbitScale = 0.1,
  position,
  rotSpeed = 0.07,
  performance,
  lightIntensity = performance === 0 ? 0.03 : performance === 2 ? 0.07 : 0.05,
  colorScale = performance === 2 ? 1.2 : 1.4,
}) => {
  const materialTrans = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    toneMapped: false,
    transparent: true,
    opacity: 0,
  });

  const material = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    toneMapped: false,
  });

  material.color.multiplyScalar(colorScale);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  useFrame(() => {
    ref1.current.rotation.x += rotSpeed;
    ref2.current.rotation.z += rotSpeed;
    ref3.current.rotation.z += rotSpeed;
  });
  return (
    <Sphere
      ref={atomRef}
      args={[0.5, 16, 16]}
      material={materialTrans}
      position={position}
      scale={scale}
    >
      <Torus ref={ref1} args={[1, 0.1, 1, 10]} rotation-y={degToRad(90)}>
        <EffectComposer enabled={performance === 0 ? false : true}>
          <Sphere
            args={[orbitScale, 32, 32]}
            position-y={1}
            material={material}
            castShadow
            receiveShadow
          >
            <pointLight intensity={lightIntensity} />
          </Sphere>
          <Bloom />
        </EffectComposer>
      </Torus>

      <Torus
        ref={ref2}
        args={[1, 0.1, 1, 10]}
        rotation-x={degToRad(90)}
        rotation-y={degToRad(45)}
        rotation-z={degToRad(45)}
      >
        <Sphere
          args={[orbitScale, 32, 32]}
          position-y={1}
          material={material}
          castShadow
          receiveShadow
        >
          <pointLight intensity={lightIntensity} />
        </Sphere>
      </Torus>
      <Torus
        ref={ref3}
        args={[1, 0.1, 1, 10]}
        rotation-x={degToRad(90)}
        rotation-y={degToRad(-45)}
        rotation-z={degToRad(-225)}
      >
        <Sphere
          args={[orbitScale, 32, 32]}
          position-y={1}
          material={material}
          castShadow
          receiveShadow
        >
          <pointLight intensity={lightIntensity} />
        </Sphere>
      </Torus>
    </Sphere>
  );
};
