"use client"
import CarrouselImages from '@/components/CarrouselImages'
import MouseAnimated from '@/components/MouseAnimated'
import useConsult from '@/hooks/useConsult'
import { getProject } from '@/services/projects'
import { motion } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'

const SingleProject = () => {
  const {id} = useParams()
  const {data, loading} = useConsult({consult: getProject(`${id}`), dependency: `${id}`})
  const router = useRouter()

  return (
      <section className="h-screen w-full relative md:p-20">
        <motion.div initial={{opacity: 0}} animate={{opacity: .9, background: '#000000'}} className={`absolute -inset-0.5`}></motion.div>
        <div className='border border-white relative grid grid-cols-6'>
          <motion.div className={`col-span-2 border-b border-r border-white`}>
            <div className='p-5 relative'>
              <div className="mb-6 border-b border-white">
                <h2 className="text-white text-4xl">{data.title}</h2>
                <h3 className="text-white">{data.date}</h3>
              </div>
              <ul className="flex items-center flex-wrap gap-4 mb-4">
                {
                  !loading &&
                  data.languages.map((language: any, i: number) => (
                    <motion.li initial={{scale: 0}} animate={{scale: 1}} transition={{delay: (i * 10) / 100}} key={language.slug} className="flex flex-col items-center p-3 gap-2 transition-all">
                      <div className="w-[25px] h-[25px]">
                        <img src={language.image} className="w-full h-full object-contain" alt=""/>
                      </div>
                      <span className="text-white text-xs">{language.slug}</span>
                    </motion.li>
                  ))
                }
              </ul>
              <p className="text-white text-xs md:text-sm">{data.description}</p>
              {
                data.url &&
                <div className='text-white'><strong>URL del proyecto:</strong> {data.url}</div>
              }
            </div>

          </motion.div>

          <CarrouselImages data={data.images} loading={loading}/>

        </div>
      </section>
  )
}

export default SingleProject
