import axios from 'axios'

const url = process.env.API_URL || "https://portfolio-server-pcv6.onrender.com/api"

const getProjects = async () => {
  const projects = await fetch(`${url}/projects`, {cache: 'force-cache', next: { revalidate: 60 }})
  return projects.json()
}

const  getProject = async (id: string) => {
  const language = await fetch(`${url}/projects/${id}`, {next: { revalidate: 60 }})
  return language.json()
}

const createProject = async (data: any) => {
  return await axios.post(`${url}/projects`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export {getProjects, createProject, getProject}
