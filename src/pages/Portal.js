import * as THREE from "three";
import { useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { JetConcept } from "../components/models/Jet_concept";
import earth500 from "../assets/images/earth_clouds_1k.jpg";
import earth8k from "../assets/images/earth_clouds_4k.jpg";
import dreamlike from "../assets/images/dreamlike_cyber_punk.jpg";
import realistic from "../assets/images/realistic_cyber_punk.jpg";
import sky from "../assets/images/sky_cyber_punk.jpg";
import tech from "../assets/images/tech_noir__cyberpunk_cyber_punk.jpg";
import { PillLinks } from "../components/PillLinks";
import { CreditsModal } from "../components/CreditsModal";

export function Portal() {
  const [modalOpen, setModalOpen] = useState(false);

  function Earth() {
    function textureChanger() {
      if (window.innerWidth < 700) {
        return dreamlike;
      } else {
        return dreamlike;
      }
      // if (window.innerWidth < 700) {
      //   return earth500;
      // } else {
      //   return earth8k;
      // }
    }

    const texture = useLoader(THREE.TextureLoader, textureChanger());

    const earthRef = useRef(null);

    useFrame(() => {
      if (modalOpen === true) {
        earthRef.current.rotation.x += 0;
      } else earthRef.current.rotation.x += 0.0;
    });

    return (
      <mesh ref={earthRef} position={[0, 0, 0]}>
        <sphereGeometry args={[5, 10, 10]} />
        <meshPhongMaterial map={texture} side={THREE.BackSide} />
      </mesh>
    );
  }

  function JetMesh() {
    const jet = useRef(null);

    // useFrame(() => {
    //   jet.current.rotation.x += 0.01;
    //   jet.current.position.y += 0.01;
    // });

    return (
      <mesh ref={jet} position={[0, -2, 0]}>
        <JetConcept scale={1} rotation={[0.6, Math.PI / -2, 0]} />
      </mesh>
    );
  }

  // CreditsModal info-
  const creditsInfo = [
    {
      id: "00",
      title: "Great White Shark",
      link: "https://skfb.ly/6ADoX",
      credits: `by BlueMesh is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
      title2: "Otodus Megalodon",
      link2: "https://skfb.ly/ooByU",
      credits2: `by CanYuTsai is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
      title3: "Head",
      link3: "https://skfb.ly/oI8BX",
      credits3: `by Shedmon is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
    },
  ];
  return (
    <>
      <h1 className="page-title">Portal</h1>
      {creditsInfo.map((item) => (
        <CreditsModal modalOpen={modalOpen} setModalOpen={setModalOpen} key={item.id} info={item} />
      ))}
      <Canvas camera={{ position: [0, 0, 2], rotation: [0, 0, 0], fov: 70 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 15, 10]} angle={0.3} />
        <OrbitControls autoRotate={modalOpen ? false : false} />
        {/* <JetMesh /> */}
        <Earth />
        <Stars />
      </Canvas>
      <PillLinks backTo="/mach" backName="mach" forwardTo="/star-punk" forwardName="star-punk" />
    </>
  );
}
