import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
// COMPONENTS //
import { HubLink } from "../components/three/HubLink";
import { TorusGroup } from "../components/three/TorusGroup";
import { Ocean } from "../components/three/Ocean";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export const Hub = ({ hubLink, hubBtnClicked }) => {
  const viewport = useThree((state) => state.viewport);
  const portrait = viewport.width < viewport.height;
  const hubLinkScale = portrait ? viewport.width * 1.7 : viewport.width;
  const torusSize = portrait ? viewport.width * 1.7 : viewport.width;

  const [visibleItem, setVisibleItem] = useState(hubLink);
  const onFadeOut = () => setVisibleItem(hubLink);

  return (
    <>
      <mesh position={[0, 0, -2]}>
        {visibleItem === 0 && (
          <HubLink
            linkTitle="Torus"
            image={"/images/torusScene.jpg"}
            visible={hubLink === 0}
            onFadeOut={onFadeOut}
            scale={hubLinkScale}
            hubBtnClicked={hubBtnClicked}
          />
        )}

        {visibleItem === 1 && (
          <HubLink
            linkTitle="Space"
            image={"/images/spaceScene.jpg"}
            visible={hubLink === 1}
            onFadeOut={onFadeOut}
            scale={hubLinkScale}
            hubBtnClicked={hubBtnClicked}
          />
        )}

        {visibleItem === 2 && (
          <HubLink
            linkTitle="Torus"
            image={"/images/torusScene.jpg"}
            visible={hubLink === 2}
            onFadeOut={onFadeOut}
            scale={hubLinkScale}
            hubBtnClicked={hubBtnClicked}
          />
        )}
      </mesh>

      <mesh position={[0, 0, -2]} scale={torusSize}>
        <TorusGroup
          position={[0, 0, -5]}
          rotation={[0, 0, 0]}
          hubBtnClicked={hubBtnClicked}
        />
      </mesh>

      <Ocean
        position={[0, -140, 0]}
        rotation={[0, 0, 0]}
        waterColor={0x00ffff}
        sunColor={0xffffff}
      />
    </>
  );
};
