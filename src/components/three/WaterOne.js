import { useMemo, useRef } from "react";
import * as THREE from "three";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Water } from "three-stdlib";

extend({ Water });

export const WaterOne = (props, { sunColor = 0x000, waterColor = 0x33ccff }) => {
  const ref = useRef();
  const gl = useThree((state) => state.gl);

  const waterNormals = useTexture("/textures/water/0325b/normal.jpg");
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  const geom = useMemo(() => new THREE.PlaneGeometry(7, 7), []);

  const config = useMemo(
    () => ({
      textureWidth: 1024,
      textureHeight: 1024,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: sunColor,
      waterColor: waterColor,
      distortionScale: 0.1,
      fog: true,
      format: gl.encoding,
    }),
    [waterNormals, gl.encoding, sunColor, waterColor]
  );

  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );

  return (
    <group {...props}>
      <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
    </group>
  );
};
