import axios from 'axios'

const url = process.env.API_URL || "https://portfolio-server-pcv6.onrender.com/api"
const localUrl = "http://localhost:8080/api"

const getProjects = async () => {
  const projects = await fetch(`${localUrl}/projects`, {next: { revalidate: 3600 }})
  return projects.json()
}

const  getProject = async (id: string) => {
  try {
    const language = await fetch(`${localUrl}/projects/${id}`, {cache: 'no-store'})
    return language.json()
  } catch (e) {
    console.log('erro, not success single project')
  }
}

const createProject = async (data: any) => {
  return await axios.post(`${localUrl}/projects`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export {getProjects, createProject, getProject}
