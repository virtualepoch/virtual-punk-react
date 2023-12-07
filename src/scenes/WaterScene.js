import { Suspense } from "react";
import { ContactShadows, Environment, Float, Stars } from "@react-three/drei";

// THREE COMPONENTS
import { Ocean } from "../components/three/Ocean";
import { Earth } from "../components/three/Earth";
import { MyGrid } from "../components/three/MyGrid";

export const WaterScene = () => {
  // FOR SOME REASON THE ACTIVATING THE LIGHT HELPER ON THIS PAGE CAUSES THE TypeError:
  // !!! 'light.useHelper is not a function' !!!!!
  // const light = useRef();
  // if (light.current) light.useHelper(light, DirectionalLightHelper, 1, "red");

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={1} />
      <ContactShadows position-y={0} opacity={0.4} />
      <Suspense>
        <Stars />
        <directionalLight
          // ref={light}
          position={[0, 15, 10]}
          // angle={0.3}
          intensity={1}
          color="white"
          castShadow
          shadow-camera-near={0}
          shadow-camera-far={100}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0001}
        />

        <Float
          speed={3} // Animation speed, defaults to 1
          rotationIntensity={0.1} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[10, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Earth />
        </Float>
        <MyGrid />

        <Ocean
          position={[0, -10, 0]}
          // sunColor={0xffffff}
          sunColor={"white"}
          // waterColor={0xff1e0f}
          waterColor={"red"}
        />
      </Suspense>
    </>
  );
};

// const Shadows = memo(() => (
//   <AccumulativeShadows temporal frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
//     <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
//   </AccumulativeShadows>
// ))
