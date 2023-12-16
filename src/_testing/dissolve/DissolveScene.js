import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { CameraControls, ContactShadows, Environment } from "@react-three/drei";

import bg from "../../assets/images/dreamlike_sunset.jpg";

import { Ayanami } from "./Ayanami";
import { DissolveMaterial } from "./DissolveMaterial";
import { useControls } from "leva";

const boxMaterial = new THREE.MeshStandardMaterial({ color: "white" });
const sphereMaterial = new THREE.MeshStandardMaterial({ color: "white" });

export function DissolveScene() {
  const controlsRef = useRef();

  const { itemsDisplayed } = useControls({
    itemsDisplayed: {
      value: "rei",
      options: ["box", "sphere", "rei"],
    },
  });

  const [visibleItem, setVisibleItem] = useState(itemsDisplayed);
  const onFadeOut = () => setVisibleItem(itemsDisplayed);

  return (
    <>
      {visibleItem === "box" && (
        <mesh>
          <boxGeometry />
          <DissolveMaterial
            baseMaterial={boxMaterial}
            visible={itemsDisplayed === "box"}
            onFadeOut={onFadeOut}
            color="#0082b2"
          />
        </mesh>
      )}

      {visibleItem === "sphere" && (
        <mesh scale={0.5}>
          <sphereGeometry />
          <DissolveMaterial
            baseMaterial={sphereMaterial}
            visible={itemsDisplayed === "sphere"}
            onFadeOut={onFadeOut}
            color="#ff0000"
          />
        </mesh>
      )}
      {visibleItem === "rei" && (
        <Ayanami
          position={[0, -1.5, 0]}
          rotation={[0, -0.6, 0]}
          scale={[0.03, 0.03, 0.03]}
          dissolveVisible={itemsDisplayed === "rei"}
          onFadeOut={onFadeOut}
        />
      )}
    </>
  );
}
