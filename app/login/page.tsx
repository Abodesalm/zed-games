'use client'
import Heading from "@/components/Heading";
import Submit from "@/components/Submit";
import { api } from "@/public/data";
import Link from "next/link";
import { useState } from "react";


export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const data={email,password}

  const submit = (e) =>{
    e.preventDefault()
    fetch(`${api}/login`,{
      method:"POST",
      body:JSON.stringify(data)
    }).then(res=>res.json()).catch(err=>console.log(err))
    //axios.post(`${api}/signup`, data)
  }


  return (
    <div className="pad h-[70vh] flex flex-col justify-center items-center gap-2">
      <form onSubmit={submit} className="w-[400px] h-[300px] px-2 py-4 bg-bglight dark:bg-darker rounded-[28px] flex flex-col justify-center items-center gap-4">
        <Heading title='log in' />
        <input type="email" placeholder="Email" name="email" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" name="password" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setPassword(e.target.value)} />
        <Submit title='Log In'/>
      </form>
      <Link href="/signup" className="underline">dont have an account ? signup</Link>
      <Link href="/forgotpass" className="underline">forgot your password ?</Link>
    </div>
  )
}
