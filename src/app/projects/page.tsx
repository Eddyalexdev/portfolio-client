"use client"

import { useState } from "react"
import { Project } from "@/components"
import Tooltip from "@/components/Tooltip"

const Projects = () => {
  const [data, setData] = useState({title: '', date: ''})

  return (
    <>
      <section className="relative grid place-items-center h-screen overflow-auto">
        <div className="relative w-[80%] h-[80%] overflow-auto">
          <div className="w-full h-full bg-black lack z-0 absolute opacity-[.7] border boder-white"></div>
          <Tooltip data={data}/>
          <ul className="w-full grid gap-2 relative z-10 place-items-center h-full">
            <Project setData={setData} />
            <Project setData={setData} />
            <Project setData={setData} />
          </ul>
        </div>
      </section>
    </>
  )
}

export default Projects
