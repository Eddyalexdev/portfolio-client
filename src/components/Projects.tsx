"use client"

import { Loading, Project } from "@/components"
import Tooltip from "@/components/Tooltip"
import {motion} from 'framer-motion'
import { useState } from "react"


interface ProjectsProps {
  data: any[],
  loading?: boolean
}

const Projects = ({data, loading}: ProjectsProps) => {
  const [projectInfo, setProjectInfo] = useState({title: "", date: ""})
  const [color, setColor] = useState('')

  return (
    <>
      <motion.div initial={{opacity: 0}} style={{background: '#000000'}} animate={{opacity: .3}} className={`absolute -inset-0.5`}></motion.div>
      {
        loading ?
          <div className='relative z-10 w-full h-full grid place-items-center'>
            <Loading />
          </div>
          :
          <div className="w-full max-h-[80vh] overflow-auto py-10 pb-20">
            <Tooltip data={projectInfo}/>
              <ul className="w-full grid gap-20 relative z-10 place-items-center h-full">
                {
                  data &&
                  data.map((project: any) => <Project id={project._id} color={project.color} setColor={setColor} key={project._id} setData={setProjectInfo} title={project.title} date={project.date} images={project.images} />)
                }
              </ul>
          </div>
      }
    </>
  )
}

export default Projects
