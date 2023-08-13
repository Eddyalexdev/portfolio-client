"use client"

import { useState } from "react"
import { Project } from "@/components"
import Tooltip from "@/components/Tooltip"
import useConsult from "@/hooks/useConsult"
import { getProjects } from "@/services/projects"
import {motion} from 'framer-motion'

const Projects = () => {
  const [projectInfo, setProjectInfo] = useState({title: "", date: ""})
  const {loading, data} = useConsult({consult: getProjects()})
  const [color, setColor] = useState('')

  return (
    <>
      <section className="relative grid place-items-center w-full h-screen overflow-auto">
        <div className="relative w-[60%] h-[80%] overflow-auto max-md:w-full">
          <motion.div initial={{opacity: 0}} animate={{opacity: .4, background: color}} className={`opacity-[.4] absolute -inset-0.5 blur-md`}></motion.div>
          <div className="w-full h-full bg-black lack z-0 absolute opacity-[.7] border boder-white"></div>
          <Tooltip data={projectInfo}/>
          <ul className="w-full grid gap-2 relative z-10 place-items-center h-full">
            {
              data &&
              data.map((project: any) => <Project id={project._id} color={project.color} setColor={setColor} key={project._id} setData={setProjectInfo} title={project.title} date={project.date} images={project.images} />)
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default Projects
