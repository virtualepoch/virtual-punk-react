import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
// COMPONENTS //
import { HubLink } from "../components/three/HubLink";
import { HubLinkOrbs } from "../components/three/HubLinkOrbs";
import { TorusGroup } from "../components/three/TorusGroup";
import { Ocean } from "../components/three/Ocean";

export const Hub = ({ hubLink, setHubLink, hubBtnClicked, performance }) => {
  // Params for responsive sizing
  const viewport = useThree((state) => state.viewport);
  const portrait = viewport.width < viewport.height;

  const scaleFactor = portrait ? viewport.width * 2 : viewport.height * 2;
  const scale = Math.max(Math.min(scaleFactor, 1.2), 0.75);

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

  // Reset cam angle when link is clicked
  const orbitControls = useRef();
  gsap.to(orbitControls.current, {
    minAzimuthAngle: hubLinkClicked ? 0 : -Math.PI / 3,
    maxAzimuthAngle: hubLinkClicked ? 0 : Math.PI / 3,
    minPolarAngle: hubLinkClicked ? Math.PI / 2 : Math.PI / 4,
    maxPolarAngle: hubLinkClicked ? Math.PI / 2 : Math.PI / 1.5,
    ease: "power1.in",
  });

  return (
    <>
      <OrbitControls
        ref={orbitControls}
        minDistance={2}
        maxDistance={5}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 4}
      />
      <mesh position={[0, 0.1, -7]} scale={scale}>
        <HubLinkOrbs
          hubLink={hubLink}
          setHubLink={setHubLink}
          performance={performance}
        />
        {visibleItem === 0 && (
          <HubLink
            scale={scale}
            linkTitle="Torus"
            image={"/images/torusScene.jpg"}
            visible={hubLink === 0}
            onFadeOut={onFadeOut}
            hubBtnClicked={hubBtnClicked}
            onClick={navTimeout}
            hubLinkClicked={hubLinkClicked}
            setHubLinkClicked={setHubLinkClicked}
          />
        )}

        {visibleItem === 1 && (
          <HubLink
            scale={scale}
            linkTitle="Mach"
            image={"/images/spaceScene.jpg"}
            visible={hubLink === 1}
            onFadeOut={onFadeOut}
            hubBtnClicked={hubBtnClicked}
            onClick={navTimeout}
            hubLinkClicked={hubLinkClicked}
            setHubLinkClicked={setHubLinkClicked}
          />
        )}

        {visibleItem === 2 && (
          <HubLink
            scale={scale}
            linkTitle="Water"
            image={"/images/torusScene.jpg"}
            visible={hubLink === 2}
            onFadeOut={onFadeOut}
            hubBtnClicked={hubBtnClicked}
            onClick={navTimeout}
            hubLinkClicked={hubLinkClicked}
            setHubLinkClicked={setHubLinkClicked}
          />
        )}
      </mesh>

      <TorusGroup
        position={[0, 0, -7]}
        scale={scale}
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
