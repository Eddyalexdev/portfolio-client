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
        delay: .4,
        duration: .2,
        ease: 'linear'
      }
    },
    left: {
      y: -30,
      x: -30,
      rotateZ: -20,
      transition: {
        delay: .2,
        duration: .2,
        ease: 'linear'
      }
    },
  }

  return (
    <>
      <li onMouseEnter={handleHover} onMouseLeave={handleLeave} className="w-full relative z-[100]">
        <Link href={`/projects/${id}`}>
          <div className="w-full flex lg:items-end lg:justify-end lg:pr-20 max-lg:items-center max-lg:gap-2 max-lg:pl-5">
            <div className="relative grid lg:place-items-center">
              {
                images &&
                images.map((image: string, index: number) => {
                  switch (index) {
                    case 0:
                      return <motion.img key={image} whileHover={{scale: 1.2}} variants={variants} className={`shadow max-lg:h-[150px] lg:max-h-[200px] h-full object-cover max-w-xs transition-all relative z-10`} src={image} alt="" />
                    case 1:
                      return <motion.img key={image} whileHover={{scale: 1.2}} variants={variants} animate={!hover ? 'center':'left'} className={`max-lg:hidden shadow max-h-[200px] h-full object-cover max-w-xs transition-all absolute`} src={image} alt="" />
                    case 2:
                      return <motion.img key={image} whileHover={{scale: 1.2}} variants={variants} animate={!hover ? 'center':'right'} className={`max-lg:hidden shadow max-h-[200px] h-full object-cover max-w-xs transition-all absolute`} src={image} alt="" />
                    default:
                      return
                }})
              }
            </div>
            <div className="flex flex-col p-2 lg:hidden">
              <h3 className="text-white text-xl font-bold">{title}</h3>
              <span className="text-white">{date}</span>
            </div>
          </div>
        </Link>
      </li>
    </>
  )
}

export default Project
