import { useMemo, useRef } from "react";
import * as THREE from "three";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Water } from "three-stdlib";

extend({ Water });

export const WaterOne = ({
  position,
  rotY,
  sunColor = 0xfff,
  waterColor = 0x33ccff,
  width = 10000,
  height = 10000,
}) => {
  const ref = useRef();
  const gl = useThree((state) => state.gl);

  const waterNormals = useTexture("/textures/water/og/normal.jpg");
  // const repeat = 5000;
  // waterNormals.repeat.set(repeat, repeat);
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  const geom = useMemo(
    () => new THREE.PlaneGeometry(width, height),
    [width, height]
  );

  const config = useMemo(
    () => ({
      textureWidth: 1024,
      textureHeight: 1024,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: sunColor,
      waterColor: waterColor,
      distortionScale: 0.01,
      fog: true,
      format: gl.encoding,
    }),
    [waterNormals, gl.encoding, sunColor, waterColor]
  );

  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );

  return (
    <group rotation-y={rotY} position={position}>
      <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
    </group>
  );
};
