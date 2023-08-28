"use client"
import { Image } from '@/components'
import useConsult from '@/hooks/useConsult'
import { getProject } from '@/services/projects'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useParams } from 'next/navigation'
import { useRef, useState } from 'react'

const SingleProject = () => {
  const {id} = useParams()
  const {data, loading} = useConsult({consult: getProject(`${id}`), dependency: `${id}`})
  const containerRef = useRef(null)
  const x = useSpring(1)
  const [index, setIndex] = useState(1)
  
  return (
      <section className="h-screen relative grid w-full p-20">
        <motion.div className={`border border-white w-[750px]`}>
          <motion.div initial={{opacity: 0}} animate={{opacity: .9, background: '#000000'}} className={`absolute -inset-0.5`}></motion.div>
          <div className="p-5 relative">
            <div className="mb-6 border-b border-white">
              <h2 className="text-white text-4xl">{data.title}</h2>
              <h3 className="text-white">{data.date}</h3>
            </div>
            <ul className="flex items-center flex-wrap gap-4 mb-4">
              {
                !loading &&
                data.languages.map((language: any) => (
                  <li key={language.slug} className="flex flex-col items-center border border-white p-3 gap-1 transition-all">
                    <div className="w-[25px] h-[25px] md:w-[32px] md:h-[32px]">
                      <img src={language.image} className="w-full h-full object-contain" alt=""/>
                    </div>
                    <span className="text-white text-xs">{language.slug}</span>
                  </li>
                ))
              }
            </ul>
            <p className="text-white text-md md:text-md">{data.description}</p>
            {
              data.url &&
              <div className='text-white'><strong>URL del proyecto:</strong> {data.url}</div>
            }
          </div>

        </motion.div>

        <div className="w-full relative">
          <motion.div style={{x}} ref={containerRef} className="flex gap-4 px-2">
              {
                loading ?
                <span>Loading...</span>
                :
                data.images.map((image: string, i: number) => 
                  <Image key={image} image={image} id={i} index={index}/>
                )
              }
          </motion.div>
        </div>

      </section>
  )
}

export default SingleProject
