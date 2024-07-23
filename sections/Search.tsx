'use client'

import { api } from "@/public/data"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Search() {
  const [url, setUrl] = useState('')
  const router = useRouter()
  useEffect(()=>{
    router.push(`/?search=${url}`)
  },[url])
  return (
    <div className="h-[100px] bg-bglight dark:bg-darker flex flex-row justify-center items-center gap-4">
      <input type="search" onChange={(e)=>setUrl(e.target.value)} placeholder="Search..." className="input w-[50%] focus-visible:outline-none"/>
      <Link href={`/?search=${url}`} className="input btn-hover">Submit</Link>
    </div>
  )
}

