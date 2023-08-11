import { Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

interface CanvasContainerProps {
  children: React.ReactNode,
}

const CanvasContainer = ({children}: CanvasContainerProps) => {
  return (
    <>
      <Canvas>
        <Stars count={1000} fade={true} />
        {children}
      </Canvas>
    </>
  )
}

export default CanvasContainer
