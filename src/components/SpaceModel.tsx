"use client"

import React, { useRef, useState } from 'react'
import { Html, useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {motion} from 'framer-motion-3d'
import { useRouter } from 'next/navigation'

export function SpaceModel(props: any) {
  const { nodes, materials } = useGLTF('/scene.gltf') as any
  const routes = useRouter()
  const ref = useRef() as any;
  const refWaves = useRef() as any;
  const [scale, setScale] = useState(100)
  const [viewPlanet, setViewPlanet] = useState(false)

  useFrame(() => {
    ref.current.rotation.y += 0.001
    refWaves.current.rotation.z -= 0.0005
  })

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <motion.group 
          rotation={[-Math.PI / 2, 0, 0]} 
          scale={scale}
          onClick={() => routes.push('/about')}
        >
          <Html position={[-.2, -1, 5]}>
            <div className="p-2 w-[100px]">
              <h2 className="text-white">About Me!</h2>
            </div>
          </Html>
          <mesh geometry={nodes.body_Material001_0.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.body_Material002_0.geometry} material={materials['Material.002']} />
        </motion.group>

        <motion.group
          transition={{type: "spring"}}
        >

          <motion.mesh 
            geometry={nodes.waves1_Material002_0.geometry} material={materials['Material.002']} 
            rotation={[-Math.PI / 2, 0, 0]} 
            scale={[100, 100, 1.891]} 
          />

          <motion.mesh 
            geometry={nodes.waves2_Material002_0.geometry} material={materials['Material.002']} 
            position={[92.464, 15.529, 2.112]} 
            rotation={[-Math.PI / 2, 0, 0]} 
            scale={[100, 100, 1.891]} />

          <mesh ref={refWaves} geometry={nodes.waves_Material002_0.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 1.891]} />
          <group ref={ref}>
            <group position={[-357.404, 392.646, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={39.706}>
              <mesh geometry={nodes.Sphere002_Material001_0.geometry} material={materials['Material.001']} />
              <mesh geometry={nodes.Sphere002_Material002_0.geometry} material={materials['Material.002']} />
            </group>
            <group position={[199.634, 566.883, -221.001]} rotation={[-Math.PI / 2, 0, 0]} scale={39.706}>
              <mesh geometry={nodes.Sphere007_Material001_0.geometry} material={materials['Material.001']} />
              <mesh geometry={nodes.Sphere007_Material002_0.geometry} material={materials['Material.002']} />
            </group>
            <mesh geometry={nodes.particles_Material002_0.geometry} material={materials['Material.002']} position={[489.69, 793.811, 355.293]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={20.408} />
            <mesh geometry={nodes.Sphere_Material001_0.geometry} material={materials['Material.001']} position={[375.469, 427.948, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={62.402} />

            <group
              onClick={() => routes.push('/projects')}
            >
              {
                viewPlanet &&
                <Html position={[375.496, 427.948, 0]}>
                  <div className="bg-white shadow p-2">
                    <h2 className="text-black text-sm uppercase">Projects</h2>
                  </div>
                </Html>
              }
              <motion.mesh 
                geometry={nodes.Sphere001_Material002_0.geometry} 
                material={materials['Material.002']} 
                position={[375.469, 427.948, 0]} 
                rotation={[-Math.PI / 2, 0, 0]} 
                scale={60.324}
              />
            </group>

            <mesh geometry={nodes.Sphere004_Material002_0.geometry} material={materials['Material.002']} position={[375.469, 427.948, 0]} rotation={[-0.688, 0, 0]} scale={[104.129, 81.609, 0]} />
            <mesh geometry={nodes.Sphere005_Material001_0.geometry} material={materials['Material.001']} position={[-341.988, 460.196, -117.028]} rotation={[-Math.PI / 2, 0, 0]} scale={62.402} />
            <mesh geometry={nodes.Sphere006_Material002_0.geometry} material={materials['Material.002']} position={[-341.988, 460.196, -117.028]} rotation={[-Math.PI / 2, 0, 0]} scale={60.324} />
            <mesh geometry={nodes.Sphere009_Material002_0.geometry} material={materials['Material.002']} position={[507.522, 667.594, -214.475]} rotation={[-Math.PI / 2, 0, 0]} scale={16.881} />
            <mesh geometry={nodes.Sphere010_Material002_0.geometry} material={materials['Material.002']} position={[-287.442, 585.792, -311.857]} rotation={[-Math.PI / 2, 0, 0]} scale={16.881} />
            <mesh geometry={nodes.Sphere011_Material002_0.geometry} material={materials['Material.002']} position={[-553.462, 331.074, -379.067]} rotation={[-Math.PI / 2, 0, 0]} scale={11.437} />
            <mesh geometry={nodes.Sphere003_Material002_0.geometry} material={materials['Material.002']} position={[-357.404, 392.646, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={41.075} />
            <mesh geometry={nodes.Sphere008_Material002_0.geometry} material={materials['Material.002']} position={[199.634, 566.883, -221.001]} rotation={[-Math.PI / 2, 0, 0]} scale={41.075} />
          </group>

        </motion.group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
