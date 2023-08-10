"use client"

import { Suspense } from "react"
import { SpaceModel } from "./SpaceModel"
import CanvasContainer from "./CanvasContainer"
import { Preload } from "@react-three/drei"

const Model3D = () => {
  return (
    <CanvasContainer>
      <Suspense fallback={null}>
        <SpaceModel />
      </Suspense>
      <Preload all />
    </CanvasContainer>
  )
}

export default Model3D
