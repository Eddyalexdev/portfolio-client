"use client"
import useConsult from '@/hooks/useConsult'
import { getProject } from '@/services/projects'
import {motion} from 'framer-motion'
import { useParams } from 'next/navigation'

const SingleProject = () => {
  const {id} = useParams()
  const {data, loading} = useConsult({consult: getProject(`${id}`), dependency: `${id}`})

  console.log(data)
  return (
    <>
      <section className="h-screen grid place-items-center w-full relative">
        <div className="border border-white">
          <motion.img 
            className="object-cover" src="https://cdn.pixabay.com/photo/2023/03/21/12/21/anime-wallpaper-7867145_640.jpg" 
            alt="" 
            layoutId={"https://cdn.pixabay.com/photo/2023/03/21/12/21/anime-wallpaper-7867145_640.jpg"}
          />
          <h2 className="text-white">Titulo del proyecto</h2>
        </div>
      </section>
    </>
  )
}

export default SingleProject
