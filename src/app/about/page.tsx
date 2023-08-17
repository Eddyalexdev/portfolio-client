"use client"

import Link from "next/link"
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai"
import { BsArrowLeft } from "react-icons/bs"
import { SiLaravel } from "react-icons/si"
import { BiLogoAws, BiLogoDocker, BiLogoGithub, BiLogoKubernetes, BiLogoNodejs, BiLogoPhp, BiLogoPython, BiLogoReact, BiLogoRedux, BiLogoSass, BiLogoSkype, BiLogoTailwindCss, BiLogoTypescript, BiLogoWordpress } from "react-icons/bi"
import {motion, motionValue, useAnimationFrame, useMotionValue, useTime, useTransform} from 'framer-motion'
import useMediaQuery from '@mui/material/useMediaQuery'

const About = () => {
  const isMobile = useMediaQuery('(max-width:750px)')
  const x = motionValue(200)

  if (isMobile) x.set(0)

  return (
    <>
      <motion.section style={{x}} className="w-full h-screen grid place-items-center relative z-10">
        <div className="grid grid-cols-6 grid-rows-3 relative">
          <motion.div initial={{opacity: 0}} animate={{opacity: .4}} transition={{delay: .8}} className="opacity-[.4] bg-gradient-to-r from-white to-white absolute bg-white -inset-0.5 blur-md"></motion.div>
          <motion.div 
            initial={{height: 0}}
            animate={{height: 'auto'}}
            className="overflow-hidden col-span-5 bg-black relative opacity-75 row-span-2">
            <div className="p-4 border border-white w-full h-full">
              <div className="flex flex-col gap-2">
                <Link className="text-white text-lg text-right" href="/">
                  <BsArrowLeft />
                </Link>
                <h1 className="text-white text-2xl mb-2">About Me!</h1>
              </div>
              <p className="text-white max-w-[550px] max-md:text-sm">
                Nice to meet you, my name is Eddy and I am a web developer with over 4 years of experience. I am very passionate about the world of software development, and thanks to that passion, I have been able to make significant progress in the field. Over these years, I have learned a lot, mostly through projects as a freelancer.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{width: 0}}
            animate={{width: '100%'}}
            transition={{delay: .6}}
            className="relative bg-black opacity-75 col-span-1 row-span-3 -ml-[1px] overflow-hidden"
          >
            <div className="p-4 border border-white max-h-[400px] overflow-hidden grid gap-6">
              <motion.ul 
                initial={{translateY: 0}}
                animate={{translateY: '-100%'}}
                transition={{repeat: Infinity, duration: 25, ease: 'linear'}}
                className="flex flex-col items-center gap-6 justify-center"
              >
                <li className="text-white text-3xl">
                  <BiLogoTypescript />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoAws />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoReact />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoPhp />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoDocker />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoGithub />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoNodejs />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoRedux />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoWordpress />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoTailwindCss />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoSass />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoPython />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoKubernetes />
                </li>
                <li className="text-white text-3xl">
                  <SiLaravel />
                </li>
              </motion.ul>
              <motion.ul 
                initial={{translateY: 0}}
                animate={{translateY: '-100%'}}
                transition={{repeat: Infinity, duration: 25, ease: 'linear'}}
                className="flex flex-col items-center gap-6 justify-center"
              >
                <li className="text-white text-3xl">
                  <BiLogoTypescript />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoAws />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoReact />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoPhp />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoDocker />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoGithub />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoNodejs />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoRedux />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoWordpress />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoTailwindCss />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoSass />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoPython />
                </li>
                <li className="text-white text-3xl">
                  <BiLogoKubernetes />
                </li>
                <li className="text-white text-3xl">
                  <SiLaravel />
                </li>
              </motion.ul>

            </div>
          </motion.div>
          <motion.div 
            initial={{height: 0}}
            animate={{height: 'auto'}}
            transition={{delay: .4}}
            className="overflow-hidden col-span-5 -mt-[1px] relative bg-black opacity-75 row-span-1">
            <div className="border border-white w-full h-full p-4">
              <h2 className="text-white uppercase mb-2">Contact With Me!</h2>
              <ul className="grid gap-1">
                <li className="text-white"><Link target="_blank" href="mailto:eddyalex.dev@gmail.com" className="flex items-center gap-2 underline"><AiOutlineMail /> Eddyalex.dev@gmail.com</Link></li>
                <li className="text-white"><Link target="_blank" href="https://api.whatsapp.com/send?phone=59179536443" className="flex items-center gap-2 underline"><AiOutlineWhatsApp /> +591 79536443</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default About
