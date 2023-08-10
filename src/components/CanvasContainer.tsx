import { OrbitControls, Stars } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import { MotionCanvas } from "framer-motion-3d"

interface CanvasContainerProps {
  children: React.ReactNode,
}

const CanvasContainer = ({children}: CanvasContainerProps) => {
  return (
    <>
      <Canvas>
        <OrbitControls enableRotate={false} enableZoom={false} enableDamping={false} enablePan={false}/>
        <Stars count={1000} fade={true} />
        {children}
      </Canvas>
    </>
  )
}

export default CanvasContainer
