import { useState } from "react";
import { useThree } from "@react-three/fiber";
// COMPONENTS //
import { HubLink } from "../components/three/HubLink";
import { TorusGroup } from "../components/three/TorusGroup";
import { Ocean } from "../components/three/Ocean";
import { useNavigate } from "react-router-dom";

export const Hub = ({ hubLink, hubBtnClicked }) => {
  // Params for responsive sizing
  const viewport = useThree((state) => state.viewport);
  const portrait = viewport.width < viewport.height;
  const scale = portrait ? viewport.width * 4 : viewport.height * 4;

  // For navigation
  const navigate = useNavigate();

  // Changes visible hubLink after Dissolve anim
  const [visibleItem, setVisibleItem] = useState(hubLink);
  const onFadeOut = () =>
    hubLinkClicked ? setVisibleItem() : setVisibleItem(hubLink);

  // State to start the transition anim prior to navigate
  const [hubLinkClicked, setHubLinkClicked] = useState();

  const navTimeout = () => {
    setTimeout(() => {
      navigate(
        hubLink === 0
          ? "/torus"
          : hubLink === 1
          ? "/mach"
          : hubLink === 2
          ? "/water"
          : "/hub"
      );
    }, 2000);
  };

  return (
    <>
      <mesh position={[0, 0.1, -7 + scale / 4]}>
        {visibleItem === 0 && (
          <HubLink
            linkTitle="Torus"
            image={"/images/torusScene.jpg"}
            visible={hubLink === 0}
            onFadeOut={onFadeOut}
            portrait={portrait}
            scale={scale}
            hubBtnClicked={hubBtnClicked}
            onClick={navTimeout}
            hubLinkClicked={hubLinkClicked}
            setHubLinkClicked={setHubLinkClicked}
          />
        )}

        {visibleItem === 1 && (
          <HubLink
            linkTitle="Mach"
            image={"/images/spaceScene.jpg"}
            visible={hubLink === 1}
            onFadeOut={onFadeOut}
            portrait={portrait}
            scale={scale}
            hubBtnClicked={hubBtnClicked}
            onClick={navTimeout}
            hubLinkClicked={hubLinkClicked}
            setHubLinkClicked={setHubLinkClicked}
          />
        )}

        {visibleItem === 2 && (
          <HubLink
            linkTitle="Water"
            image={"/images/torusScene.jpg"}
            visible={hubLink === 2}
            onFadeOut={onFadeOut}
            portrait={portrait}
            scale={scale}
            hubBtnClicked={hubBtnClicked}
            onClick={navTimeout}
            hubLinkClicked={hubLinkClicked}
            setHubLinkClicked={setHubLinkClicked}
          />
        )}
      </mesh>

      <TorusGroup
        position={[0, 0, -7]}
        scale={scale / 2}
        rotation={[0, 0, 0]}
        hubBtnClicked={hubBtnClicked}
        hubLinkClicked={hubLinkClicked}
      />

      <Ocean
        position={[0, -140, 0]}
        rotation={[0, 0, 0]}
        waterColor={0x00ffff}
        sunColor={0xffffff}
      />
    </>
  );
};
