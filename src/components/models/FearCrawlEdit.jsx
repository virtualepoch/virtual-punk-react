/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/fear_crawl.glb 
Author: alex.andain.777 (https://sketchfab.com/alex.andain.777)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/fear-crawler-all-animation-it-takes-to-9f5dc82f62f148f7a53504f50c439eab
Title: Fear Crawler All animation It Takes to
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function FearCrawlEdit(props) {
  const group = useRef();
  const { nodes, animations } = useGLTF("/models/fear_crawl_edit.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model">
          <group
            name="b6fdf511ec77460ab190ad6b1f95c6a9fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="FearCrawlerao"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={10}
                >
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group
                      name="Object_290"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <skinnedMesh
                      name="Object_291"
                      geometry={nodes.Object_291.geometry}
                      material={nodes.Object_291.material}
                      skeleton={nodes.Object_291.skeleton}
                    >
                      <meshPhongMaterial color="#aa0000" />
                    </skinnedMesh>
                    <skinnedMesh
                      name="Object_292"
                      geometry={nodes.Object_292.geometry}
                      material={nodes.Object_292.material}
                      skeleton={nodes.Object_292.skeleton}
                    >
                      <meshPhongMaterial color="#aa0000" />
                    </skinnedMesh>
                    <skinnedMesh
                      name="Object_293"
                      geometry={nodes.Object_293.geometry}
                      material={nodes.Object_293.material}
                      skeleton={nodes.Object_293.skeleton}
                    >
                      <meshPhongMaterial color="#000" />
                    </skinnedMesh>
                    <skinnedMesh
                      name="Object_294"
                      geometry={nodes.Object_294.geometry}
                      material={nodes.Object_294.material}
                      skeleton={nodes.Object_294.skeleton}
                    >
                      <meshPhongMaterial color="#fff" />
                    </skinnedMesh>
                    <skinnedMesh
                      name="Object_295"
                      geometry={nodes.Object_295.geometry}
                      material={nodes.Object_295.material}
                      skeleton={nodes.Object_295.skeleton}
                    >
                      <meshPhongMaterial color="#fff" />
                    </skinnedMesh>
                  </group>
                </group>
                <group
                  name="FearCrawlermo"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/fear_crawl_edit.glb");