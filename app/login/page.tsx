'use client'
import Heading from "@/components/Heading";
import Submit from "@/components/Submit";
import { api } from "@/public/data";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";


export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState('')

  const data={"email":email,"password":password}

  const submit = (e) =>{
    e.preventDefault()
    axios.post(`${api}/users/login`,data).then(res=>res.status===200?setError('Loged In !'):setError("Error")).catch(err=>setError(err.response.data.message))
  }


  return (
    <div className="pad min-h-[70vh] flex flex-col justify-center items-center gap-2">
      <form onSubmit={submit} className="w-[400px] h-[300px] px-2 py-4 bg-bglight dark:bg-darker rounded-[28px] flex flex-col justify-center items-center gap-4">
        <Heading title='log in' />
        <p className={`${error==='Loged In !'?'text-accentt':'text-red-600'}  text-center`}>{error}</p>
        <input type="email" placeholder="Email" name="email" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" min={8} max={32} placeholder="Password" name="password" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setPassword(e.target.value)} required />
        <Submit title='Log In'/>
      </form>
      <Link href="/signup" className="underline">dont have an account ? signup</Link>
      <Link href="/forgotpass" className="underline">forgot your password ?</Link>
    </div>
  )
}
