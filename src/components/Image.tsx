"use client"
import { useRef, useState } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { BsCardImage } from 'react-icons/bs'

const Image = ({image}: {image: string}) => {
  const [imageCharged, setImageCharged] = useState(false) 
  const ref = useRef(null)
  const {scrollXProgress} = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  })

  const scale = useTransform(scrollXProgress, [0, .5, 1], [1, 2, 1])

  return (
    <motion.div className="min-w-[450px] h-[350px] left-0 top-0 relative z-10">
      {
        !imageCharged &&
        <div className="w-full h-full bg-gray-50 text-bg-gray-50 grid place-items-center">
          <BsCardImage color="grey" />
        </div>
      }

      <motion.img 
        ref={ref}
        style={{scale}}
        animate={{opacity: imageCharged ? 1:0}}
        className="w-full h-full object-cover"
        onLoad={() => setImageCharged(true)}
        src={image}
        alt="" 
        loading="lazy"
      />
    </motion.div>
  )
}

export default Image
