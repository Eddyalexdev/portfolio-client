import axios from 'axios'

const url = process.env.API_URL || "http://localhost:4040/api"

const getProjects = async () => {
  const projects = await axios.get(`${url}/projects`)
  return projects.data
}

const  getProject = async (id: string) => {
  const language = await axios.get(`${url}/projects/${id}`)
  return language.data
}

const createProject = async (data: any) => {
  return await axios.post(`${url}/projects`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export {getProjects, createProject, getProject}
