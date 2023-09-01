import { Language } from "@/types/languages.type"
import axios from 'axios'

const allLanguages = async () => {
  const languages = await fetch('https://portfolio-server-pcv6.onrender.com/api/languages', {next: {revalidate: 60}})
  return languages.json()
}

const createLanguages = async (data: any) => {
  const language = await axios.post('https://portfolio-server-pcv6.onrender.com/api/languages', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return language
}

export {createLanguages, allLanguages}
