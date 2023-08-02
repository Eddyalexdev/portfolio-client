import CanvasContainer from "./CanvasContainer"

const Model3D = () => {
  return (
    <CanvasContainer>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>
    </CanvasContainer>
  )
}

export default Model3D
