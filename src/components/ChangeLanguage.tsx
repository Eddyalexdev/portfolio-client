"use client"
import { useTranslation } from "react-i18next"
import {motion} from 'framer-motion'
import { useState } from "react"

const ChangeLanguage = () => {
  const {i18n} = useTranslation("global")
  const [isEs, setIsEs] = useState(true)

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang)
    if(lang === "es") {
      setIsEs(true)
    } else {
      setIsEs(false)
    }
  }

  return (
    <div className="flex items-center fixed top-10 right-10 z-20 bg-white rounded-lg border border-white overflow-hidden">
      <motion.div initial={{left: '5%'}} animate={{left: isEs ? '5%' : '55%'}} className="bg-black absolute top-0 w-[40px] rounded-[50%] h-[40px]"></motion.div>
      <motion.button initial={{color: '#000000'}} animate={{color: isEs ? '#FFFFFF' : '#000000'}} className="py-2 px-4 relative" onClick={() => handleChangeLang("es")}>ES</motion.button>
      <motion.button initial={{color: '#000000'}} animate={{color: isEs ? '#000000' : '#FFFFFF'}} className="py-2 px-4 relative" onClick={() => handleChangeLang("en")}>EN</motion.button>
    </div>
  )
}

export default ChangeLanguage
