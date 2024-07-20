'use client'

import Link from "next/link"
import { useState } from "react"


export default function Search() {
  const [url, setUrl] = useState('')
  return (
    <div className="h-[100px] bg-bglight dark:bg-darker flex flex-row justify-center items-center gap-4">
      <input type="search" onChange={(e)=>setUrl(e.target.value)} placeholder="Search Doesn't Work Yet" className="input w-[50%] focus-visible:outline-none placeholder:text-red-400/70"/>
      <Link href={`/?search=${url}`} className="input btn-hover">Submit</Link>
    </div>
  )
}

