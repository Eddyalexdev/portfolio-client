"use client"
import Model3D from "@/components/Model3D"
import { Cursor } from "."
import global_en from '@/translations/en/global.json'
import global_es from '@/translations/es/global.json'
import i18next from "i18next"
import {I18nextProvider} from 'react-i18next'
import ChangeLanguage from "./ChangeLanguage"

interface ContainerProps {
  children: React.ReactNode
}

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    }
  }
})

const Container = ({children}: ContainerProps) => {

  return (
    <I18nextProvider i18n={i18next}>
      <ChangeLanguage />
      <Cursor />
      <main className="relative w-full">
        <div className="w-full h-full min-h-screen absolute z-[0] max-md:py-20">
          <Model3D />
        </div>
        <section className="max-md:px-5">
          {children}
        </section>
      </main>
    </I18nextProvider>
  )
}

export default Container
