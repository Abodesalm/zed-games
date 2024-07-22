'use client'
import Heading from "@/components/Heading";
import Submit from "@/components/Submit";
import { api } from "@/public/data";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";


export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passConfirm, setPassConfirm] = useState("")
  const [bio, setBio] = useState("")
  const [avatar, setAvatar] = useState("av-1")
  const [error, setError] = useState('')

  const data = {
    "name":name,
    "email":email,
    "password":password,
    "passConfirm":passConfirm,
    "bio":bio,
    "avatar":avatar
  }
  
  const submit = (e) =>{
    e.preventDefault()
    
    axios.post(`${api}/users/signup`,data).then(res=>res.status===201?setError('Created !'):setError("Error")).catch(err=>setError(err.response.data.message))
  }


  return (
    <div className="pad min-h-[70vh] flex flex-col justify-center items-center gap-2">
      <form onSubmit={submit} className="w-[400px] min-h-[500px] px-2 py-4 bg-bglight dark:bg-darker rounded-[28px] flex flex-col justify-center items-center gap-4">
        <Heading title='sign up' />
        <p className={`${error==='Created !'?'text-accentt':'text-red-600'}  text-center`}>{error}</p>
        <input type="text" required placeholder="Name" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setName(e.target.value)}/>
        <input type="email" required placeholder="Email" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder="Bio" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setBio(e.target.value)} />
        <input type="password" required placeholder="Password" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setPassword(e.target.value)}/>
        <input type="password" required placeholder="Confirm Password" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setPassConfirm(e.target.value)}/>

        <Submit title="sign up"/>
      </form>
      <Link href="/login" className="underline">have an account ? login</Link>
    </div>
  )
}
