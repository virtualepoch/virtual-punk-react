import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'

export function VR() {
  const canvas = {
    width: "100%",
    height: "100vh",
    background: "aqua",
  }
  return (
    <>
      <VRButton />
      <Canvas style={canvas}>
        <XR>
          <Controllers />
          <Hands />
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="blue" />
          </mesh>
        </XR>
      </Canvas>
    </>
  )
}