import { createContext, useContext, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Cloud } from "@react-three/drei";
import { random } from "maath";

export const Clouds = () => {
  const context = createContext();
  function Puffycloud({ seed, vec = new THREE.Vector3(), ...props }) {
    const api = useRef();
    const light = useRef();
    const rig = useContext(context);
    const [flash] = useState(
      () =>
        new random.FlashGen({ count: 10, minDuration: 40, maxDuration: 200 })
    );

    useFrame((state, delta) => {
      const impulse = flash.update(state.clock.elapsedTime, delta);
      light.current.intensity = impulse * 15000;
      if (impulse === 1) rig?.current?.setIntensity(1);
      api.current?.applyImpulse(
        vec.copy(api.current.translation()).negate().multiplyScalar(10)
      );
    });
    return (
      <>
        <Cloud
          seed={seed}
          fade={30}
          speed={0.1}
          growth={4}
          segments={40}
          volume={6}
          opacity={0.6}
          bounds={[4, 3, 1]}
        />
        <Cloud
          seed={seed + 1}
          fade={30}
          position={[0, 1, 0]}
          speed={0.5}
          growth={4}
          volume={10}
          opacity={1}
          bounds={[6, 2, 1]}
        />
        <pointLight position={[0, 0, 0.5]} ref={light} color="blue" />
      </>
    );
  }

  return (
    <Clouds limit={400} material={THREE.MeshLambertMaterial}>
      <Puffycloud seed={10} position={[50, 0, 0]} />
      <Puffycloud seed={20} position={[0, 50, 0]} />
      <Puffycloud seed={30} position={[50, 0, 50]} />
      <Puffycloud seed={40} position={[0, 0, -50]} />
    </Clouds>
  );
};
