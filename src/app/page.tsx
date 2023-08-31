"use client"
import Link from "next/link";
import {AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'
import {motion} from 'framer-motion'
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import MouseAnimated from "@/components/MouseAnimated";
import { useRef } from "react";

export default function Home() {
  const {t} = useTranslation('global')
  const router = useRouter()

  const handleChangePage = (e: any) => {

    if(e.deltaY > 0) {
      router.push('about')
    }
  }

  return (
      <div onWheel={handleChangePage} onTouchMove={handleChangePage} className="w-full h-screen grid place-items-center relative">
        <div>
        </div>
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            className="text-white text-2xl sm:text-3xl"
          >
            Eddy Alex Chambi Llanco
          </motion.h1>
          <motion.h2 
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: .5}}
            className="text-white text-lg sm:text-xl mb-2"
            >{t('home.title')}</motion.h2>
          <ul className="flex gap-2 items-center justify-center -ml-5 mb-4">
            <motion.li 
              initial={{opacity: 0, y: 100}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: .9}}
              className="text-white text-2xl"
            >
              <Link href="https://github.com/Eddyalexdev" target="_blank"><AiOutlineGithub /></Link>
            </motion.li>
            <motion.li 
              initial={{opacity: 0, y: 100}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: .8}}
              className="text-white text-2xl"
            >
              <Link href="https://www.linkedin.com/in/eddy-chambi-6111901a6/" target="_blank"><AiOutlineLinkedin /></Link>
            </motion.li>
          </ul>
          <MouseAnimated text="About"/>
        </div>
      </div>
  )
}
