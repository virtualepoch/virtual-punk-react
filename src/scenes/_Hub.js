import { TorusGroup } from "../components/three/TorusGroup";
import { Ocean } from "../components/three/Ocean";
import { useFrame, useThree } from "@react-three/fiber";
import { HubLinkPanel } from "../components/three/HubLinkPanel";
import { useRef } from "react";

export const scenePanels = [
  {
    index: "torus",
    imageUrl: "/images/spaceScene.jpg",
  },
  {
    index: "space",
    imageUrl: "/images/torusScene.jpg",
  },
];

export const Hub = ({ hubLink, hubLinkClicked }) => {
  const viewport = useThree((state) => state.viewport);
  const panelWidth = viewport.width * 4;
  const panelHeight =
    viewport.width > viewport.height ? viewport.height * 4 : viewport.width * 4;

  const hubLinksMesh = useRef();
  useFrame(() => {
    if (hubLinksMesh.current) {
      if (hubLink === 0) {
        hubLinksMesh.current.position.x +=
          hubLinksMesh.current.position.x < 0 ? 0.1 : 0;
      }
      if (hubLink === 1) {
        hubLinksMesh.current.position.x -=
          hubLinksMesh.current.position.x > -(viewport.width + panelWidth)
            ? 0.1
            : 0;
      }
    }
  });

  return (
    <>
      {/* <mesh ref={hubLinksMesh} position={[0, 0, 0]}>
        {scenePanels.map((scenePanel, index) => (
          <HubLinkPanel
            key={index}
            boxSize={[panelWidth, panelHeight, 0.2]}
            position={[index * (viewport.width + panelWidth), -0.01, -5]}
            imageUrl={scenePanel.imageUrl}
          />
        ))}
      </mesh> */}

      <mesh position={[0, 0, 0]}>
        <TorusGroup
          position={[0, 0, -5]}
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
