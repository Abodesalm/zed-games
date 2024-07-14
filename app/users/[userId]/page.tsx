"use client"
import { useParams } from "next/navigation"
import { useFetch } from "@/hooks/useFetch"
import { api } from "@/public/data"
import Profile from "@/sections/Profile";

export default function User() {

  const id = useParams().userId;
  const endPoint = `${api}/users/${id}`;
  const User = useFetch(endPoint)

  return (
    <div>
      <Profile />
    </div>
  )
}
