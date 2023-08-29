"use client"

import useConsult from "@/hooks/useConsult"
import { getProjects } from "@/services/projects"
import { Projects as AllProjects } from "@/components"
import { useRouter } from "next/navigation"
import MouseAnimated from "@/components/MouseAnimated"

const Projects = () => {
  const {loading, data} = useConsult({consult: getProjects()})
  const router = useRouter()

  const handleChangePage = (e: any) => {
    if(e.deltaY < 0) {
      router.push('/about')
    }
  }

  return (
    <>
      <section onWheel={handleChangePage} className="relative grid place-items-center w-full h-screen">
        <div className="relative w-[80%] overflow-hidden h-[80%] max-md:w-full">
          <div className="w-full h-full bg-black lack z-0 absolute opacity-[.7] border border-white"></div>
          <div className="pt-4">
            <MouseAnimated textRight="about" />
          </div>
          <AllProjects loading={loading} data={data} />
        </div>
      </section>
    </>
  )
}

export default Projects
