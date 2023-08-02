"use client"

import { Dispatch, SetStateAction, useState } from "react"

interface ProjectProps {
  setData: Dispatch<SetStateAction<{title: string, date: string}>>
}

const Project = ({setData}: ProjectProps) => {
  const [hover, setHover] = useState(false)

  const handleHover = () => {
    setHover(true)
    setData({
      title: 'hola 2',
      date: '2020-23'
    })
  }

  return (
    <li onMouseEnter={handleHover} onMouseLeave={() => setHover(false)} className="w-full relative z-[100]">
      <div className="w-full flex items-end justify-end pr-10">
        <img className={`max-w-sm ${hover ? 'saturate-100' : 'saturate-0'} transition-all`} src="https://cdn.pixabay.com/photo/2023/03/21/12/21/anime-wallpaper-7867145_640.jpg" alt="" />
      </div>
    </li>
  )
}

export default Project
