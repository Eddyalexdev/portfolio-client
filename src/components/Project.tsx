"use client"

import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react"
import {motion} from 'framer-motion'

interface ProjectProps {
  setData: Dispatch<SetStateAction<{title: string, date: string}>>,
  title: string,
  date: string,
  images: string[],
  setColor: Dispatch<SetStateAction<string>>,
  color: string,
  id: string
}

const Project = ({setData, title, date, images, setColor, color, id}: ProjectProps) => {
  const [hover, setHover] = useState(false)

  const handleHover = () => {
    setHover(true)
    setData({
      title: title,
      date: date 
    })
    setColor(color)
  }

  const handleLeave = () => {
    setHover(false)
    setColor('#000000')
  }

  const variants = {
    center: {
      y: 0,
    },
    right: {
      y: -40
    },
    left: {
      y: -20
    },
  }

  return (
    <li onMouseEnter={handleHover} onMouseLeave={handleLeave} className="w-full relative z-[100]">
      <Link href={`/projects/${id}`}>
        <div className="w-full flex items-end justify-end pr-20">
          <div className="relative grid place-items-center">
            {
              images &&
              images.map((image: string, index: number) => {
                switch (index) {
                  case 0:
                    return <motion.img variants={variants} className={`max-h-[200px] object-cover max-w-xs transition-all ${hover ? 'saturate-100':'saturate-0'} relative z-10`} layoutId={image} src={image} alt="" />
                  case 1:
                    return <motion.img variants={variants} animate={!hover ? 'center':'left'} className={`max-h-[200px] object-cover max-w-xs transition-all ${hover ? 'saturate-100':'saturate-0'} absolute`} layoutId={image} src={image} alt="" />
                  case 2:
                    return <motion.img variants={variants} animate={!hover ? 'center':'right'} className={`max-h-[200px] object-cover max-w-xs transition-all ${hover ? 'saturate-100':'saturate-0'} absolute`} layoutId={image} src={image} alt="" />
                  default:
                    return
              }})
            }
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Project
