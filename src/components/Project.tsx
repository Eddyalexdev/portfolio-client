"use client"
import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react"
import {motion} from 'framer-motion'
import Image from "next/image"
import { AiFillFileImage } from "react-icons/ai"
import { Loading } from "."

interface ProjectProps {
  setData: Dispatch<SetStateAction<{title: string, date: string}>>,
  title: string,
  date: string,
  images: string[],
  setColor: Dispatch<SetStateAction<string>>,
  color: string,
  id: string
}

const Project = ({setData, title, date, images, setColor, color, id}: ProjectProps) => {
  const [hover, setHover] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  const handleHover = () => {
    setHover(true)
    setData({
      title: title,
      date: date 
    })
    setColor(color)
  }

  const handleLeave = () => {
    setHover(false)
    setColor('#000000')
  }

  return (
    <>
      <li onMouseEnter={handleHover} onMouseLeave={handleLeave} className="w-full relative z-[100]">
        <Link href={`/projects/${id}`}>
          <div className="w-full flex lg:items-end lg:justify-end lg:pr-20 max-lg:items-center max-lg:gap-2 max-lg:pl-5">
            <div className="relative grid lg:place-items-center">
              <div className="w-full h-[200px] overflow-hidden relative">
                {
                  !imgLoaded &&
                  <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{repeat: Infinity, duration: 1, repeatType: "reverse"}} className="bg-gray-100 w-full h-full absolute lef-0 top-0 z-20 text-gray-400 text-3xl grid place-items-center">
                    <AiFillFileImage />
                  </motion.div>
                }
                {
                  images &&
                    <Image 
                      loading="lazy"
                      onLoadingComplete={() => setImgLoaded(true)}
                      key={images[0]} 
                      src={images[0]} 
                      className={`shadow transition-all object-cover z-10 ${hover ? 'saturate-100':'saturate-0'}`} 
                      alt=""
                      quality={50}
                      width={300}
                      height={300}
                    />
                }
              </div>
            </div>
            <div className="flex flex-col p-2 lg:hidden">
              <h3 className="text-white text-xl font-bold">{title}</h3>
              <span className="text-white">{date}</span>
            </div>
          </div>
        </Link>
      </li>
    </>
  )
}

export default Project
