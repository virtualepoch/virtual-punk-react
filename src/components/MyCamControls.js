import { CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { button, buttonGroup, folder, useControls } from "leva";
import { useEffect, useRef } from "react";
import { DEG2RAD } from "three/src/math/MathUtils";

export const MyCamControls = ({camera, camControls, centerMeshRef, linkClicked }) => {

  useEffect(() => {
    if (linkClicked) camControls.current?.reset(true);
  }, [linkClicked]);

  // All same options as the original "basic" example:
  // https://yomotsu.github.io/camera-controls/examples/basic.html
  const {
    // minDistance,
    enabled,
    verticalDragToForward,
    dollyToCursor,
    infinityDolly,
  } = useControls(
    "Camera",
    {
      thetaGrp: buttonGroup({
        label: "rotate theta",
        opts: {
          "+45º": () =>
            camControls.current?.rotate(45 * DEG2RAD, 0, true),
          "-90º": () =>
            camControls.current?.rotate(-90 * DEG2RAD, 0, true),
          "+360º": () =>
            camControls.current?.rotate(360 * DEG2RAD, 0, true),
        },
      }),
      phiGrp: buttonGroup({
        label: "rotate phi",
        opts: {
          "+20º": () =>
            camControls.current?.rotate(0, 20 * DEG2RAD, true),
          "-40º": () =>
            camControls.current?.rotate(0, -40 * DEG2RAD, true),
        },
      }),
      truckGrp: buttonGroup({
        label: "truck",
        opts: {
          "(1,0)": () => camControls.current?.truck(1, 0, true),
          "(0,1)": () => camControls.current?.truck(0, 1, true),
          "(-1,-1)": () => camControls.current?.truck(-1, -1, true),
        },
      }),
      dollyGrp: buttonGroup({
        label: "dolly",
        opts: {
          1: () => camControls.current?.dolly(1, true),
          "-1": () => camControls.current?.dolly(-1, true),
        },
      }),
      zoomGrp: buttonGroup({
        label: "zoom",
        opts: {
          "/2": () => camControls.current?.zoom(camera.zoom / 2, true),
          "/-2": () => camControls.current?.zoom(-camera.zoom / 2, true),
        },
      }),
      // minDistance: { value: 2 },
      // maxDistance: { value: 10 },
      moveTo: folder(
        {
          vec1: { value: [3, 5, 2], label: "vec" },
          "moveTo(…vec)": button((get) =>
            camControls.current?.moveTo(...get("moveTo.vec1"), true)
          ),
        },
        { collapsed: true }
      ),
      "fitToBox(mesh)": button(() =>
        camControls.current?.fitToBox(centerMeshRef.current, true)
      ),
      setPosition: folder(
        {
          vec2: { value: [-5, 2, 1], label: "vec" },
          "setPosition(…vec)": button((get) =>
            camControls.current?.setPosition(
              ...get("setPosition.vec2"),
              true
            )
          ),
        },
        { collapsed: true }
      ),
      setTarget: folder(
        {
          vec3: { value: [3, 0, -3], label: "vec" },
          "setTarget(…vec)": button((get) =>
            camControls.current?.setTarget(...get("setTarget.vec3"), true)
          ),
        },
        { collapsed: true }
      ),
      setLookAt: folder(
        {
          vec4: { value: [1, 2, 3], label: "position" },
          vec5: { value: [1, 1, 0], label: "target" },
          "setLookAt(…position, …target)": button((get) =>
            camControls.current?.setLookAt(
              ...get("setLookAt.vec4"),
              ...get("setLookAt.vec5"),
              true
            )
          ),
        },
        { collapsed: true }
      ),
      lerpLookAt: folder(
        {
          vec6: { value: [-2, 0, 0], label: "posA" },
          vec7: { value: [1, 1, 0], label: "tgtA" },
          vec8: { value: [0, 2, 5], label: "posB" },
          vec9: { value: [-1, 0, 0], label: "tgtB" },
          t: { value: Math.random(), label: "t", min: 0, max: 1 },
          "f(…posA,…tgtA,…posB,…tgtB,t)": button((get) => {
            return camControls.current?.lerpLookAt(
              ...get("lerpLookAt.vec6"),
              ...get("lerpLookAt.vec7"),
              ...get("lerpLookAt.vec8"),
              ...get("lerpLookAt.vec9"),
              get("lerpLookAt.t"),
              true
            );
          }),
        },
        { collapsed: true }
      ),
      saveState: button(() => camControls.current?.saveState()),
      reset: button(() => camControls.current?.reset(true)),
      enabled: {
        value: true,
        label: "controls on",
      },
      verticalDragToForward: {
        value: false,
        label: "vert. drag to move forward",
      },
      dollyToCursor: { value: false, label: "dolly to cursor" },
      infinityDolly: { value: false, label: "infinity dolly" },
    },
    { collapsed: true }
  );

  return (
    <CameraControls
      enabled={enabled}
      ref={camControls}
      // minDistance={2}
      // maxDistance={15}
      // minAzimuthAngle={-Math.PI / 2}
      // maxAzimuthAngle={Math.PI / 2}
      // maxPolarAngle={Math.PI / 1.5}
      // minPolarAngle={Math.PI / 4}
      verticalDragToForward={verticalDragToForward}
      dollyToCursor={dollyToCursor}
      infinityDolly={infinityDolly}
    />
  );
};
