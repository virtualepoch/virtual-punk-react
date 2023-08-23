import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState, Suspense } from "react";

import bg from "../../assets/images/realistic_wireframe_matrix.jpg";
import { OrbitControls } from "@react-three/drei";
import { Ayanami } from "../dissolve/Ayanami";
// import { Witch } from "./Witch";
// import { DissolveMaterial } from "../dissolve/DissolveMaterial";
import { useControls } from "leva";

// import floorTexture1 from "../../assets/images/brick-textures/Brick_Wall_015_OCC.jpg";
import floorTexture2 from "../../assets/images/brick-textures/Brick_Wall_015_COLOR.jpg";
// import { Godzilla } from "./Godzilla";
// import { Ayanami4K } from "./Ayanami4K";
import { Trex } from "../portal/Trex";
// import { Pan } from "./Pan";
import { Elf } from "./OdinElfFemale2";
// import { GirlBlob } from "./GirlBlob";
import { CreditsModal } from "../../components/CreditsModal";

const BackDrop = () => {
  const map = useLoader(THREE.TextureLoader, bg);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0;
  });

  return (
    <mesh position={[0, 5, 0]} rotation={[0, 1.6, 0]} ref={ref}>
      <sphereGeometry args={[27, 20, 4]} />
      <meshStandardMaterial map={map} side={THREE.BackSide} />
    </mesh>
  );
};

function Ground() {
  const textures = useLoader(THREE.TextureLoader, floorTexture2);
  return (
    <>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[22, 22]} />
        <meshStandardMaterial map={textures} />
      </mesh>
    </>
  );
}

const reiBaseScale = 0.01;

export function VR() {
  const { itemsDisplayed } = useControls({
    itemsDisplayed: {
      value: "rei",
      options: ["t-rex", "rei", "elf"],
    },
  });

  const [visibleItem, setVisibleItem] = useState(itemsDisplayed);
  const onFadeOut = () => setVisibleItem(itemsDisplayed);

  const [modalOpen, setModalOpen] = useState(false);

  // CreditsModal info-
  const creditsInfo = [
    {
      id: "00",
      title: "PBR Velociraptor (Animated)",
      link: "https://skfb.ly/oHoUE",
      credits: `by Ferocious Industries is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
      title2: "High detailed rex animation",
      link2: "https://skfb.ly/oGBPT",
      credits2: `by Al-Deezel is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
      title3: "Otodus Megalodon",
      link3: "https://skfb.ly/ooByU",
      credits3: `by CanYuTsai is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).`,
    },
  ];

  return (
    <>
      <h1 className="page-title">VR Test</h1>
      {creditsInfo.map((item) => (
        <CreditsModal modalOpen={modalOpen} setModalOpen={setModalOpen} key={item.id} info={item} />
      ))}
      <VRButton />
      <Canvas shadows camera={{ position: [0, 2, 5], rotation: [0, 5, 0], fov: 60 }}>
        <Suspense fallback={null}>
          <OrbitControls />
          <ambientLight intensity={1} />
          <pointLight intensity={1} />
          <XR>
            <Controllers />
            <Hands />
            <mesh>
              <sphereGeometry args={[0.2, 8, 8]} />
              <meshBasicMaterial color="blue" />
            </mesh>
            <BackDrop />
            <Ground />

            <mesh position-z={-1}>
              {/* {visibleItem === "zilla" && <Godzilla position={[0, 0, -11]} rotation={[0, -0.6, 0]} scale={0.02} dissolveVisible={itemsDisplayed === "zilla"} onFadeOut={onFadeOut} />} */}

              {visibleItem === "t-rex" && <Trex position={[5, 0, -11]} rotation={[0, -0.6, 0]} scale={6} dissolveVisible={itemsDisplayed === "t-rex"} onFadeOut={onFadeOut} />}

              {visibleItem === "rei" && <Ayanami position={[0, 0, 0.4]} rotation={[0, -0.6, 0]} scale={[reiBaseScale, reiBaseScale, reiBaseScale]} dissolveVisible={itemsDisplayed === "rei"} onFadeOut={onFadeOut} />}

              {/* {visibleItem === "rei-4k" && <Ayanami4K position={[0, 0, 0.4]} rotation={[0, -0.6, 0]} scale={[reiBaseScale, reiBaseScale, reiBaseScale]} dissolveVisible={itemsDisplayed === "rei-4k"} onFadeOut={onFadeOut} />} */}

              {/* {visibleItem === "witch" && <Witch position={[0, 1.3, 0]} rotation={[0.3, 0, 0]} scale={0.08} dissolveVisible={itemsDisplayed === "witch"} onFadeOut={onFadeOut} />} */}

              {/* {visibleItem === "pan" && <Pan position={[0, 0, 0.2]} rotation={[0, 0, 0]} scale={0.43} dissolveVisible={itemsDisplayed === "pan"} onFadeOut={onFadeOut} />} */}

              {visibleItem === "elf" && <Elf position={[0, 0, 0.2]} rotation={[0, 0, 0]} scale={0.3} dissolveVisible={itemsDisplayed === "elf"} onFadeOut={onFadeOut} />}

              {/* {visibleItem === "girl-blob" && <GirlBlob position={[0, 0.04, 0.2]} rotation={[0, 0, 0]} scale={0.7} dissolveVisible={itemsDisplayed === "girl-blob"} onFadeOut={onFadeOut} />} */}
            </mesh>
          </XR>
        </Suspense>
      </Canvas>
    </>
  );
}
