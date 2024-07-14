
import Genre from "@/components/Genre"
import { BiCalendar , BiMoney , BiDesktop } from "react-icons/bi" 

const pricing = (p)=>{
  if(p===0) return <p>Free</p>
  else if(!p) return <p>unknown !</p>
  else return <p>{p}$</p>
}

export default function GameInfo({name, desc, studio, release, genres, series, price}) {
  return (
    <div className="h-[340px] flex flex-row items-center gap-6">
      <div className="">
        <div className="h-[300px] w-[200px] rounded-[10px] bg-gray-500"></div>
      </div>
      <div className="h-[84%] flex flex-col justify-between">
        <div className="text-[24px]">{name}</div>
        <div className="max-h-[100px] w-[380px] p-1 text-[14px] bg-bglight dark:bg-darker rounded-[5px]">{desc}.</div>
        <div className="text-[15px] flex flex-row items-center gap-2 capitalize"> <BiDesktop className="text-accentt dark:text-accent text-[18px]"/> {studio}{!studio&&<p>unknown !</p>}</div>
        <div className="text-[15px] flex flex-row items-center gap-2"> <BiCalendar className="text-accentt dark:text-accent text-[18px]"/> {release}{!release&&<p>unknown !</p>}</div>
        <div className="text-[15px] flex flex-row items-center gap-2"> <BiMoney className="text-accentt dark:text-accent text-[18px]"/> {pricing(price)}</div>
        <div className="flex flex-row gap-3">{genres.map(el=>{return <Genre key={el} title={el} />})}</div>
        <div className="capitalize">{series} {series && <p className="text-[14px] inline lowercase">series.</p>}</div>
      </div>
      
    </div>
  )
}

// Name , Desc , Studio , Release , Genres , Series , Price
