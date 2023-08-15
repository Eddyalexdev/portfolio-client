"use client"
import { useState } from 'react'
import {motion} from 'framer-motion'

const Image = ({image}: {image: string}) => {
  const [imageCharged, setImageCharged] = useState(false) 

  return <motion.img 
    animate={{opacity: imageCharged ? 1:.2}}
    className="object-cover w-full h-full"
    onLoad={() => setImageCharged(true)}
    src={image}
    alt="" 
    layoutId={image}
    loading="lazy"
  />
}

export default Image
