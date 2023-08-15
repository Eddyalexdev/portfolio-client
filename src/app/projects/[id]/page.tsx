"use client"
import { Image } from '@/components'
import useConsult from '@/hooks/useConsult'
import { getProject } from '@/services/projects'
import {motion} from 'framer-motion'
import { useParams } from 'next/navigation'

const SingleProject = () => {
  const {id} = useParams()
  const {data, loading} = useConsult({consult: getProject(`${id}`), dependency: `${id}`})

  return (
    <>
      <section className="h-screen grid place-items-center w-full relative">
        <div className={`border border-white w-[1000px] grid grid-cols-2 relative`}>
          <motion.div style={{background: "#000000"}} className="absolute w-full h-full opacity-[.8] -inset-0.5 blur-md"></motion.div>
          <div className="grid grid-cols-1 relative min-h-[450px]">
            {
              loading ?
              <span>Loading...</span>
              :
              data.images.map((image: string) => 
                <div key={image} className="w-full bg-white h-full absolute">
                  <Image image={image} />
                </div>
              )
            }
          </div>
          <div className="relative p-5">
            <div className="mb-4">
              <h2 className="text-white text-4xl">{data.title}</h2>
              <h3 className="text-white">{data.date}</h3>
            </div>
            <ul className="flex items-center gap-4 mb-4">
              {
                !loading &&
                data.languages.map((language: any) => (
                  <li key={language.slug}>
                    <img src={language.image} alt=""/>
                    <span className="text-white">{language.slug}</span>
                  </li>
                ))
              }
            </ul>
            <p className="text-white text-sm">{data.description}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProject
