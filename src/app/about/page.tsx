"use client"

import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai"
import {motion, motionValue} from 'framer-motion'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTranslation } from "react-i18next"
import { useRouter } from "next/navigation"
import MouseAnimated from "@/components/MouseAnimated"
import { Technologies } from "@/components"

const About = () => {
  const isTablet = useMediaQuery('(max-width:950px)')
  const x = motionValue(200)
  const {t} = useTranslation("global")
  const router = useRouter()

  if (isTablet) x.set(0)

  const handleChangePage = (e: any) => {
    if(e.deltaY) {
      if (e.deltaY > 0) {
        router.push('/projects')
      } else {
        router.push('/')
      } 
      return
    }
  }

  return (
    <>
      <motion.section onWheel={handleChangePage} onTouchMove={handleChangePage} style={{x}} className="w-full h-screen grid place-items-center relative z-10">
        <div className="grid sm:grid-cols-6 sm:grid-rows-3 relative">
          <motion.div initial={{opacity: 0}} animate={{opacity: .4}} transition={{delay: .8}} className="opacity-[.4] bg-gradient-to-r from-white to-white absolute bg-white -inset-0.5 blur-md"></motion.div>
          <motion.div 
            initial={{height: 0}}
            animate={{height: 'auto'}}
            className="overflow-hidden col-span-5 bg-black relative opacity-75 row-span-2">
            <div className="p-4 border border-white w-full h-full">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h1 className="text-white text-2xl mb-2">{t('about.title')}</h1>
                </div>
              </div>
              <p className="text-white max-w-[550px] max-md:text-sm mb-4">
                {t("about.body")}
              </p>
              <MouseAnimated text="portfolio" textRight="home"/>
            </div>
          </motion.div>
          <motion.div 
            initial={{width: 0}}
            animate={{width: '100%'}}
            transition={{delay: .6}}
            className="relative bg-black opacity-75 sm:col-span-1 sm:row-span-3 -ml-[1px] overflow-hidden"
          >
            <Technologies />
          </motion.div>
          <motion.div 
            initial={{height: 0}}
            animate={{height: 'auto'}}
            transition={{delay: .4}}
            className="overflow-hidden col-span-5 -mt-[1px] relative bg-black opacity-75 row-span-1">
            <div className="border border-white w-full h-full p-4">
              <h2 className="text-white uppercase mb-2">{t("about.footer")}</h2>
              <ul className="grid gap-1">
                <li className="text-white"><a target="_blank" href="mailto:eddyalex.dev@gmail.com" className="flex items-center gap-2 underline"><AiOutlineMail /> Eddyalex.dev@gmail.com</a></li>
                <li className="text-white"><a target="_blank" href="https://api.whatsapp.com/send?phone=59179536443" className="flex items-center gap-2 underline"><AiOutlineWhatsApp /> +591 79536443</a></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default About
