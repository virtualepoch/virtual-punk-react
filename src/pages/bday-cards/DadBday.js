import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import bg from "../../assets/images/balloons_cgi.jpg";
import "./bday.css";
import { Groot } from "./Groot";
import AudioPlayer from "./AudioPlayer";

export function DadBday() {
  // STATE / SETTER FOR AUDIO & ANIMATION
  const [startEx, setStartEx] = useState(false);

  function GrootDance() {
    const groot = useRef(null);

    useFrame(() => {
      groot.current.rotation.y += startEx ? 0.005 : 0;
    });

    return (
      <mesh ref={groot} position={[0, -1.5, 0]}>
        <Groot startEx={startEx} />
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

      <AudioPlayer startEx={startEx} setStartEx={setStartEx} />

      <Canvas className="canvas bday-dad" camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <pointLight intensity={1} />
        <BackDrop />
        <GrootDance />
      </Canvas>
    </>
  );

  function BackDrop() {
    const ref = useRef();
    const map = useLoader(THREE.TextureLoader, bg);

    useFrame(() => {
      ref.current.rotation.y += 0.0003;
    });

    return (
      <mesh position={[0, 0, 0]} rotation={[0, 1.6, 0]} ref={ref}>
        <sphereGeometry args={[27, 20, 4]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    );
  }
}
