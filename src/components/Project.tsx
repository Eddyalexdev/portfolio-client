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
      y: -30,
      rotateZ: 20,
      x: 40,
      transition: {
        delay: .4
      }
    },
    left: {
      y: -30,
      x: -30,
      rotateZ: -20,
      transition: {
        delay: .2
      }
    },
  }

  return (
    <>
      <li onMouseEnter={handleHover} onMouseLeave={handleLeave} className="w-full relative z-[100]">
        <Link href={`/projects/${id}`}>
          <div className="w-full flex items-end justify-end pr-20">
            <div className="relative grid place-items-center">
              {
                images &&
                images.map((image: string, index: number) => {
                  switch (index) {
                    case 0:
                      return <motion.img key={image} whileHover={{scale: 1.2}} variants={variants} className={`shadow max-h-[200px] h-full object-cover max-w-xs transition-all relative z-10`} src={image} alt="" />
                    case 1:
                      return <motion.img key={image} whileHover={{scale: 1.2}} variants={variants} animate={!hover ? 'center':'left'} className={`shadow max-h-[200px] h-full object-cover max-w-xs transition-all absolute`} src={image} alt="" />
                    case 2:
                      return <motion.img key={image} whileHover={{scale: 1.2}} variants={variants} animate={!hover ? 'center':'right'} className={`shadow max-h-[200px] h-full object-cover max-w-xs transition-all absolute`} src={image} alt="" />
                    default:
                      return
                }})
              }
            </div>
          </div>
        </Link>
      </li>
    </>
  )
}

export default Project
