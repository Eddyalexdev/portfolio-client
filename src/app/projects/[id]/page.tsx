"use client"
import { Image } from '@/components'
import MouseAnimated from '@/components/MouseAnimated'
import useConsult from '@/hooks/useConsult'
import { getProject } from '@/services/projects'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useParams } from 'next/navigation'
import { useRef } from 'react'

const SingleProject = () => {
  const {id} = useParams()
  const {data, loading} = useConsult({consult: getProject(`${id}`), dependency: `${id}`})
  const containerRef = useRef(null)
  const ref = useRef(null)

  return (
    <>
      <section ref={ref} className="h-screen grid place-items-center w-full">

        <div className={`border border-white w-[80%] grid grid-rows-2 gap-2`}>
          <motion.div initial={{opacity: 0}} animate={{opacity: .8, background: '#000000'}} className={`absolute -inset-0.5`}></motion.div>
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
                    <div className="w-[25px] h-[25px] md:w-[32px] md:h-[32px]">
                      <img src={language.image} className="w-full h-full object-contain" alt=""/>
                    </div>
                    <span className="text-white text-xs">{language.slug}</span>
                  </li>
                ))
              }
            </ul>
            <p className="text-white text-md md:text-md mb-4">{data.description}</p>
            <MouseAnimated />
          </div>

          <div className="w-full overflow-hidden">
            <motion.div ref={containerRef} className="flex gap-4 px-2">
                {
                  loading ?
                  <span>Loading...</span>
                  :
                  data.images.map((image: string) => 
                    <Image key={image} image={image} />
                  )
                }
            </motion.div>
          </div>

          <div className="">
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProject
