import SignNav from "@/components/SignNav";
import ThemeSwitch from "@/components/ThemeSwitch";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="pad py-[20px_!important] bg-bglight dark:bg-darker border-b border-dark dark:border-transparent text-accenttt dark:text-accent flex justify-between items-center select-none">
      <div className="text-[20px] font-medium">Zed Games</div>
      <div className="flex gap-10">
        <ThemeSwitch />
        <Link href="/" className="md:hidden flex">
          Home
        </Link>
        <Link href="/" className="md:flex hidden">
          <AiFillHome className="text-[22px]" />
        </Link>
        <Link href="/about" className="md:hidden flex">
          About
        </Link>
        <Link href="/admin" className="md:hidden flex">
          Admin
        </Link>
        <SignNav />
      </div>
    </div>
  );
}

//<Link href='/admin' className="">Admin</Link>
