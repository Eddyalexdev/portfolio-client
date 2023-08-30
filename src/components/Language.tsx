"use client"
import i18next from "i18next"
import global_en from '@/translations/en/global.json'
import global_es from '@/translations/es/global.json'
import { I18nextProvider } from "react-i18next"
import ChangeLanguage from "./ChangeLanguage"

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

const Language = ({children}: {children: React.ReactNode}) => {
    return (
        <I18nextProvider i18n={i18next}>
            <ChangeLanguage />
            {children}
        </I18nextProvider>
    )
}

export default Language