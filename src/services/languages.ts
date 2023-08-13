import { Language } from "@/types/languages.type"
import axios from 'axios'

const allLanguages = async () => {
  const languages = await axios.get('http://localhost:8080/api/languages')
  return languages.data
}

const createLanguages = async (data: any) => {
  const language = await axios.post('http://localhost:8080/api/languages', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return language
}

export {createLanguages, allLanguages}
