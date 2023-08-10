"use client"
import {motion} from 'framer-motion'

interface ScrollContainerProps {
  children: React.ReactNode,
  ref:  any
}

const ScrollContainer = ({children, ref}: ScrollContainerProps) => {
  return (
    <motion.main 
      className="col-span-9 bg-white min-h-screen"
      ref={ref}
    >
      {children}
    </motion.main>
  )
}

export default ScrollContainer
