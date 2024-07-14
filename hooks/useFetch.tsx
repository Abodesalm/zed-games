'use client'

import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url)=>{
  const [data, setData] = useState()
  useEffect(()=>{
    {
        axios({method:'get',url:url}).then(res =>
        setData(res.data)).catch(err=><div>{err.cause}</div>)
    }
  },[url])

  return data
}
