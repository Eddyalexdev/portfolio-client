"use client"
import {motion} from 'framer-motion'

const Loading = () => {
  return (
    <motion.div className="w-full h-[4px] relative top-0 left-0 bg-black">
      <motion.div initial={{left: 0}} animate={{left: '100%'}} transition={{repeat: Infinity}} className='w-[50px] h-full bg-white absolute left-0 top-0' />
    </motion.div>
  )
}

export default Loading
