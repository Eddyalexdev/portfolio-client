"use client"
import { Image } from '@/components'
import useConsult from '@/hooks/useConsult'
import { getProject } from '@/services/projects'
import {motion, useScroll} from 'framer-motion'
import { useParams } from 'next/navigation'

const SingleProject = () => {
  const {id} = useParams()
  const {data, loading} = useConsult({consult: getProject(`${id}`), dependency: `${id}`})
  const {scrollX} = useScroll()

  return (
    <>
      <section className="h-screen grid place-items-center w-full relative">
        <div className={`border border-white w-[90%] grid relative gap-2`}>
          <motion.div initial={{opacity: 0}} animate={{opacity: .8, background: '#000000'}} className={`absolute -inset-0.5`}></motion.div>
          <div className="flex w-full overflow-hidden">
            <motion.div initial={{translateX: 0}} animate={{translateX: '-100%'}} transition={{repeat: Infinity, duration: 25, ease: 'linear'}} className="flex relative w-full">
              {
                loading ?
                <span>Loading...</span>
                :
                data.images.map((image: string) => 
                  <div key={image} className="min-w-[500px] h-[300px] bg-white">
                    <Image image={image} />
                  </div>
                )
              }
            </motion.div>
            <motion.div initial={{translateX: 0}} animate={{translateX: '-100%'}} transition={{repeat: Infinity, duration: 25, ease: 'linear'}} className="flex relative w-full">
              {
                loading ?
                <span>Loading...</span>
                :
                data.images.map((image: string) => 
                  <div key={image} className="min-w-[500px] h-[300px] bg-white">
                    <Image image={image} />
                  </div>
                )
              }
            </motion.div>
          </div>
          <div className="p-5 relative">
            <div className="mb-6 border-b border-white">
              <h2 className="text-white text-4xl">{data.title}</h2>
              <h3 className="text-white">{data.date}</h3>
            </div>
            <ul className="flex items-center flex-wrap gap-4 mb-4">
              {
                !loading &&
                data.languages.map((language: any) => (
                  <li key={language.slug} className="flex flex-col items-center border border-white p-3 gap-1 saturate-0 hover:saturate-100 transition-all">
                    <div className="w-[25px] h-[25px] md:w-[40px] md:h-[40px]">
                      <img src={language.image} className="w-full h-full object-contain" alt=""/>
                    </div>
                    <span className="text-white text-xs">{language.slug}</span>
                  </li>
                ))
              }
            </ul>
            <p className="text-white text-sm md:text-md">{data.description}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProject
