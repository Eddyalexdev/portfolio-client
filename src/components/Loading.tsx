"use client"
import {motion} from 'framer-motion'

const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="rounded-full grid place-items-center relative z-10">
        <div className="bg-black w-[25px] h-[25px] absolute z-10 rounded-full" />
        <div className="absolute bg-white w-[35px] h-[35px] rounded-full z-[-1]" />
        <motion.span 
          initial={{rotate: 0}} 
          animate={{rotate: '360deg'}} 
          transition={{repeat: Infinity, type: "tween", duration: 2}} 
          className="bg-black w-[10px] h-[35px] absolute"
        ></motion.span>
      </div>
      <span className="text-white">Loading...</span>
    </div>
  )
}

export default Loading
