'use client'

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi"
import Link from "next/link"

export default function Pageination({url , results}) {
  const searchParams = useSearchParams()
  const page : number = searchParams.get('page') || 1
  return (
    <div className="w-[200px] h-[100px] bg-bglight dark:bg-darker flex flex-row justify-around items-center rounded-[10px] mx-auto mb-4">
      <Link className="w-[50px] h-[50px] border border-accentt rounded-[10px] font-medium flex justify-center items-center" href={`${url}/?page=${page>1?+page -1:1}`}><BiArrowToLeft/></Link>
      <div className="w-[50px] h-[50px] border border-accentt rounded-[10px] font-medium flex justify-center items-center">{page?page:1}</div>
      <Link className="w-[50px] h-[50px] border border-accentt rounded-[10px] font-medium flex justify-center items-center" href={`${url}/?page=${results===14?+page +1:page}`}><BiArrowToRight/></Link>
    </div>
  )
}

