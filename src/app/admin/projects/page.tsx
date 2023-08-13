import Link from "next/link"

const ProjectsAdmin = () => {
  return (
    <section className="border border-white w-full h-screen relative grid place-content-center">
      <div className="bg-black absolute w-full h-full opacity-75"></div>
      <div className="relative">
        <h2 className="text-white text-2xl">Proyectos</h2>
        <Link href="" className="bg-white px-2 py-1">Agregar Nuevo</Link>
      </div>
      <table className="relative">
        <thead className="">
          <tr className="text-white table">
            <th>Imagen</th>
            <th>Nombre del proyecto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="text-white">
          <tr className="table">
            <th></th>
            <th></th>
            <th>
              <Link href="">Editar</Link>
              <button>Eliminar</button>
            </th>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default ProjectsAdmin
