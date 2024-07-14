import Heading from "@/components/Heading";
import Submit from "@/components/Submit";
import Link from "next/link";


export default function Signup() {
  return (
    <div className="pad h-[70vh] flex flex-col justify-center items-center gap-2">
      <form className="w-[400px] h-[500px] px-2 py-4 bg-bglight dark:bg-darker rounded-[28px] flex flex-col justify-center items-center gap-4">
        <Heading title='sign up' />
        <input type="" placeholder="Name" name="" className="w-[90%] rounded-[10px] p-4" />
        <input type="" placeholder="Email" name="" className="w-[90%] rounded-[10px] p-4" />
        <input type="" placeholder="Bio" name="" className="w-[90%] rounded-[10px] p-4" />
        <input type="" placeholder="Password" name="" className="w-[90%] rounded-[10px] p-4" />
        <input type="" placeholder="Confirm Password" name="" className="w-[90%] rounded-[10px] p-4" />
        <Submit title='Sign Up'/>
      </form>
      <Link href="/login" className="underline">have an account ? login</Link>
    </div>
  )
}
