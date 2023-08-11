import axios from 'axios'

const url = process.env.API_URL || "http://localhost:8080/api"

const getProjects = async () => {
  return await axios.get(`${url}/projects`)
}

export {getProjects}
