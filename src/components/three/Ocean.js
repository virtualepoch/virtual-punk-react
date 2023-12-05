import { useMemo, useRef } from "react";
import * as THREE from "three";
import { extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Water } from "three-stdlib";

extend({ Water });

export const Ocean = ({ position, sunColor, waterColor }) => {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(
    THREE.TextureLoader,
    "/images/waternormals.jpeg"
  );
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      // sunColor: 0xffffff,
      sunColor: sunColor,
      // waterColor: 0x001e0f,
      waterColor: waterColor,
      distortionScale: 3.7,
      fog: true,
      format: gl.encoding,
    }),
    [waterNormals, gl.encoding, sunColor, waterColor]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  return (
    <group position={position}>
      <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
    </group>
  );
};
