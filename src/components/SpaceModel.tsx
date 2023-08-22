"use client"

import React, { useRef, useState } from 'react'
import { PerspectiveCamera, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { usePathname, useRouter } from 'next/navigation'
import { Vector3 } from 'three'
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery'

export function SpaceModel(props: any) {
  const { nodes, materials } = useGLTF('/scene.gltf') as any
  const [scale, setScale] = useState(100)
  const [isHover, setIsHover] = useState(false)
  const ref = useRef() as any;
  const projectsRef = useRef() as any;
  const cameraRef = useRef() as any;
  const aboutRef = useRef() as any;
  const planetRef = useRef() as any;
  const sphereRef = useRef() as any;
  const refWaves = useRef() as any;
  const router = useRouter()
  const pathname = usePathname()

  const isMobile = useMediaQuery('(max-width:750px)')

  useFrame((state) => {
    ref.current.rotation.y += 0.001
    refWaves.current.rotation.z -= 0.0005

    if(isHover !== true) {
      projectsRef.current.rotation.y += 0.001
    }  

    if(pathname.includes('/projects')) {
      state.camera.lookAt(new Vector3(aboutRef.current.position.x, aboutRef.current.position.y + 2, aboutRef.current.position.z))
      state.camera.position.lerp(new Vector3(aboutRef.current.position.x + 2, aboutRef.current.position.y + 30, aboutRef.current.position.z + 2), .1)
      state.camera.updateMatrix()
    }

    switch(pathname) {
      case "/about":
        state.camera.lookAt(new Vector3(aboutRef.current.position.x, aboutRef.current.position.y + 2, aboutRef.current.position.z))
        state.camera.position.lerp(new Vector3(aboutRef.current.position.x + 2, aboutRef.current.position.y + 4, aboutRef.current.position.z + 4), .1)
        state.camera.updateMatrix()
        break
      default:
        state.camera.lookAt(new Vector3(0, 0, 0))
        state.camera.position.lerp(new Vector3(5, 10, 11),.1)
        state.camera.updateMatrix()
        break
    }

    if(isHover) {
      planetRef.current.rotation.z += 0.006
      planetRef.current.rotation.x += 0.006
    }
    return null
  })

  return (
    <>
      <PerspectiveCamera 
        ref={cameraRef} 
        makeDefault
        position={[5, 10, 11]}
        fov={65} 
      />
      <group>
        <group scale={0.01}>
          <motion.group 
            whileHover={{ scale: 110}}
            rotation={[-Math.PI / 2, 0, 0]} 
            scale={scale}
            ref={aboutRef}
            onClick={() => router.push('/about')}
          >
            <motion.group animate={{scale: pathname === '/about' && isMobile ?  .6 : 1 ,x: pathname === '/about' && !isMobile ? -2: isMobile && pathname ==='/about' ? .6:0, rotateZ: pathname === '/about' && !isMobile ? .5 : 0, y: pathname === '/about' ? -1.5 : 0, z: pathname === '/about' && isMobile ? 2 : 0}} >
              <mesh geometry={nodes.body_Material001_0.geometry} material={materials['Material.001']} />
              <mesh geometry={nodes.body_Material002_0.geometry} material={materials['Material.002']} />
            </motion.group>
          </motion.group>

          <motion.group transition={{type: "spring"}}>
            <motion.group animate={{y: pathname === '/about' ? 2000:0}}>
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
            </motion.group>

            <motion.mesh 
              initial={{y: 0}}
              animate={{y: pathname === '/about' ? -2000 : 0}}
              ref={refWaves} 
              geometry={nodes.waves_Material002_0.geometry} 
              material={materials['Material.002']} 
              rotation={[-Math.PI / 2, 0, 0]} 
              scale={[100, 100, 1.891]} 
            />
            <motion.group
              initial={{y: 0}}
              animate={{y: pathname === '/about' ? 2000 : 0}}
              ref={ref}
            >
              <group position={[-357.404, 392.646, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={39.706}>
                <mesh geometry={nodes.Sphere002_Material001_0.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Sphere002_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <group position={[199.634, 566.883, -221.001]} rotation={[-Math.PI / 2, 0, 0]} scale={39.706}>
                <mesh geometry={nodes.Sphere007_Material001_0.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Sphere007_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <mesh geometry={nodes.particles_Material002_0.geometry} material={materials['Material.002']} position={[489.69, 793.811, 355.293]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={20.408} />
              <mesh geometry={nodes.Sphere005_Material001_0.geometry} material={materials['Material.001']} position={[-341.988, 460.196, -117.028]} rotation={[-Math.PI / 2, 0, 0]} scale={62.402} />
              <group>
                <mesh 
                  geometry={nodes.Sphere006_Material002_0.geometry} 
                  material={materials['Material.002']} 
                  position={[-341.988, 460.196, -117.028]} 
                  rotation={[-Math.PI / 2, 0, 0]} scale={60.324} 
                />
              </group>
              <mesh geometry={nodes.Sphere009_Material002_0.geometry} material={materials['Material.002']} position={[507.522, 667.594, -214.475]} rotation={[-Math.PI / 2, 0, 0]} scale={16.881} />
              <mesh geometry={nodes.Sphere010_Material002_0.geometry} material={materials['Material.002']} position={[-287.442, 585.792, -311.857]} rotation={[-Math.PI / 2, 0, 0]} scale={16.881} />
              <mesh geometry={nodes.Sphere011_Material002_0.geometry} material={materials['Material.002']} position={[-553.462, 331.074, -379.067]} rotation={[-Math.PI / 2, 0, 0]} scale={11.437} />
              <mesh geometry={nodes.Sphere003_Material002_0.geometry} material={materials['Material.002']} position={[-357.404, 392.646, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={41.075} />
              <mesh geometry={nodes.Sphere008_Material002_0.geometry} material={materials['Material.002']} position={[199.634, 566.883, -221.001]} rotation={[-Math.PI / 2, 0, 0]} scale={41.075} />
            </motion.group>

          </motion.group>
          <motion.group
            initial={{y: -150}}
            animate={{y: pathname === '/about' ? 2000:-150}}
            ref={projectsRef}
            onClick={() => router.push('/projects')}
            onPointerEnter={() => setIsHover(true)}
            onPointerLeave={() => setIsHover(false)}
            whileHover={{scale:1.05}}
            position={[0, -150, 0]}
          >
            <motion.group
            >
              <motion.mesh 
                ref={sphereRef}
                geometry={nodes.Sphere001_Material002_0.geometry} 
                material={materials['Material.002']} 
                position={[375.469, 427.948, 0]} 
                rotation={[-Math.PI / 2, 0, 0]} 
                scale={60.324}
              />
              <mesh geometry={nodes.Sphere_Material001_0.geometry} material={materials['Material.001']} position={[375.469, 427.948, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={62.402} />
              <mesh ref={planetRef} geometry={nodes.Sphere004_Material002_0.geometry} material={materials['Material.002']} position={[375.469, 427.948, 0]} rotation={[-0.688, 0, 0]} scale={[104.129, 81.609, 0]} />
            </motion.group>
          </motion.group>

        </group>
      </group>
    </>
  )
}

useGLTF.preload('/scene.gltf')
