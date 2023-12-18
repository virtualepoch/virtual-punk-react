import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import {
  GradientTexture,
  Hud,
  OrthographicCamera,
  Torus,
  useHelper,
} from "@react-three/drei";
import { DEG2RAD, degToRad } from "three/src/math/MathUtils";

export const TorusScene = () => {
  const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");
  // const pointLight = useRef();
  // useHelper(pointLight, THREE.PointLightHelper, 1, "blue");

  function Sphere() {
    const sphere = useRef(null);

    useFrame(() => {
      sphere.current.rotation.y += 0.5;
    });
    return (
      <mesh ref={sphere}>
        <sphereGeometry args={[0.2, 4, 2]} />
        <meshBasicMaterial color="red" wireframe={true} />
      </mesh>
    );
  }

  const TorusGroup = ({
    position = [0, 0, -10],
    rotation = [0, 0, degToRad(120)],
    // rotation = [0, 0, 0],
  }) => {
    const meshRef = useRef();
    const meshRef2 = useRef();
    const meshRef3 = useRef();
    const meshRef4 = useRef();
    const meshRef5 = useRef();
    const meshRef6 = useRef();
    const meshRef7 = useRef();

    useFrame(() => {
      // first level
      meshRef.current.rotation.y += 0.005;
      //second level
      meshRef2.current.rotation.z += 0.05;
      meshRef3.current.rotation.z -= 0.05;
      meshRef4.current.rotation.z += 0.01;
      // third level
      meshRef5.current.rotation.z += 0.1;
      meshRef6.current.rotation.z -= 0.1;
      meshRef7.current.rotation.z += 0.1;
    });

    const torusScale = 1;
    const torusMap = [
      {
        ref: meshRef2,
        ref2: meshRef5,
        color: "cyan",
        scale: torusScale / 2,
        positionX: 0,
        positionY: torusScale,
        rotation: [Math.PI / 2, Math.PI / 2, 0],
      },
      {
        ref: meshRef3,
        ref2: meshRef6,
        color: "cyan",
        scale: torusScale / 2,
        positionX: -torusScale / 2 - torusScale / 3,
        positionY: -torusScale / 2,
        rotation: [Math.PI / 2, degToRad((1 / 3) * 100), degToRad(40)],
      },
      {
        ref: meshRef4,
        ref2: meshRef7,
        color: "white",
        scale: torusScale / 2,
        positionX: torusScale / 2 + torusScale / 3,
        positionY: -torusScale / 2,
        rotation: [Math.PI / 2, degToRad((-1 / 3) * 100), degToRad(40)],
      },
    ];

    return (
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <Torus
          args={[torusScale, torusScale / 10, 3, 3]}
          rotation-z={-degToRad(30)}
          material-color={"red"}
          castShadow
          receiveShadow
        >
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 0.5, 1]}
              colors={["red", "cyan", "red"]}
              size={100}
            />
          </meshBasicMaterial>
          <group rotation-z={degToRad(30)}>
            {torusMap.map((item, index) => (
              <Torus
                key={index}
                ref={item.ref}
                args={[item.scale, torusScale / 20, 3, 3]}
                rotation-z={-degToRad(30)}
                material-color={item.color}
                position={[item.positionX, item.positionY, 0]}
                rotation={item.rotation}
                castShadow
                receiveShadow
              >
                <meshBasicMaterial>
                  <GradientTexture
                    stops={[0, 0.5, 1]}
                    colors={["cyan", "#e63946", "cyan"]}
                    size={100}
                  />
                </meshBasicMaterial>
                <group rotation-z={degToRad(30)}>
                  {torusMap.map((item, index) => (
                    <Torus
                      key={index}
                      ref={item.ref2}
                      args={[item.scale / 4, torusScale / 40, 3, 32]}
                      material-color={item.color}
                      position={[item.positionX / 2, item.positionY / 2, 0]}
                      rotation={item.rotation}
                      castShadow
                      receiveShadow
                    >
                      <meshBasicMaterial>
                        <GradientTexture
                          stops={[0, 0.5, 1]}
                          colors={["#e63946", "cyan", "#e63946"]}
                          size={100}
                        />
                      </meshBasicMaterial>
                      {torusMap.map((item, index) => (
                        <Torus
                          key={index}
                          args={[item.scale / 16, torusScale / 80, 3, 16]}
                          material-color="cyan"
                          position={[item.positionX / 8, item.positionY / 8, 0]}
                          rotation={item.rotation}
                          castShadow
                          receiveShadow
                        />
                      ))}
                    </Torus>
                  ))}
                </group>
              </Torus>
            ))}
          </group>
        </Torus>
      </mesh>
    );
  };

  return (
    <group>
      <ambientLight intensity={1} />
      <directionalLight ref={directionalLight} position={[4, 15, 10]} />
      {/* <pointLight ref={pointLight} position={[-4, 15, 10]} intensity={1}/> */}
      <TorusGroup />
    </group>
  );
};
