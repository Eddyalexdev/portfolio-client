import { Projects as AllProjects } from "@/components"
import Link from "next/link"
import { AiOutlineArrowLeft } from "react-icons/ai"

const getData = async () => {
  const data = await fetch("https://portfolio-server-pcv6.onrender.com/api/projects", { next: {revalidate: 3600} })
  return data.json()
}

const Projects = async () => {
  const data = await getData()

  return (
    <>
      <section className="relative grid place-items-center w-full h-screen">
        <div className="relative w-[80%] overflow-hidden h-[80%] max-md:w-full">
          <div className="w-full h-full bg-black lack z-0 absolute opacity-[.7] border border-white"></div>
          <Link href="/about" className="text-white flex items-center gap-1 mb-2 relative z-20 p-5"><AiOutlineArrowLeft /> About</Link>
          <AllProjects data={data} loading={false} />
        </div>
      </section>
    </>
  )
}

export default Projects
