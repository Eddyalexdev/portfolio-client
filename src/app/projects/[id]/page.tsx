"use client"
import { Image } from '@/components'
import MouseAnimated from '@/components/MouseAnimated'
import useConsult from '@/hooks/useConsult'
import { getProject } from '@/services/projects'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'
import { useParams } from 'next/navigation'
import { use, useRef, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const SingleProject = () => {
  const {id} = useParams()
  const {data, loading} = useConsult({consult: getProject(`${id}`), dependency: `${id}`})
  const [viewAnimation, setViewAnimation] = useState(false)
  const containerRef = useRef(null)
  const x = useSpring(1)

  return (
      <section className="h-screen grid place-items-center w-full bg-black">

          <div className="w-full overflow-hidden relative">
            <motion.div style={{x}} ref={containerRef} className="flex gap-4 px-2">
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

        <motion.div className={`border border-white w-[750px] fixed`}>
          <motion.div initial={{opacity: 0}} animate={{opacity: .8, background: '#000000'}} className={`absolute -inset-0.5 blur-smjjjk`}></motion.div>
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
            <p className="text-white text-md md:text-md">{data.description}</p>
            <div className='w-full flex justify-end'>
              <button className='text-white underline text-center flex items-center gap-2'>View Animation <AiOutlineArrowRight /> </button>
            </div>
          </div>

        </motion.div>

      </section>
  )
}

export default SingleProject
