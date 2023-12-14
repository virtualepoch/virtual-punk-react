import { useEffect, useRef } from "react";
import * as THREE from "three";

export const MeshUIButton = ({ onClick }) => {
  const button = useRef();

  useEffect(() => {
    button.current.setupState({
      state: "hovered",
      attribues: {
        offset: 0.05,
        backgroundColor: new THREE.Color(0x999999),
        backgroundOpacity: 1,
        fontColor: new THREE.Color(0xffffff),
      },
    });
    button.current.setupState({
      state: "idle",
      attribues: {
        offset: 0.035,
        backgroundColor: new THREE.Color(0x666666),
        backgroundOpacity: 0.3,
        fontColor: new THREE.Color(0xffffff),
      },
    });
    button.current.setupState({
      state: "selected",
      attribues: {
        offset: 0.02,
        backgroundColor: new THREE.Color(0x777777),
        fontColor: new THREE.Color(0x222222),
      },
    });
    button.current.setState("idle");
  });
  
  return (
    <block
      ref={button}
      onPointerEnter={() => button.current.setState("hovered")}
      onPointerLeave={() => button.current.setState("idle")}
      onPointerDown={() => button.current.setState("selected")}
      onPointerUp={() => {
        button.current.setState("hovered");
        onClick();
      }}
      args={[
        {
          width: 0.5,
          height: 0.2,
          justifyContent: "center",
          borderRadius: 0.075,
        },
      ]}
    >
      <text content={"Click"} />
    </block>
  );
};
