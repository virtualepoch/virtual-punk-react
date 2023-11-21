import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import bg from "../../assets/images/balloons_cgi.jpg";
import "./bday.css";
import { Groot } from "./Groot";

export function DadBday() {
  const BackDrop = () => {
    const map = useLoader(THREE.TextureLoader, bg);
    const ref = useRef();

    useFrame(() => {
      ref.current.rotation.y += 0.0003;
    });

    return (
      <mesh position={[0, 0, 0]} rotation={[0, 1.6, 0]} ref={ref}>
        <sphereGeometry args={[27, 20, 4]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    );
  };
  var torusRotSpeed = 0.001;

  function TorusGroup() {
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
      meshRef1.current.rotation.z += torusRotSpeed;
      meshRef2.current.rotation.z -= torusRotSpeed;
    });

    return (
      <mesh position-z={-1}>
        <mesh ref={meshRef1} position={[0, 0, 0]}>
          <torusGeometry args={[0.9, 0.03, 4, 33]} />
          <meshStandardMaterial color="hotpink" wireframe={true} />
        </mesh>
        <mesh ref={meshRef2} position={[0, 0, 0.5]}>
          <torusGeometry args={[1.1, 0.03, 4, 33]} />
          <meshStandardMaterial color="aqua" wireframe={true} />
        </mesh>
        <mesh ref={meshRef3} position={[0, 0, 1.75]}>
          <torusGeometry args={[1.3, 0.1, 4, 33]} />
          <meshStandardMaterial color="hotpink" wireframe={false} />
        </mesh>
        <mesh ref={meshRef4} position={[0, 0, 2.1]}>
          <torusGeometry args={[1.5, 0.15, 4, 33]} />
          <meshStandardMaterial color="aqua" wireframe={false} />
        </mesh>
      </mesh>
    );
  }

  function CakeSpin() {
    const cake = useRef(null);

    useFrame(() => {
      cake.current.rotation.y += 0.005;
    });
    return (
      <mesh ref={cake} position={[0, -1.5, 0]}>
        <Groot />
      </mesh>
    );
  }

  return (
    <>
      <h1 className="bday-title dad">Happy Birthday!</h1>
      <header className="bday-section dad">
        <p className="bday-text dad">Happy Birthday Dad!</p>
        <p className="bday-text dad">
          I think you should <span className="word-pop">Dance!</span>
        </p>
        <p className="bday-text dad">
          Hope this card makes you<br></br>
          <span className="three-d-text">Laugh</span>
        </p>
        <p className="bday-text dad">
          Love,
          <br />
          Your son,
          <br />
          Craig
        </p>
      </header>
      <Canvas className="canvas bday-dad" camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <pointLight intensity={1} />
        <BackDrop />
        <TorusGroup />
        <CakeSpin />
      </Canvas>
    </>
  );
}
