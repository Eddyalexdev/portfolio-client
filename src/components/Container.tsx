import Model3D from "@/components/Model3D";
import { Cursor } from ".";

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <>
      <Cursor />
      <main className="relative bg-black w-full">
        <div className="w-full h-full absolute z-[0]">
          <Model3D />
        </div>
        {children}
      </main>
    </>
  )
}

export default Container
