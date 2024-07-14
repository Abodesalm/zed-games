import Heading from "@/components/Heading";
import Submit from "@/components/Submit";
import Link from "next/link";


export default function Login() {
  return (
    <div className="pad h-[70vh] flex flex-col justify-center items-center gap-2">
      <form className="w-[400px] h-[300px] px-2 py-4 bg-bglight dark:bg-darker rounded-[28px] flex flex-col justify-center items-center gap-4">
        <Heading title='log in' />
        <input type="" placeholder="Email" name="" className="w-[90%] rounded-[10px] p-4" />
        <input type="" placeholder="Password" name="" className="w-[90%] rounded-[10px] p-4" />
        <Submit title='Log In'/>
      </form>
      <Link href="/signup" className="underline">dont have an account ? signup</Link>
    </div>
  )
}
