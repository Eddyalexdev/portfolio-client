"use client"
import { AdminProject } from "@/models/project"
import Link from "next/link"
import { useEffect, useState } from "react"

const getData = async () => {
  const data = await fetch("https://portfolio-server-pcv6.onrender.com/api/projects", { next: {revalidate: 3600} })
  return data.json()
}

const deleteData = async (id: String) => {
  return await fetch("https://portfolio-server-pcv6.onrender.com/api/projects/" + id, { method: "DELETE" })
}

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState([]); 
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    getData()
      .then(res => setProjects(res))
      .catch(error => console.log(error))

    if(localStorage.getItem('admin')) {
      setIsAdmin(true)
    }
  }, [])

  const handleDeleteProject = async (id: String) => {
    await deleteData(id)
  }

  if(isAdmin)
  return (
    <section className="border border-white w-full h-screen relative grid place-content-center">
      <div className="bg-black absolute w-full h-full opacity-75"></div>
      <div className="relative">
        <h2 className="text-white text-2xl">Proyectos</h2>
        <Link href="projects/create" className="bg-white px-2 py-1">Agregar Nuevo</Link>
      </div>
      <table className="relative">
        <thead className="">
          <tr className="text-white table">
            <th>Nombre del proyecto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {
            projects.map((project: AdminProject) => 
              <tr className="table" key={`${project._id}`}>
                <th>
                  <span>{project.title}</span>
                </th>
                <th>
                  <Link href="">Editar</Link>
                  <button onClick={() => handleDeleteProject(project._id)}>Eliminar</button>
                </th>
              </tr>
            )
          }
        </tbody>
      </table>
    </section>
  )
  else
  return <span>no es admin</span>
}

export default ProjectsAdmin
