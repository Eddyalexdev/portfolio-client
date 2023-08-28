"use client"
import { useEffect, useRef, useState } from 'react'
import {motion, useMotionValue} from 'framer-motion'
import { BsCardImage } from 'react-icons/bs'

interface Props {
  image: string,
  id: number,
  index: number
}

const Image = ({image, id, index}: Props) => {
  const [imageCharged, setImageCharged] = useState(false) 
  const ref = useRef(null)

  return (
    <motion.div className="min-w-[550px] max-h-[550px] left-0 top-0 relative">
      {
        !imageCharged &&
        <div className="w-full h-full bg-gray-50 text-bg-gray-50 grid place-items-center absolute">
          <BsCardImage color="grey" />
        </div>
      }

      <motion.img 
        ref={ref}
        animate={{opacity: imageCharged ? 1:.2}}
        className="w-full h-full object-contain relative z-20"
        onLoad={() => setImageCharged(true)}
        src={image}
        alt="" 
        loading="lazy"
      />
    </motion.div>
  )
}

export default Image
