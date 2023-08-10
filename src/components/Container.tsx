import Model3D from "@/components/Model3D";
import { Cursor } from ".";

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <>
      <Cursor />
      <main className="relative w-full">
        <div className="w-full h-full min-h-screen absolute z-[0]">
          <Model3D />
        </div>
        {children}
      </main>
    </>
  )
}

export default Container
