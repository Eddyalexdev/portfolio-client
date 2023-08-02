"use client"

import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

interface CanvasContainerProps {
  children: React.ReactNode
}

const CanvasContainer = ({children}: CanvasContainerProps) => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={20} />
      <OrbitControls />
      <Environment preset="sunset" />
      <ambientLight />
      {children}
    </Canvas>
  )
}

export default CanvasContainer
