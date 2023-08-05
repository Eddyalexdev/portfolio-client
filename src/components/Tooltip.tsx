"use client"

import { useEffect, useState } from "react"
import {motion} from 'framer-motion'

interface TooltipProps {
  data: {
    title: string,
    date: string
  }
}

const Tooltip = ({data}: TooltipProps) => {
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const handleMouseMovement = (e: any) => {
      setMouseY(e.pageY)
    }

    window.addEventListener('mousemove', handleMouseMovement)

    return () => {
      window.removeEventListener('mousemove', handleMouseMovement)
    }
  }, [])

  return (
    <motion.div 
      className={`w-full fixed h-auto`}
      animate={{y: mouseY}}
      transition={{type: "tween", duration: 0.3}}
    >
      <h2 className="border-b text-5xl text-white p-2">{data.title}</h2>
      <p className="text-m p-2 text-white">{data.date}</p>
    </motion.div>
  )
}

export default Tooltip
