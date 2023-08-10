import { useRef } from "react"
import { PerspectiveCamera } from "@react-three/drei"

const Camera = () => {
  const cameraRef = useRef(null) as any

  return (
    <PerspectiveCamera ref={cameraRef} makeDefault position={[5, 10, 11]} fov={62} />
  )
}

export default Camera
