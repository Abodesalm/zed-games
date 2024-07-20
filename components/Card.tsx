import Link from "next/link";


export default function Card({name, id}) {
  return (
    <Link href={`/${id}`} className={'w-[180px] h-[280px] flex flex-col justify-center items-center text-center border-2 border-accent rounded-[20px] p-1 text-dark dark:text-white text-[12px] sm:w-[150px] sm:h-[250px]         '}>
      {name}
    </Link>
  )
}
