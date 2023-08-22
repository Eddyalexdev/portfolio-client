"use client"

import { useEffect } from "react"
import {motion, useSpring} from 'framer-motion'

interface TooltipProps {
  data: {
    title: string,
    date: string
  }
}

const Tooltip = ({data}: TooltipProps) => {
  const y = useSpring(0)

  useEffect(() => {
    const handleMouseMovement = (e: any) => {
      y.set(e.pageY - 480)
    }

    window.addEventListener('mousemove', handleMouseMovement)

    return () => {
      window.removeEventListener('mousemove', handleMouseMovement)
    }
  }, [])

  return (
    <motion.div 
      className={`absolute left-0 w-full overflow-hidden`}
      style={{y}}
    >
      <motion.h2 
        className="text-5xl text-white p-2 w-full pl-4"
      >
          {data?.title}
      </motion.h2>
      <div className="bg-white w-full h-[1px]"></div>
      <p className="text-m p-2 pl-4 text-white">{data?.date}</p>
    </motion.div>
  )
}

export default Tooltip
