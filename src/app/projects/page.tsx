"use client"

import useConsult from "@/hooks/useConsult"
import { getProjects } from "@/services/projects"
import { Projects as AllProjects } from "@/components"

const Projects = () => {
  const {loading, data} = useConsult({consult: getProjects()})

  return (
    <>
      <section className="relative grid place-items-center w-full h-screen overflow-auto">
        <div className="relative w-[80%] h-[80%] overflow-auto max-md:w-full">
          <div className="w-full h-full bg-black lack z-0 absolute opacity-[.7] border border-white"></div>
          <AllProjects loading={loading} data={data} />
        </div>
      </section>
    </>
  )
}

export default Projects
