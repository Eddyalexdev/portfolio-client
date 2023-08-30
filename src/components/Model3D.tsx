"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { SpaceModel } from "@/components/SpaceModel"

const Model3D = () => {
  return (
    <Canvas camera={{position: [5, 10, 11], fov: 60}}>
      <Stars count={800} fade={true} />
      <Suspense fallback={null}>
        <SpaceModel />
      </Suspense>
    </Canvas>
  )
}

export default Model3D
