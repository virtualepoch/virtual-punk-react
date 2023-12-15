import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
// COMPONENTS //
import { HubLink } from "../components/three/HubLink";
import { TorusGroup } from "../components/three/TorusGroup";
import { Ocean } from "../components/three/Ocean";

export const scenePanels = [
  {
    index: "torus",
    image: "/images/spaceScene.jpg",
  },
  {
    index: "space",
    image: "/images/torusScene.jpg",
  },
  {
    index: "time",
    image: "/images/torusScene.jpg",
  },
];

export const Hub = ({ hubLink, hubLinkClicked }) => {
  const viewport = useThree((state) => state.viewport);
  const portrait = viewport.width < viewport.height;
  const hubLinkSize = portrait ? viewport.width * 2 : viewport.width;
  const linkGapFactor = viewport.width * 1.5 + hubLinkSize;

  const hubLinksMesh = useRef();
  useFrame(() => {
    if (hubLinksMesh.current) {
      if (hubLink === 0) {
        hubLinksMesh.current.position.x +=
          hubLinksMesh.current.position.x < 0 ? 0.1 : 0;
      }
      if (hubLink === 1) {
        hubLinksMesh.current.position.x -=
          hubLinksMesh.current.position.x > -linkGapFactor ? 0.1 : 0;
      }
      if (hubLink === 2) {
        hubLinksMesh.current.position.x -=
          hubLinksMesh.current.position.x > -linkGapFactor * 2 ? 0.1 : 0;
      }
    }
  });

  return (
    <>
      <mesh ref={hubLinksMesh} position={[0, 0, -2]}>
        {scenePanels.map((scenePanel, index) => (
          <HubLink
            key={index}
            size={hubLinkSize}
            posX={index * linkGapFactor}
            image={scenePanel.image}
          />
        ))}
      </mesh>

      <mesh position={[0, 0, 0]}>
        <TorusGroup
          position={[0, 2.5, -10]}
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
