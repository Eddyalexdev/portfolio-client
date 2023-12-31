"use client"

import useConsult from '@/hooks/useConsult'
import { allLanguages } from '@/services/languages'
import { createProject } from '@/services/projects'
import { useEffect, useState } from 'react'
import {set, useForm} from 'react-hook-form'

const getData = async () => {
  return await fetch("https://portfolio-server-pcv6.onrender.com/api/languages")
}

const CreateProject = () => {
  const {handleSubmit, register} = useForm()
  const {loading, data} = useConsult({consult: allLanguages()})
  const [languages, setLanguages] = useState<Array<string>>([])
  const [isAdmin, setIsAdmin] = useState(false);

  const handleCreateProject = (data: any) => {
    const description = {
      es: data.description_es,
      en: data.description_en
    }
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', JSON.stringify(description))
    formData.append('link', data.link)
    formData.append('date', data.date)
    formData.append('color', data.color)
    languages.forEach(element => formData.append('languages[]', element))
    for(const image of data.images) {
      formData.append('images[]', image)
    }

    createProject(formData)
  }

  const handleSelect = (e: any) => {
    if(!languages.includes(e.target.value)){
      setLanguages([...languages, e.target.value])
      return
    }

    const array = languages.filter(language => language !== e.target.value)
    setLanguages([...array])
  }

  useEffect(() => {
    const admin = localStorage.getItem("admin")
    if (admin) {
      setIsAdmin(true)
    }

  }, [])

  if (isAdmin) 
  return (
    <section className="border border-white w-full h-screen relative grid place-content-center">
      <div className="bg-black absolute w-full h-full opacity-75"></div>
      <h2 className="text-white relative text-xl mb-2">Crear Nuevo Proyecto</h2>
      <form onSubmit={handleSubmit(handleCreateProject)} className="relative grid gap-8 w-[400px] overflow-auto">
        <label className="text-white flex flex-col gap-2">
          <span>Titulo:</span>
          <input {...register('title')} className="border-b bg-transparent" />
        </label>
        <label className="text-white flex flex-col gap-2">
          <span>Link del Proyecto:</span>
          <input {...register('link')} className="border-b bg-transparent" />
        </label>
        <div className="text-white flex flex-col gap-2">
          <span>Lenguajes y Tecnologias:</span>
          <div className="flex items-center gap-4 flex-wrap">
            {
              !loading && data &&
              data.map((language: any) => <label key={language._id}><input onChange={handleSelect} value={language._id} type="checkbox"/> {language.slug}</label>)
            }
          </div>
        </div>
        <label className="text-white flex flex-col gap-2">
          <span>description:</span>
          <textarea {...register('description_en')} className="border bg-transparent"></textarea>
        </label>
        <label className="text-white flex flex-col gap-2">
          <span>description es:</span>
          <textarea {...register('description_es')} className="border bg-transparent"></textarea>
        </label>
        <label className="text-white flex flex-col gap-2">
          <span>fecha del proyecto:</span>
          <input {...register('date')} className="border-b bg-transparent" />
        </label>
        <label className="text-white flex flex-col gap-2">
          <span>Imagenes:</span>
          <input {...register('images')} className="bg-transparent" type="file" multiple={true}/>
        </label>
        <label className="text-white flex flex-col gap-2">
          <span>color:</span>
          <input {...register('color')} className="bg-transparent" type="color"/>
        </label>
        <button type="submit" className="bg-white px-2 py-1 rounded-md">Crear Proyecto</button>
      </form>
    </section>
  )
  else 
  return <span>Regrese al sitio web</span>
}

export default CreateProject
