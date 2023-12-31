import axios from 'axios'

const url = process.env.API_URL || "https://portfolio-server-pcv6.onrender.com/api"
const localUrl = "http://localhost:8081/api"

const allLanguages = async () => {
  try {
    const languages = await fetch(url + '/languages', {next: {revalidate: 60}})
    return languages.json()
  } catch(e) {
    console.log('error ocurred with languages')
  }
}

const createLanguages = async (data: any) => {
  const language = await axios.post(url +'/languages', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return language
}

export {createLanguages, allLanguages}
