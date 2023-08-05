"use client"

import { CameraControls, OrbitControls, PerspectiveCamera, ScrollControls } from "@react-three/drei"
import { LayoutCamera, MotionCanvas } from 'framer-motion-3d'
import { Canvas } from "@react-three/fiber"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Vector3 } from "three"

interface CanvasContainerProps {
  children: React.ReactNode,
}

const cameraPositions = {
  about: {
    position: new Vector3(4, 4, 6),
    fov: 55 
  }
}

const CanvasContainer = ({children}: CanvasContainerProps) => {
  const pathname  = usePathname()
  //5, 10, 11
  const [cameraPosition, setCameraPostion] = useState(new Vector3(0, 0, 0))
  const [cameraFov, setCameraFov] = useState(0)
  
  useEffect(() => {
    switch(pathname) {
      case "/about":
        setCameraPostion(cameraPositions.about.position)
        setCameraFov(cameraPositions.about.fov)
        break
      default:
        setCameraFov(55)
        setCameraPostion(new Vector3(5, 10, 11))
        break
    }
  }, [pathname])

  return (
    <>
      <Canvas camera={{position: cameraPosition, fov: cameraFov}}>
        <OrbitControls enableRotate={true} enableZoom={true} enableDamping={true} enablePan={true}/>
        {children}
      </Canvas>
    </>
  )
}

export default CanvasContainer
