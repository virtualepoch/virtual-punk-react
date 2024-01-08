import { useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";
import { useControls } from "leva";

import bg from "../../assets/images/realistic_wireframe_matrix.jpg";
// import floorTexture1 from "../../assets/images/brick-textures/Brick_Wall_015_OCC.jpg";
import floorTexture2 from "../../assets/images/brick-textures/Brick_Wall_015_COLOR.jpg";
import { Ayanami } from "../dissolve/Ayanami";
import { Head } from "./Head";
// import { Witch } from "./Witch";
// import { DissolveMaterial } from "../dissolve/DissolveMaterial";
// import { Godzilla } from "./Godzilla";
// import { Ayanami4K } from "./Ayanami4K";
// import { Trex } from "../portal/Trex";
// import { Pan } from "./Pan";
// import { Elf } from "./OdinElfFemale2";
// import { GirlBlob } from "./GirlBlob";
import { CreditsModal } from "../../components/ui/CreditsModal";

const BackDrop = () => {
  const map = useLoader(THREE.TextureLoader, bg);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0;
  });

  return (
    <mesh position={[0, 5, 0]} rotation={[0, 1.6, 0]} ref={ref}>
      <sphereGeometry args={[57, 4, 4]} />
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
      options: ["rei", "head"],
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
        <CreditsModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          key={item.id}
          info={item}
        />
      ))}
      <VRButton />
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], rotation: [0, 5, 0], fov: 60 }}
      >
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
              {visibleItem === "rei" && (
                <Ayanami
                  position={[0, 0, 0.4]}
                  rotation={[0, -0.6, 0]}
                  scale={[reiBaseScale, reiBaseScale, reiBaseScale]}
                  dissolveVisible={itemsDisplayed === "rei"}
                  onFadeOut={onFadeOut}
                />
              )}

              {visibleItem === "head" && (
                <Head
                  position={[0, 0, -0.8]}
                  rotation={[0, 0, 0]}
                  scale={0.2}
                  dissolveVisible={itemsDisplayed === "head"}
                  onFadeOut={onFadeOut}
                />
              )}

              {/* {visibleItem === "zilla" && <Godzilla position={[0, 0, -11]} rotation={[0, -0.6, 0]} scale={0.02} dissolveVisible={itemsDisplayed === "zilla"} onFadeOut={onFadeOut} />} */}

              {/* {visibleItem === "woman-demon" && (
                <Angel
                  position={[0, 1, 0.3]}
                  rotation={[0, 0, 0]}
                  scale={0.0005}
                  dissolveVisible={itemsDisplayed === "woman-demon"}
                  onFadeOut={onFadeOut}
                />
              )} */}

              {/* {visibleItem === "witch" && <Witch position={[0, 1.3, 0]} rotation={[0.3, 0, 0]} scale={0.08} dissolveVisible={itemsDisplayed === "witch"} onFadeOut={onFadeOut} />} */}

              {/* {visibleItem === "pan" && <Pan position={[0, 0, 0.2]} rotation={[0, 0, 0]} scale={0.43} dissolveVisible={itemsDisplayed === "pan"} onFadeOut={onFadeOut} />} */}

              {/* {visibleItem === "elf" && (
                <Elf
                  position={[0, 0, 0.2]}
                  rotation={[0, 0, 0]}
                  scale={0.3}
                  dissolveVisible={itemsDisplayed === "elf"}
                  onFadeOut={onFadeOut}
                />
              )} */}

              {/* {visibleItem === "girl-blob" && <GirlBlob position={[0, 0.04, 0.2]} rotation={[0, 0, 0]} scale={0.7} dissolveVisible={itemsDisplayed === "girl-blob"} onFadeOut={onFadeOut} />} */}
            </mesh>
          </XR>
        </Suspense>
      </Canvas>
    </>
  );
}
