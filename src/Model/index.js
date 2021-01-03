/*
auto-generated by: https://github.com/pmndrs/gltfjsx
author: Diego Luján García (https://sketchfab.com/diegoluga)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/ab11ebff89224f03bd75efede1164cf6
title: Male Full Body Ecorche
*/
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";
import { useFrame } from "react-three-fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/male.glb");

  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime()
  //   group.current.rotation.x = Math.cos(t / 4) / 10
  //   group.current.rotation.y = Math.sin(t / 4) / 10
  //   group.current.position.y = (1 + Math.sin(t / 1.5)) / 50
  // })

  return (
    <group {...props} ref={group} >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          material={materials.defaultMat_12}
          geometry={nodes.mesh_0.geometry}
        />
        <mesh
          material={materials.defaultMat_11}
          geometry={nodes.mesh_1.geometry}
        />
        <mesh
          material={materials.defaultMat_10}
          geometry={nodes.mesh_2.geometry}
        />
        <mesh
          material={materials.defaultMat_9}
          geometry={nodes.mesh_3.geometry}
        />
        <mesh
          material={materials.material_1}
          geometry={nodes.mesh_4.geometry}
        />
        <mesh
          material={materials.defaultMat_8}
          geometry={nodes.mesh_5.geometry}
        />
        <mesh
          material={materials.defaultMat_7}
          geometry={nodes.mesh_6.geometry}
        />
        <mesh
          material={materials.defaultMat_6}
          geometry={nodes.mesh_7.geometry}
        />
        <mesh
          material={materials.defaultMat_5}
          geometry={nodes.mesh_8.geometry}
        />
        <mesh
          material={materials.defaultMat_4}
          geometry={nodes.mesh_9.geometry}
        />
        <mesh
          material={materials.defaultMat_3}
          geometry={nodes.mesh_10.geometry}
        />
        <mesh
          material={materials.defaultMat_2}
          geometry={nodes.mesh_11.geometry}
        />
        <mesh
          material={materials.defaultMat_1}
          geometry={nodes.mesh_12.geometry}
        />
        <mesh
          material={materials.material_0}
          geometry={nodes.mesh_13.geometry}
        />
        <mesh
          material={materials.defaultMat_0}
          geometry={nodes.mesh_14.geometry}
        />
        <mesh
          material={materials.defaultMat}
          geometry={nodes.mesh_15.geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/male.glb");
