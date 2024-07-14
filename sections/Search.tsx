"use client"
import Link from "next/link"
import { useState } from "react"

export default function Search() {

  const [SearchValue, setValue] = useState('')

  return (
    <div className="pad h-[100px] bg-gray-900 text-white">
      <form method='get' action={`http://127.0.0.1:8000/api/v1/games?search=`}>
        <input type="text" className="" name="search" id='search'/>
        <button>submit</button>
        <Link href={`/?search=${SearchValue}`}>Search</Link>
      </form>
    </div>
  )
}
