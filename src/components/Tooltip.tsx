"use client"

import { useEffect, useState } from "react"
import {motion, useMotionValue, useSpring} from 'framer-motion'

interface TooltipProps {
  data: {
    title: string,
    date: string
  }
}

const Tooltip = ({data}: TooltipProps) => {
  const y = useMotionValue(0)

  useEffect(() => {
    const handleMouseMovement = (e: any) => {
      y.set(e.pageY - 150)
    }

    window.addEventListener('mousemove', handleMouseMovement)

    return () => {
      window.removeEventListener('mousemove', handleMouseMovement)
    }
  }, [])

  return (
    <motion.div 
      className={`absolute left-0 w-full`}
      style={{y}}
    >
      <h2 className="border-b text-5xl text-white p-2">{data.title}</h2>
      <p className="text-m p-2 text-white">{data.date}</p>
    </motion.div>
  )
}

export default Tooltip
