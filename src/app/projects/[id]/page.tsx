"use client"
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
    <>
      <section className="h-screen grid place-items-center w-full relative">
        <div className="border border-white">
          <motion.img 
            className="object-cover" src="https://cdn.pixabay.com/photo/2023/03/21/12/21/anime-wallpaper-7867145_640.jpg" 
            alt="" 
            layoutId={"https://cdn.pixabay.com/photo/2023/03/21/12/21/anime-wallpaper-7867145_640.jpg"}
          />
          <h2 className="text-white">Titulo del proyecto</h2>
        </div>
      </section>
    </>
  )
}

export default SingleProject
