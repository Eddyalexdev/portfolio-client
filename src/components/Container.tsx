import dynamic from "next/dynamic"
import Language from "./Language"
import Navigation from "./Navigation"

const Model3D = dynamic(() => import('@/components/Model3D'), {loading: () => <p className="text-white">Loading...</p>})

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {

  return (
    <Language>
      <main className="relative w-full">
        <div className="w-full h-full min-h-screen absolute z-[0] max-md:py-20">
          <Model3D />
        </div>
        <section className="w-full h-full grid place-items-center fixed justify-end pr-10">
          <Navigation />
        </section>
        <section className="max-md:px-5">
          {children}
        </section>
      </main>
    </Language>
  )
}

export default Container
