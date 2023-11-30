import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import bg from "../../assets/images/balloons_cgi.jpg";
import "./bday.css";
import { Groot } from "./Groot";
import AudioPlayer from "./AudioPlayer";

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

      <AudioPlayer />

      <Canvas className="canvas bday-dad" camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <pointLight intensity={1} />
        <BackDrop />
        <CakeSpin />
      </Canvas>
    </>
  );
}
