'use client'

import { useSearchParams } from "next/navigation"
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi"
import Link from "next/link"

export default function Pageination({url , results}) {
  const searchParams = useSearchParams()
  const page : number = parseInt(searchParams.get('page') || "1")
  return (
    <div className="w-[240px] h-[100px] bg-bglight dark:bg-darker flex flex-row justify-evenly items-center rounded-[10px] mx-auto mb-4">
      <Link className="w-[50px] h-[50px] input btn-hover" href={`${url}?page=${page>1?+page -1:1}`}><BiArrowToLeft/></Link>
      <div className="w-[50px] h-[50px] input bg-accentt text-darker">{page?page:1}</div>
      <Link className="w-[50px] h-[50px] input btn-hover" href={`${url}?page=${results===14?+page +1:page}`}><BiArrowToRight/></Link>
    </div>
  )
}

