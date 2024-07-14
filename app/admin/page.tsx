"use client"

import axios from "axios"
import { useState } from "react"
import Container from "@/sections/Container"

export default function Page() {
  const [name, setName] = useState('')
  const [studio, setStudio] = useState('')
  const [storage, setStorage] = useState(1)
  const addHandler = (e)=>{
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/v1/games', {
      name:name,
      studio:studio,
      storage:storage
    }).catch(err=>console.error(err))

  }
    return (
    <>
      <form className="pad flex flex-col justify-center items-center gap-10 " onSubmit={addHandler}>
        <input className="border border-black px-6 py-2 rounded-[8px]" name="name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <input className="border border-black px-6 py-2 rounded-[8px]" name="studio" placeholder="studio" onChange={(e)=>setStudio(e.target.value)}/>
        <button className="border border-black px-6 py-2 rounded-[8px]">add</button>
        
      </form>
    </>
    
  )
}
