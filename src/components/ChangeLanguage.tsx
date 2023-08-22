"use client"
import { useTranslation } from "react-i18next"

const ChangeLanguage = () => {
  const {i18n} = useTranslation("global")

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang)
    console.log(i18n)
  }

  return (
    <div className="flex items-center gap-2 absolute top-0 right-0 z-20">
      <button className="bg-white p-2" onClick={() => handleChangeLang("es")}>ES</button>
      <button className="bg-white p-2" onClick={() => handleChangeLang("en")}>EN</button>
    </div>
  )
}

export default ChangeLanguage
