"use client"
import { Language } from "@/models/language"
import { useState, useEffect } from "react"

const getData = async () => {
    const data = await fetch("https://portfolio-server-pcv6.onrender.com/api/languages")
    return data.json()
}

const deleteData = async (id: String) => {
    return await fetch("https://portfolio-server-pcv6.onrender.com/api/languages/" + id, { method: "DELETE"} )
}

const Languages = () => {
    const [languages, setLanguages] = useState([]);


    const handleDeleteLanuage = (id: String) => {
        deleteData(id)
    }

    useEffect(() => {
        getData()
            .then(res => setLanguages(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="flex flex-col gap-5 items-center justify-center bg-black w-screen h-screen relative">
            <h1 className="text-white text-lg uppercase">Set Languages</h1>
            <table className="border border-white text-white">
                <thead>
                    <tr>
                        <th>Slug</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        languages.map((language: Language) => {
                            return <tr>
                                <td>{language.slug}</td>
                                <td>
                                    <button onClick={() => handleDeleteLanuage(language._id)}>Eliminar lenguaje</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Languages