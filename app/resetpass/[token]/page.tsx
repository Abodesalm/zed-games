'use client'
import Heading from "@/components/Heading"
import Submit from "@/components/Submit"
import { api } from "@/public/data"
import axios from "axios"
import Link from "next/link"
import { useState } from "react"

export default function ResetPass({params}) {
  const endPoint = `${api}/resetPassword/${params.token}`

  const [password, setPassword] = useState("")
  const [passConfirm, setPassConfirm] = useState("")
  const [error, setError] = useState('')

  const data={"password":password,"passConfirm":passConfirm}

  const submit = (e) =>{
    e.preventDefault()
    axios.post(endPoint,data).then(res=>res.status===200?setError('Loged In !'):setError("Error")).catch(err=>setError(err.response.data.message))
  }


  return (
    <div className="pad min-h-[70vh] flex flex-col justify-center items-center gap-2">
      <form onSubmit={submit} className="w-[400px] min-h-[300px] px-2 py-4 bg-bglight dark:bg-darker rounded-[28px] flex flex-col justify-center items-center gap-4">
        <Heading title='reset your password' />
        <p className={`${error==='Loged In !'?'text-accentt':'text-red-600'}  text-center`}>{error}</p>
        <input type="password" placeholder="Password" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setPassword(e.target.value)} required />
        <input type="password" placeholder="Password Confirm" className="w-[90%] rounded-[10px] p-4" onChange={(e)=>setPassConfirm(e.target.value)} required />
        <Submit title='confirm'/>
      </form>
    </div>
  )
}
