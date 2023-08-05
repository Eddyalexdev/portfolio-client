"use client"

import {motion} from 'framer-motion'
import { BsArrowDown, BsMouse } from 'react-icons/bs'

const MouseAnimated = () => {
  return (
    <div className="absolute text-white z-10 bottom-10 mx-auto w-full text-xl flex justify-center gap-1">
      <BsMouse />
      <motion.span
        initial={{y: -5}}
        animate={{y: 10}}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <BsArrowDown size={14} />
      </motion.span>
    </div>
  )
}

export default MouseAnimated 
