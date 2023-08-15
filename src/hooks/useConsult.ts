"use client"
import { AxiosResponse } from "axios"
import { useEffect, useMemo, useState } from "react"

interface useConsultProps {
  consult: Promise<AxiosResponse<any, any>>,
  dependency?: string
}

const useConsult = ({consult, dependency}: useConsultProps) => {
  const [data, setData] = useState([]) as any
  const [loading, setLoading] = useState(true)
  const response = useMemo(async () => await consult, [])

  response
    .then((item: any) => { 
      setData(item)
      setLoading(false)
    })
    .catch((error) => new Error(error))

  return {loading, data}
}

export default useConsult
