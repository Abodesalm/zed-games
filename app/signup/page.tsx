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
  const [bio, setBio] = useState("none")
  const [avatar, setAvatar] = useState("av-1")

  const data = {name,email,password,passConfirm,bio,avatar}
  
  const submit = (e) =>{
    e.preventDefault()
    /* fetch(`${api}/users/signup`,{
      method:"POST",
      body:JSON.stringify(data),
      mode:"no-cors"
    }).then(res=>res.json()).catch(err=>console.error(err)) */
    //axios.post(`${api}/users/signup`, data)
  }


  return (
    <div className="pad h-[70vh] flex flex-col justify-center items-center gap-2">
      <form onSubmit={submit} className="w-[400px] h-[500px] px-2 py-4 bg-bglight dark:bg-darker rounded-[28px] flex flex-col justify-center items-center gap-4">
        <Heading title='sign up' />
        <input type="text" required placeholder="Name" name="name" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setName(e.target.value)} />
        <input type="email" required placeholder="Email" name="email" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder="Bio" name="bio" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setBio(e.target.value)} />
        <input type="password" required placeholder="Password" name="password" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setPassword(e.target.value)} />
        <input type="password" required placeholder="Confirm Password" name="passConfirm" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setPassConfirm(e.target.value)} />
        <input type="submit" value={"Sign Up"} className={'bg-accent py-1 px-2 rounded-[5px] text-dark font-medium cursor-pointer '} />
      </form>
      <Link href="/login" className="underline">have an account ? login</Link>
    </div>
  )
}
