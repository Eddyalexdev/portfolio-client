"use client"
import Container from "@/components/Container";
import Link from "next/link";
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <>
      <section className="w-full h-screen grid place-items-center">
        <div>
        </div>
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            className="text-white text-3xl">
            Eddy Alex Chambi Llanco
          </motion.h1>
          <motion.h2 
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: .5}}
            className="text-white text-xl mb-2">Full Stack Developer</motion.h2>
          <ul className="flex gap-2 items-center justify-center -ml-5">
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
            <motion.li 
              initial={{opacity: 0, y: 100}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: .7}}
              className="text-white text-2xl"
            >
              <Link href="https://github.com/Eddyalexdev" target="_blank"><AiOutlineInstagram /></Link>
            </motion.li>
          </ul>
        </div>
      </section>
    </>
  )
}
