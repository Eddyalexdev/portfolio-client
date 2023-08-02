"use client"

import { useState } from "react"
import { Project } from "@/components"
import Tooltip from "@/components/Tooltip"

const Projects = () => {
  const [data, setData] = useState({title: '', date: ''})

  return (
    <main className="col-span-9 relative">
      <Tooltip data={data}/>
      <ul className="w-full grid gap-2 place-items-center h-full">
        <Project setData={setData} />
        <Project setData={setData} />
        <Project setData={setData} />
        <Project setData={setData} />
        <Project setData={setData} />
        <Project setData={setData} />
        <Project setData={setData} />
      </ul>
    </main>
  )
}

export default Projects
