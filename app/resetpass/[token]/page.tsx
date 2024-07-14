'use client'
import Submit from "@/components/Submit"
import { api } from "@/public/data"
import { useParams } from "next/navigation"

export default function ResetPass() {
  const endPoint = `${api}/resetPassword/${useParams().token}`

  return (
    <div className="pad">
      <form method="post" action="">
        <input type="password" className="input" placeholder="password" name="password"/>
        <input type="password" className="input" placeholder="confirm password" name="passConfirm"/>
        <Submit title='Submit' />
      </form>
    </div>
  )
}
