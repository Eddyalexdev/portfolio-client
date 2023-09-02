"use client"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import {motion, useMotionValue} from 'framer-motion'
import Img from 'next/image'
import { AiFillFileImage } from 'react-icons/ai'

interface Props {
  image: string,
  setFullImage: Dispatch<SetStateAction<string>>,
  fullImage: string
}

const Image = ({image, setFullImage, fullImage}: Props) => {
  const [imageCharged, setImageCharged] = useState(false) 
  const ref = useRef(null)

  const handleChangeImage = () =>{
    setFullImage(image)
  }

  return (
    <motion.div onMouseEnter={handleChangeImage} className="min-w-[350px] h-full left-0 top-0 relative p-2">
      {
        !imageCharged &&
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{repeat: Infinity, duration: 1, repeatType: "reverse"}} className="bg-gray-100 w-full h-full absolute lef-0 top-0 z-20 text-gray-400 text-3xl grid place-items-center">
          <AiFillFileImage />
        </motion.div>
      }

      <motion.div className="w-full h-full bg-black grid place-items-center absolute" />

      <Img
        ref={ref}
        className={`w-full h-full object-contain relative z-20 transition-all ${fullImage === image ? 'brightness-[.2]' : 'brightness-100'}`}
        onLoadingComplete={() => setImageCharged(true)}
        src={image}
        alt="" 
        loading="lazy"
        quality={80}
        width={300}
        height={300}
      />
    </motion.div>
  )
}

export default Image
