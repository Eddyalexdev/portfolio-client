"use client"
import { useEffect, useMemo, useState } from "react"

interface useConsultProps {
  consult: Promise<any>,
  dependency?: string
}

const useConsult = ({consult, dependency}: useConsultProps) => {
  const [data, setData] = useState([]) as any
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    consult
      .then((item: any) => { 
        setData(item)
        setLoading(false)
      })
      .catch((error) => new Error(error))
  }, [])

  return {loading, data}
}

export default useConsult
