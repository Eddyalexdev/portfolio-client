"use client"

import { useState } from "react"
import { Project } from "@/components"
import Tooltip from "@/components/Tooltip"
import useConsult from "@/hooks/useConsult"
import { getProjects } from "@/services/projects"

const Projects = () => {
  const [projectInfo, setProjectInfo] = useState({title: '', date: ''})
  const {loading, data} = useConsult({consult: getProjects})

  console.log(data)
  return (
    <>
      <section className="relative grid place-items-center w-full h-screen overflow-auto">
        <div className="relative w-[80%] h-[80%] overflow-auto max-md:w-full">
          <div className="w-full h-full bg-black lack z-0 absolute opacity-[.7] border boder-white"></div>
          <Tooltip data={projectInfo}/>
          <ul className="w-full grid gap-2 relative z-10 place-items-center h-full">
            {
              loading ?
                <div>Loading...</div>
                :
                data.map((project: any) => <Project key={project._id} setData={setProjectInfo} />)
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default Projects
