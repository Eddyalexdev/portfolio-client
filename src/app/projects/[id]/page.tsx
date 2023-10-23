import { Languages } from '@/components'
import Background from '@/components/Background'
import CarrouselImages from '@/components/CarrouselImages'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const getData = async (id: string) => {
  const project = await fetch(`https://portfolio-server-pcv6.onrender.com/api/projects/${id}`, { next: { revalidate: 3600 } })
  return project.json()
}

const SingleProject = async ({params}: any) => {
  const data = await getData(`${params.id}`)

  return (
      <section className="h-screen w-full relative md:p-20 max-lg:grid max-lg:place-content-center">
        <Background />
        <div className='border border-white relative flex flex-col-reverse xl:grid grid-cols-6'>
          <div className={`col-span-2 border-b border-r border-white`}>
            <div className='p-3 lg:p-5 relative'>
              <Link href="/projects" className="text-white flex items-center gap-1 mb-2"><AiOutlineArrowLeft /> Volver</Link>
              <div className="mb-4 lg:mb-6 border-b border-white">
                <h2 className="text-white text-4xl">{data.title}</h2>
                <h3 className="text-white">{data.date}</h3>
              </div>
              <Languages data={data} />
              <p className="text-white text-xs md:text-sm">{data.description.es}</p>
              {
                data.url &&
                <div className='text-white'><strong>URL del proyecto:</strong> {data.url}</div>
              }
            </div>

          </div>

          <CarrouselImages data={data.images} loading={false}/>

        </div>
      </section>
  )
}

export default SingleProject
