import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
// COMPONENTS //
import { HubLink } from "../components/three/HubLink";
import { TorusGroup } from "../components/three/TorusGroup";
import { Ocean } from "../components/three/Ocean";

export const Hub = ({ hubLink, hubLinkClicked }) => {
  const viewport = useThree((state) => state.viewport);
  const portrait = viewport.width < viewport.height;
  const hubLinkSize = portrait ? viewport.width * 1.7 : viewport.width;

  const [visibleItem, setVisibleItem] = useState(hubLink);
  const onFadeOut = () => setVisibleItem(hubLink);

  return (
    <>
      <mesh position={[0, 0.12, -2]}>
        {visibleItem === 0 && (
          <HubLink
            size={hubLinkSize}
            image={"/images/spaceScene.jpg"}
            visible={hubLink === 0}
            onFadeOut={onFadeOut}
          />
        )}

        {visibleItem === 1 && (
          <HubLink
            size={hubLinkSize}
            image={"/images/torusScene.jpg"}
            visible={hubLink === 1}
            onFadeOut={onFadeOut}
          />
        )}

        {visibleItem === 2 && (
          <HubLink
            size={hubLinkSize}
            image={"/images/torusScene.jpg"}
            visible={hubLink === 2}
            onFadeOut={onFadeOut}
          />
        )}
      </mesh>

      <mesh position={[0, 0, -2]} scale={0.7}>
        <TorusGroup
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          hubLinkClicked={hubLinkClicked}
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
