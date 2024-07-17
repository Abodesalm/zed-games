'use client'
import Heading from "@/components/Heading";
import Submit from "@/components/Submit";
import { api } from "@/public/data";
import { useState } from "react";


export default function Forgot() {

  const [email, setEmail] = useState("")
  const data={email}

  const submit = (e) =>{
    e.preventDefault()
    /* fetch(`${api}/users/forgotPassword`,{
      method:"POST",
      body:JSON.stringify(data)
    }).then(res=>res.json()).catch(err=>console.log(err)) */
    //axios.post(`${api}/signup`, data)
  }


  return (
    <div className="pad h-[70vh] flex flex-col justify-center items-center gap-2">
      <form onSubmit={submit} className="w-[400px] h-[300px] px-2 py-4 bg-bglight dark:bg-darker rounded-[28px] flex flex-col justify-center items-center gap-4">
        <Heading title='Enter Your Email' />
        <input type="email" placeholder="Email" name="email" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setEmail(e.target.value)} />
        <Submit title='Confirm'/>
      </form>
    </div>
  )
}
