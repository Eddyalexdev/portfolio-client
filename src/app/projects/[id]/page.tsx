"use client"
import { Loading } from '@/components'
import CarrouselImages from '@/components/CarrouselImages'
import useConsult from '@/hooks/useConsult'
import { getProject } from '@/services/projects'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const SingleProject = () => {
  const {id} = useParams()
  const {data, loading} = useConsult({consult: getProject(`${id}`), dependency: `${id}`})
  const {i18n} = useTranslation("global")

  if(loading) return <div className="h-screen w-full grid place-items-center relative z-10">
    <motion.div initial={{opacity: 0}} animate={{opacity: .9, background: '#000000'}} className={`absolute -inset-0.5`}></motion.div>
    <Loading />
  </div>

  return (
      <section className="h-screen w-full relative md:p-20 max-lg:grid max-lg:place-content-center">
        <motion.div initial={{opacity: 0}} animate={{opacity: .9, background: '#000000'}} className={`absolute -inset-0.5`}></motion.div>
        <div className='border border-white relative flex flex-col-reverse xl:grid grid-cols-6'>
          <motion.div className={`col-span-2 border-b border-r border-white`}>
            <div className='p-3 lg:p-5 relative'>
              <Link href="/projects" className="text-white flex items-center gap-1 mb-2"><AiOutlineArrowLeft /> Volver</Link>
              <div className="mb-4 lg:mb-6 border-b border-white">
                <h2 className="text-white text-4xl">{data.title}</h2>
                <h3 className="text-white">{data.date}</h3>
              </div>
              <ul className="flex items-center flex-wrap gap-2 xl:gap-4 mb-4">
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
              <p className="text-white text-xs md:text-sm">{i18n.language === 'es' ? data.description.es : data.description.en}</p>
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
