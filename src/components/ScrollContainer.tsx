"use client"
import {motion} from 'framer-motion'

interface ScrollContainerProps {
  children: React.ReactNode,
  ref:  any
}

const ScrollContainer = ({children, ref}: ScrollContainerProps) => {
  return (
    <motion.main 
      className="col-span-9 bg-black"
      ref={ref}
    >
      {children}
    </motion.main>
  )
}

export default ScrollContainer
