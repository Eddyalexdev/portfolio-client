"use client"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import {motion, useMotionValue} from 'framer-motion'
import { BsCardImage } from 'react-icons/bs'

interface Props {
  image: string,
  setFullImage: Dispatch<SetStateAction<string>>,
  fullImage: string
}

const Image = ({image, setFullImage, fullImage}: Props) => {
  const [imageCharged, setImageCharged] = useState(false) 
  const ref = useRef(null)

  return (
    <motion.div onMouseEnter={() => setFullImage(image)} className="min-w-[350px] h-full left-0 top-0 relative p-2">
      {
        !imageCharged &&
        <div className="w-full h-full bg-gray-50 text-bg-gray-50 grid place-items-center absolute">
          <BsCardImage color="grey" />
        </div>
      }

      <motion.div className="w-full h-full bg-black grid place-items-center absolute" />

      <motion.img 
        ref={ref}
        animate={{opacity: imageCharged ? 1:.2}}
        className={`w-full h-full object-contain relative z-20 transition-all ${fullImage === image ? 'brightness-[.2]' : 'brightness-100'}`}
        onLoad={() => setImageCharged(true)}
        src={image}
        alt="" 
        loading="lazy"
      />
    </motion.div>
  )
}

export default Image
