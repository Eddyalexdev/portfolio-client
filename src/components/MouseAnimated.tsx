"use client"

import {motion} from 'framer-motion'
import { BsArrowDown, BsMouse } from 'react-icons/bs'

interface Props {
  text?: string,
  textRight?: string
}
const MouseAnimated = ({text, textRight}:Props) => {
  return (
    <div className="relative text-white z-10 mx-auto w-full text-xl flex justify-center">
      {
        textRight &&
        <motion.span
          initial={{y: -5}}
          animate={{y: 10}}
          transition={{ repeat: Infinity, duration: .5, repeatType: "reverse"}}
          className='flex items-center gap-2'
        >
          <BsArrowDown className="rotate-180" size={14} />
          <span className='text-white text-xs'>{textRight}</span>
        </motion.span>
      }
      <BsMouse className="mx-2" />
      {
        text &&
        <motion.span
          initial={{y: -5}}
          animate={{y: 10}}
          transition={{ repeat: Infinity, duration: .5, repeatType: "reverse"}}
          className='flex items-center gap-2'
        >
          <BsArrowDown size={14} />
          <span className='text-white text-xs'>{text}</span>
        </motion.span>
      }
    </div>
  )
}

export default MouseAnimated 
