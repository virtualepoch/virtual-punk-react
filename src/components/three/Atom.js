import { Sphere, Torus } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

export const Atom = ({
  scale,
  position,
  torus1ref,
  torus2ref,
  torus3ref,
  atomMaterial,
  atom1Material,
  atom2Material,
  atom3Material,
}) => {
  return (
    <Sphere args={[0.5, 16, 16]} material={atomMaterial} position={position} scale={scale}>
      <Torus ref={torus1ref} args={[1, 0.1, 1, 10]} rotation-y={degToRad(90)}>
        <Sphere
          args={[0.3, 32, 32]}
          position-y={1}
          material={atom1Material}
          castShadow
          receiveShadow
        >
          <pointLight intensity={2} />
        </Sphere>
      </Torus>

      <Torus
        ref={torus2ref}
        args={[1, 0.1, 1, 10]}
        rotation-x={degToRad(90)}
        rotation-y={degToRad(45)}
        rotation-z={degToRad(45)}
      >
        <Sphere
          args={[0.3, 32, 32]}
          position-y={1}
          material={atom2Material}
          castShadow
          receiveShadow
        >
          <pointLight intensity={20} />
        </Sphere>
      </Torus>
      <Torus
        ref={torus3ref}
        args={[1, 0.1, 1, 10]}
        rotation-x={degToRad(90)}
        rotation-y={degToRad(-45)}
        rotation-z={degToRad(-225)}
      >
        <Sphere
          args={[0.3, 32, 32]}
          position-y={1}
          material={atom3Material}
          castShadow
          receiveShadow
        >
          <pointLight intensity={2} />
        </Sphere>
      </Torus>
    </Sphere>
  );
};
