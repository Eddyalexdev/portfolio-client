"use client"
import {motion} from 'framer-motion'

const Loading = () => {
  return (
    <motion.div className="w-full h-[5px] relative top-0 left-0 bg-black">
      <motion.div initial={{x: -100}} animate={{x: 0}} exit={{x: -100}} transition={{type: Infinity}} className='w-[20px] h-full bg-white absolute left-0 top-0' />
    </motion.div>
  )
}

export default Loading
