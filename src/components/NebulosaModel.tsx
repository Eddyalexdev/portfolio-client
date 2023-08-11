import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function NebulosaModel(props) {
  const { nodes, materials } = useGLTF('/nebulosa.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Sphere__0.geometry} material={'/textures/Scene_-_Root_diffuse.jpeg'} rotation={[-Math.PI / 2, 0, 0]} scale={50000} />
      </group>
    </group>
  )
}

useGLTF.preload('/nebulosa.gltf')
