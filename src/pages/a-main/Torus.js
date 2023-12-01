import { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { PillLinks } from "../../components/PillLinks";
import a1 from "./images/Abstract_128x128-09.png";
import a2 from "./images/Abstract_128x128-13.png";
import a3 from "./images/Abstract_512x512-60.png";
import a4 from "./images/Abstract_512x512-62.png";
import a5 from "./images/Abstract_512x512-75.png";
import a6 from "./images/Abstract_512x512-76.png";
import a7 from "./images/Abstract_512x512-77.png";
import a8 from "./images/Abstract_512x512-89.png";
import a9 from "./images/Abstract_512x512-93.png";

export function Torus() {
  var torusRotSpeed = 0.01;

  function TorusGroup() {
    // function textureChanger() {
    //   if (window.innerWidth < 700) {
    //     return a1;
    //   } else {
    //     return a2;
    //   }
    // }

    console.log(x);
    const texture = useLoader(
      THREE.TextureLoader,
      x === 1
        ? a1
        : x === 2
        ? a2
        : x === 3
        ? a3
        : x === 4
        ? a4
        : x === 5
        ? a5
        : x === 6
        ? a6
        : x === 7
        ? a7
        : x === 8
        ? a8
        : a9
    );
    texture.repeat.set(22, 3);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    const meshRef1 = useRef(null);
    const meshRef2 = useRef(null);
    const meshRef3 = useRef(null);
    const meshRef4 = useRef(null);

    useFrame(() => {
      if (
        !meshRef1.current ||
        !meshRef2.current ||
        !meshRef3.current ||
        !meshRef4.current
      ) {
        return;
      }
      meshRef1.current.rotation.x += torusRotSpeed;
      meshRef2.current.rotation.x -= torusRotSpeed;
      meshRef3.current.rotation.y -= torusRotSpeed;
      meshRef4.current.rotation.y += torusRotSpeed;
    });

    return (
      <>
        <mesh ref={meshRef1} position={[0, 0, 0]}>
          <torusGeometry args={[0.9, 0.1, 4, 33]} />
          {x > 0 ? (
            <meshStandardMaterial map={texture} />
          ) : (
            <meshStandardMaterial color="red" wireframe={true} />
          )}
        </mesh>
        <mesh ref={meshRef2} position={[0, 0, 0]}>
          <torusGeometry args={[1.1, 0.1, 4, 33]} />
          {x > 0 ? (
            <meshStandardMaterial map={texture} />
          ) : (
            <meshStandardMaterial color="aqua" wireframe={true} />
          )}
        </mesh>
        <mesh ref={meshRef3} position={[0, 0, 0]}>
          <torusGeometry args={[1.3, 0.1, 4, 33]} />
          {x > 0 ? (
            <meshStandardMaterial map={texture} />
          ) : (
            <meshStandardMaterial color="red" wireframe={true} />
          )}
        </mesh>
        <mesh ref={meshRef4} position={[0, 0, 0]}>
          <torusGeometry args={[1.5, 0.1, 4, 33]} />
          {x > 0 ? (
            <meshStandardMaterial map={texture} />
          ) : (
            <meshStandardMaterial color="aqua" wireframe={true} />
          )}
        </mesh>
      </>
    );
  }

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

  const [x, setX] = useState(0);
  return (
    <>
      <button className="btn-torus-test" onClick={() => setX(x + 1)}>
        +
      </button>
      <p className="btn-torus-test num">{x}</p>
      <button
        className="btn-torus-test b"
        onClick={() => {
          if (x > 0) {
            setX(x - 1);
          }
        }}
      >
        -
      </button>
      <h1 className="page-title">Torus</h1>
      <Canvas className="canvas torus" camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <TorusGroup />
        <Sphere />
      </Canvas>
      <PillLinks
        backTo="/"
        backName="home"
        forwardTo="/space"
        forwardName="space"
      />
    </>
  );
}
