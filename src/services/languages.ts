import { Language } from "@/types/languages.type"
import axios from 'axios'

const allLanguages = async () => {
  const languages = await axios.get('https://portfolio-server-pcv6.onrender.com/api/languages')
  return languages.data
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
