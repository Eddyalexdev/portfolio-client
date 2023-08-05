"use client"
import ScrollContainer from '@/components/ScrollContainer'
import {motion, useScroll, useSpring} from 'framer-motion'
import { useRef } from 'react'

const SingleProject = () => {
  const ref = useRef(null)
  const {scrollXProgress} = useScroll({container: ref})

  const scaleY = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <ScrollContainer ref={ref}>
      <div className="w-full">
        <div className="w-full bg-red h-[2px] bg-white relative">
          <motion.div 
            className={`h-full w-full bg-black absolute left-0 top-0`}
            style={{scaleY}}
          />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <motion.img 
          className="w-full h-[400px] object-cover" src="https://cdn.pixabay.com/photo/2023/03/21/12/21/anime-wallpaper-7867145_640.jpg" 
          alt="" 
          layoutId={"https://cdn.pixabay.com/photo/2023/03/21/12/21/anime-wallpaper-7867145_640.jpg"}
        />
      </div>
    </ScrollContainer>
  )
}

export default SingleProject
