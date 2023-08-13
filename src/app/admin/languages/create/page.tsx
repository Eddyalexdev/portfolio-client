"use client"
import { createLanguages } from '@/services/languages'
import {useForm} from 'react-hook-form'

const CreateLanguage = () => {
  const {handleSubmit, register} = useForm()

  const handleCreateProject = (data: any) => {
    const formData = new FormData()
    formData.append('image', data.image[0])
    formData.append('slug', data.slug)

    createLanguages(formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }

  return (
    <section className="border border-white w-full h-screen relative grid place-content-center">
      <div className="bg-black absolute w-full h-full opacity-75"></div>
      <h2 className="text-white relative text-xl mb-2">Crear Nuevo Lenguaje</h2>
      <form onSubmit={handleSubmit(handleCreateProject)} className="relative grid gap-8">
        <label className="text-white flex flex-col gap-2">
          <span>Slug:</span>
          <input {...register('slug')} className="border-b bg-transparent" />
        </label>
        <label className="text-white flex flex-col gap-2">
          <span>Imagen:</span>
          <input {...register('image')} className="bg-transparent" type="file" />
        </label>
        <button type="submit" className="bg-white px-2 py-1 rounded-md">Crear Proyecto</button>
      </form>
    </section>
  )
}

export default CreateLanguage
