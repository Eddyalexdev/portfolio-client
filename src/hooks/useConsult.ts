"use client"
import { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

interface useConsultProps {
  consult: () => Promise<AxiosResponse<any, any>>
}

const useConsult = ({consult}: useConsultProps) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    consult()
      .then((response: any) => { 
        setData(response.data)
        setLoading(false)
      })
      .catch((error: any) => new Error(error))
  }, [consult])

  return {loading, data}
}

export default useConsult
