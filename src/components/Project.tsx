"use client"

import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react"
import {motion} from 'framer-motion'

interface ProjectProps {
  setData: Dispatch<SetStateAction<{title: string, date: string}>>,
  title: string,
  date: string,
  image: string,
  images: string[]
}

const Project = ({setData, title, date, image, images}: ProjectProps) => {
  const [hover, setHover] = useState(false)

  const handleHover = () => {
    setHover(true)
    setData({
      title: title,
      date: date 
    })
  }

  const variants = {
    center: {
      rotate: 0,
      x: 0
    },
    right: {
      rotate: -10,
      x: -30
    },
    left: {
      rotate: 10,
      x: 30
    },
  }

  return (
    <li onMouseEnter={handleHover} onMouseLeave={() => setHover(false)} className="w-full relative z-[100]">
      <Link href="/projects/100">
        <div className="w-full flex items-end justify-end pr-20">
          <div className="relative grid place-items-center">
            <motion.img 
              className={`max-w-xs ${hover ? 'saturate-100' : 'saturate-0'} transition-all relative z-10`} 
              src={image}
              alt="" 
              layoutId={image}
            />
            {
              images &&
              images.map((image: string) => (
                <motion.img 
                  variants={variants}
                  animate={!hover ? 'center':'right'}
                  className={`max-w-xs transition-all absolute`} 
                  src={image}
                  alt="" 
                />
              ))
            }
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Project
