import axios from 'axios'

const allLanguages = async () => {
  try {
    const languages = await fetch('https://portfolio-server-pcv6.onrender.com/api/languages', {next: {revalidate: 60}})
    return languages.json()
  } catch(e) {
    console.log('error ocurred with languages')
  }
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
