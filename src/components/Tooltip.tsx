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
      console.log(e.clientY)
      setMouseY(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMovement)
  }, [])

  return (
    <motion.div 
      className={`w-full fixed`}
      animate={{y: mouseY}}
    >
      <h2 className="border-b text-5xl">{data.title}</h2>
      <p className="text-sm pt-2">{data.date}</p>
    </motion.div>
  )
}

export default Tooltip
