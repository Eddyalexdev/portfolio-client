import { Suspense } from "react"
import { SpaceModel } from "./SpaceModel"
import CanvasContainer from "./CanvasContainer"

const Model3D = () => {
  return (
    <CanvasContainer >
      <Suspense fallback={null}>
        <SpaceModel />
      </Suspense>
    </CanvasContainer>
  )
}

export default Model3D
